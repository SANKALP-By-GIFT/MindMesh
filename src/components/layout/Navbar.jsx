import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="bg-indigo-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex gap-4">
          <Link to="/dashboard">Home</Link>
          <Link to="/members">Members</Link>
          <Link to="/expenses">Expenses</Link>
        </div>

        <button
          onClick={logout}
          className="bg-red-500 px-3 py-1 rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
