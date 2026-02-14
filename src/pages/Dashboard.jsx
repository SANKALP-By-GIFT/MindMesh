import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Navbar from "../components/layout/Navbar";
import BalanceSummary from "../components/dashboard/BalanceSummary";
import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { group } = useContext(ExpenseContext); 
  


  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          Dashboard Summary
        </h2>

        {/* ✅ SHOW GROUP DETAILS HERE */}
        {group ? (
          <div className="bg-white p-4 rounded-xl shadow mb-6">
            <h3 className="text-lg font-semibold">{group.name}</h3>
            <p className="text-gray-600 text-sm">
              {group.description}
            </p>
          </div>
        ) : (
          <div className="bg-yellow-100 text-yellow-700 p-4 rounded-md mb-6">
            No group created yet. Please create a group.
          </div>
        )}

        {/* Balance Summary */}
        <BalanceSummary />
      </div>

      {/* Floating Add Member Button */}
      <button
        onClick={() => navigate("/members")}
        className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 
                   text-white p-4 rounded-full shadow-lg transition duration-300"
      >
        <FaPlus size={20} />
      </button>
    </div>
  );
};

export default Dashboard;
