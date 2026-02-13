function CreateGroup() {
  return (
    <div className="w-[380px] bg-white p-8 rounded-2xl shadow-xl space-y-5 border">

      <h1 className="text-3xl font-bold text-center text-gray-800">
        Create Group
      </h1>

      {/* Group Name */}
      <div>
        <label className="text-sm text-gray-600">Group Name</label>
        <input
          type="text"
          placeholder="Trip to Paris"
          className="w-full mt-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Your Name */}
      <div>
        <label className="text-sm text-gray-600">Your Name</label>
        <input
          type="text"
          placeholder="Write your name"
          className="w-full mt-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Currency */}
      <div>
        <label className="text-sm text-gray-600">Currency</label>
        <select className="w-full mt-1 p-2 rounded-lg border border-gray-300">
          <option>Indian Rupee (INR)</option>
          <option>US Dollar (USD)</option>
        </select>
      </div>

      {/* Group Type */}
      <div>
        <label className="text-sm text-gray-600">Group Type</label>
        <select className="w-full mt-1 p-2 rounded-lg border border-gray-300">
          <option>Collaborative Group (Online)</option>
          <option>Personal Group</option>
        </select>
      </div>

      {/* Button */}
      <button className="w-full bg-green-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl transition duration-200">
        Next: Add Participants
      </button>

    </div>
  );
}

export default CreateGroup;
