import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function AddParticipants() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 text-white flex flex-col">

      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b border-gray-600">
        <FaArrowLeft
          className="cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h2 className="text-lg font-semibold">Add More Participants</h2>
      </div>

      {/* Input Section */}
      <div className="p-4 space-y-4">

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Write a name..."
            className="flex-1 bg-slate-900 border border-gray-600 rounded-xl px-4 py-3 outline-none"
          />
          <button className="bg-purple-500 px-5 rounded-xl font-medium">
            Add
          </button>
        </div>

        <button className="w-full bg-slate-700 rounded-xl py-3 flex items-center justify-center gap-2 text-purple-300">
          <HiUserGroup />
          Add from contacts
        </button>

      </div>

      {/* Participants */}
      <div className="px-4 mt-4 flex-1">
        <h3 className="font-semibold mb-3">Participants (1)</h3>

        {/* Participant Card */}
        <div className="bg-slate-700 rounded-xl p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
              H
            </div>
            <span>Hibani</span>
          </div>
          <span className="bg-purple-400 text-sm px-3 py-1 rounded-lg">
            You
          </span>
        </div>

        {/* Info Box */}
        <div className="mt-6 border border-dashed border-gray-500 rounded-xl p-6 text-center text-gray-300">
          <HiUserGroup className="mx-auto text-3xl mb-3" />
          <p className="font-medium">
            Want to add more people to the group?
          </p>
          <p className="text-sm mt-2">
            You can create the group now or add more participants later
          </p>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="p-4">
        <button className="w-full bg-purple-500 py-4 rounded-xl text-lg font-semibold">
          Create Group
        </button>
      </div>

    </div>
  );
}
