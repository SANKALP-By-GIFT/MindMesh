import { useContext } from "react";
import Navbar from "../components/layout/Navbar";
import ExpenseForm from "../components/expenses/ExpenseForm";
import { ExpenseContext } from "../context/ExpenseContext";
import { FaTrash } from "react-icons/fa";

const ExpensesPage = () => {
  const { expenses, deleteExpense, members } = useContext(ExpenseContext);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto space-y-6">
        
        {/* Add Expense Form */}
        <ExpenseForm />

        {/* Expense List */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">
            Expense List
          </h2>

          {expenses.length === 0 && (
            <p className="text-gray-500 text-sm">
              No expenses added yet.
            </p>
          )}

          {expenses.map((exp) => {
            const payerName =
              members.find((m) => m.id === exp.payer)?.name || "Unknown";

            return (
              <div
                key={exp.id}
                className="flex justify-between items-center border p-3 rounded-md mb-2"
              >
                <div>
                  <p className="font-medium">₹{exp.amount}</p>
                  <p className="text-sm text-gray-500">
                    Paid by {payerName}
                  </p>
                  <p className="text-xs text-gray-400">
                    {exp.description}
                  </p>
                </div>

                <button
                  onClick={() => deleteExpense(exp.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ExpensesPage;
