import React from "react";
import { FaPlus } from "react-icons/fa";
import images from "../assets/Assets";
import { useNavigate } from "react-router-dom";





const Dashbord=()=>{
    const navigate = useNavigate();
   return(
    <>
         <div className="min-h-screen bg-gray-100 flex flex-col justify-between items-center sm:px-6 md:px-10 py-8">

      <div className="flex flex-col items-center w-full max-w-4xl">

        <div className="bg-teal-600 
                        w-16 h-16 
                        sm:w-16 sm:h-16 
                        md:w-19 md:h-19 
                        rounded-2xl 
                        flex items-center justify-center shadow-md">
          <h1 className="text-white text-3xl sm:text-3xl 
                         md:text-4xl font-bold">S</h1>
        </div>

        <img
          src={images.img_exam}
          alt="Group Illustration"
          className="w-64 
                     sm:w-52 
                     md:w-66 
                     mt-6 sm:mt-8"
        />

        <h2 className="text-lg 
                       sm:text-xl 
                       md:text-2xl 
                       font-semibold 
                       text-gray-800 
                       mt-6 
                       text-center">
          Shared expenses, simplified
        </h2>

        <p className="text-gray-500 
                      text-sm 
                      sm:text-base 
                      text-center 
                      mt-2 
                      max-w-xs 
                      sm:max-w-md">
          The easiest way to split expenses with friends — no sign-up required.
        </p>
      </div>

      <div className="w-full 
                      max-w-xs 
                      sm:max-w-sm 
                      md:max-w-md 
                      mt-10 
                      space-y-4">

        <button className="w-85 
                           bg-teal-600 
                           text-white 
                           lg:ml-16 md:ml-13 sm-7 
                           py-3 sm:py-4 
                           rounded-xl 
                           flex items-center justify-center gap-3 
                           text-base sm:text-lg 
                           font-medium 
                           shadow-md 
                           hover:bg-teal-700 
                           transition duration-300" onClick={()=>{ navigate('/addparticipants')}}>
          <FaPlus />
          Create a new group
        </button>

        

      </div>
    </div> 
    </>
   )
}
export default Dashbord;



