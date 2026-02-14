import { useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";
import { useBalanceCalculator } from "../../hooks/useBalanceCalculator";

const BalanceSummary = () => {
  const { members, expenses } = useContext(ExpenseContext);
  const { totals, balances, settlements } =
    useBalanceCalculator(members, expenses);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="font-semibold mb-3">Balance Summary</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {members.map((m) => (
          <div key={m.id} className="border p-3 rounded-lg">
            <h3 className="font-medium">{m.name}</h3>
            <p className="text-sm text-gray-500">
              Paid: ₹{totals[m.id] || 0}
            </p>
            <p
              className={`font-semibold ${
                balances[m.id] > 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              ₹{balances[m.id]?.toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h3 className="font-medium">Settlements</h3>
        {settlements.length === 0 && (
          <p className="text-gray-500 text-sm">All settled 🎉</p>
        )}
        {settlements.map((s, i) => {
          const from = members.find((m) => m.id === s.from)?.name;
          const to = members.find((m) => m.id === s.to)?.name;
          return (
            <p key={i} className="text-sm mt-1">
              {from} owes {to} ₹{s.amount.toFixed(2)}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default BalanceSummary;
