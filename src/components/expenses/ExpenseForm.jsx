import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";
import { FaPlusCircle } from "react-icons/fa";

const ExpenseForm = () => {
  const { members, addExpense } = useContext(ExpenseContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (!data.participants) return;

    addExpense({
      payer: data.payer,
      amount: parseFloat(data.amount),
      participants: Array.isArray(data.participants)
        ? data.participants
        : [data.participants],
      description: data.description,
      date: data.date,
    });

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-4 rounded-xl shadow-md"
    >
      <h2 className="font-semibold mb-3">Add Expense</h2>

      <div className="grid md:grid-cols-2 gap-3">
        <select
          {...register("payer", { required: true })}
          className="border p-2 rounded-md"
        >
          {members.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Amount"
          {...register("amount", { required: true, min: 1 })}
          className="border p-2 rounded-md"
        />

        <input
          type="date"
          {...register("date")}
          className="border p-2 rounded-md"
        />

        <input
          placeholder="Description"
          {...register("description")}
          className="border p-2 rounded-md"
        />
      </div>

      <div className="mt-3">
        <p className="text-sm font-medium">Participants</p>
        <div className="flex flex-wrap gap-3 mt-1">
          {members.map((m) => (
            <label key={m.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={m.id}
                {...register("participants", { required: true })}
              />
              {m.name}
            </label>
          ))}
        </div>
      </div>

      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
        <FaPlusCircle />
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
