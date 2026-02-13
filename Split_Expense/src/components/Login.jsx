import { useState } from "react";
import images from "../assets/Assets";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username required";
    if (!formData.password) newErrors.password = "Password required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Login success", formData);
    }
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-teal-500 to-green-600 flex items-center justify-center px-4">
      
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-2">

        <div className="flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-12">
          <h1 className="text-3xl font-bold text-gray-800">
            Split Expenses
          </h1>
          <p className="text-gray-500 mt-1 mb-8">
            Manage and split expenses easily
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username}
                </p>
              )}
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Login
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t" />
            <span className="mx-3 text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t" />
          </div>

          <button className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
              alt="Google"
            />
            <span className="text-gray-700 font-medium">
              Continue with Google
            </span>
          </button>
        </div>

        <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-teal-500 to-green-600 p-10">
          <img
            src={images.finance2}
            alt="Split expenses illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
