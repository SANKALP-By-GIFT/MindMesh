import { useMemo } from "react";

export const useBalanceCalculator = (members, expenses) => {
  return useMemo(() => {
    const totals = {};
    const balances = {};

    members.forEach((m) => {
      totals[m.id] = 0;
      balances[m.id] = 0;
    });

    expenses.forEach((exp) => {
      const share = exp.amount / exp.participants.length;

      totals[exp.payer] += exp.amount;
      balances[exp.payer] += exp.amount;

      exp.participants.forEach((p) => {
        balances[p] -= share;
      });
    });

    const settlements = [];
    const creditors = [];
    const debtors = [];

    Object.entries(balances).forEach(([id, bal]) => {
      if (bal > 0) creditors.push({ id, bal });
      if (bal < 0) debtors.push({ id, bal });
    });

    creditors.forEach((c) => {
      debtors.forEach((d) => {
        if (c.bal > 0 && d.bal < 0) {
          const amount = Math.min(c.bal, Math.abs(d.bal));

          settlements.push({
            from: d.id,
            to: c.id,
            amount,
          });

          c.bal -= amount;
          d.bal += amount;
        }
      });
    });

    return { totals, balances, settlements };
  }, [members, expenses]);
};
