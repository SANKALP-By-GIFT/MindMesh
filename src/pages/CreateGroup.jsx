import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ExpenseContext } from "../context/ExpenseContext";
import { useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

const CreateGroup = () => {
  const { createGroup } = useContext(ExpenseContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createGroup(data.name, data.description);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-indigo-500 to-purple-600 px-4">

      <div className="bg-white p-8 rounded-2xl shadow-2xl 
                      w-full max-w-md transition duration-300 
                      hover:shadow-3xl">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3 text-indigo-600">
            <FaUsers size={28} />
          </div>
          <h2 className="text-2xl font-bold">
            Create Your Group
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Start managing shared expenses easily
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Group Name */}
          <div>
            <input
              placeholder="Group Name"
              className="border p-3 rounded-lg w-full 
                         focus:outline-none focus:ring-2 
                         focus:ring-indigo-400 transition"
              {...register("name", {
                required: "Group name is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters required",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <textarea
              placeholder="Group Description"
              rows="3"
              className="border p-3 rounded-lg w-full 
                         focus:outline-none focus:ring-2 
                         focus:ring-indigo-400 transition resize-none"
              {...register("description", {
                maxLength: {
                  value: 100,
                  message: "Maximum 100 characters allowed",
                },
              })}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 
                       transition duration-300 text-white 
                       w-full py-3 rounded-lg font-medium 
                       shadow-md hover:shadow-lg"
          >
            Create Group
          </button>

        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
