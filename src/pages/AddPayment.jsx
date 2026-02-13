import React from "react";

export default function AddPayment() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">

      {/* Header */}
      <div className="flex items-center gap-4 px-4 py-4 bg-[#1f2b45] text-white">
        <button className="text-2xl">←</button>
        <h1 className="text-xl font-semibold">Add Payment</h1>
      </div>

      {/* Form */}
      <div className="flex-1 px-5 py-6 space-y-6">

        {/* Who Pays */}
        <div>
          <label className="text-sm font-medium">Who pays? *</label>
          <select className="w-full mt-2 bg-gray-100 p-4 rounded-xl outline-none focus:ring-2 focus:ring-indigo-400">
            <option>Select...</option>
            <option>You</option>
            <option>Friend</option>
          </select>
        </div>

        {/* Who receives */}
        <div>
          <label className="text-sm font-medium">Who receives? *</label>
          <input
            type="text"
           
            readOnly
            className="w-full mt-2 bg-gray-100 p-4 rounded-xl text-gray-500 outline-none"
          />
        </div>

        {/* Amount */}
        <div>
          <label className="text-sm font-medium">Amount *</label>
          <div className="w-full mt-2 bg-gray-100 p-5 rounded-xl text-3xl font-semibold text-gray-600">
            ₹ 0.00
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-medium">
            Description (Optional)
          </label>
          <input
            type="text"
            placeholder="E.g: Dinner"
            className="w-full mt-2 bg-gray-100 p-4 rounded-xl outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      {/* Bottom Button */}
      <div className="p-4">
        <button className="w-full bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl text-lg font-semibold">
          Add Payment
        </button>
      </div>

    </div>
  );
}