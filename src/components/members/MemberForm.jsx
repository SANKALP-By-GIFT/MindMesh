import { useState, useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";
import { FaUserPlus } from "react-icons/fa";

const MemberForm = () => {
  const { addMember, members } = useContext(ExpenseContext);
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (!name.trim()) return;
    addMember(name);
    setName("");
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="font-semibold mb-3">Add Member</h2>

      <div className="flex flex-col sm:flex-row gap-2">
        <input
          className="border p-2 rounded-md flex-1"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2"
        >
          <FaUserPlus />
          Add
        </button>
      </div>

      <p className="text-sm text-gray-500 mt-2">
        Members: {members.length} (Minimum 3 required)
      </p>
    </div>
  );
};

export default MemberForm;
