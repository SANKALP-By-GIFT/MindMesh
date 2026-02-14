import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Simple frontend validation simulation
    if (data.username === "admin" && data.password === "123456") {
      login(data.username);
      navigate("/create-group");

    } else {
      alert("Invalid Credentials (Try: admin / 123456)");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Expense Splitter Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Username */}
          <div>
            <input
              type="text"
              placeholder="Username"
              className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters required",
                },
              })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required",
                },
              })}
            />

            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 transition 
                       text-white w-full py-3 rounded-md flex 
                       justify-center items-center gap-2"
          >
            <FaSignInAlt />
            Login
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Demo Credentials: <br />
          Username: <strong>admin</strong> <br />
          Password: <strong>123456</strong>
        </p>
      </div>
    </div>
  );
};

export default Login;
