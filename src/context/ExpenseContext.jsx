import { createContext, useState, useEffect } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [group, setGroup] = useState(() => {
    return JSON.parse(localStorage.getItem("group")) || null;
  });

  const [members, setMembers] = useState(() => {
    return JSON.parse(localStorage.getItem("members")) || [];
  });

  const [expenses, setExpenses] = useState(() => {
    return JSON.parse(localStorage.getItem("expenses")) || [];
  });

  useEffect(() => {
    localStorage.setItem("group", JSON.stringify(group));
    localStorage.setItem("members", JSON.stringify(members));
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [group, members, expenses]);

  const createGroup = (name, description) => {
    setGroup({
      id: Date.now().toString(),
      name,
      description,
    });
  };

  const addMember = (name) => {
    setMembers((prev) => [...prev, { id: Date.now().toString(), name }]);
  };

  const deleteMember = (id) => {
    // Remove member
    setMembers((prev) => prev.filter((m) => m.id !== id));

    // Also remove expenses where member involved
    setExpenses((prev) =>
      prev.filter(
        (exp) =>
          exp.payer !== id &&
          !exp.participants.includes(id)
      )
    );
  };

  const addExpense = (data) => {
    setExpenses((prev) => [...prev, { ...data, id: Date.now().toString() }]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  return (
    <ExpenseContext.Provider
      value={{
        group,
        createGroup,
        members,
        addMember,
        deleteMember,
        expenses,
        addExpense,
        deleteExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
