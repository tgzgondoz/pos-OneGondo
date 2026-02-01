import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

const Headers = () => {
  return (
    <header className="flex justify-between items-center py-4 px-4 px-6 bg-[#1a1a1a]">
      {/*LOGO*/}
      <div className="flex items-center gap-2">
        <img src="logo" className="h-8 w-8" alt="OneGondo logo" />
        <h1 className="text-lg font-semibold text-[#f5f5f5]">OneGondo</h1>
      </div>

      {/*  SEARCH */}
      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px]">
        <IoIosSearch className="text-[#f5f5f5]" />
        <input
          type="text"
          placeholder="Search"
          className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
        />
      </div>

      {/*LOGGED  USER DEATILS */}

      <div className="flex items-center gap-4">
        <div className="bg-[#1f1f1f] roueded-[15px] p-3 cursor-pointer ">
          <FaRegBell className="text-[#f5f5f5] text-2xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUser className="text-[#f5f5f5] text-4xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-[#f5f5f5] font-semibold">Tatenda Gondo</h1>
            <p className="text-[#ababab] font-medium">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
