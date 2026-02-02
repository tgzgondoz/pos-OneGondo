import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";
import { tables } from "../constants";

const Tables = () => {
  const [status, setStatus] = useState("all");

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="px-10 py-4">
        {/* Header section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
              Tables
            </h1>
          </div>

          {/* Status filter buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setStatus("all")}
              className={`text-[#ababab] text-lg font-semibold px-5 py-2 rounded-lg transition-colors ${
                status === "all"
                  ? "bg-[#383838] text-white"
                  : "hover:bg-[#2a2a2a]"
              }`}
            >
              All
            </button>

            <button
              onClick={() => setStatus("booked")}
              className={`text-[#ababab] text-lg font-semibold px-5 py-2 rounded-lg transition-colors ${
                status === "booked"
                  ? "bg-[#383838] text-white"
                  : "hover:bg-[#2a2a2a]"
              }`}
            >
              Booked
            </button>
          </div>
        </div>

        {/* Table cards grid */}
        <div className="flex flex-wrap  gap-10 ">
        {
            tables.map((table)=> {
                return(
                    <TableCard key={table.id} name={table.name} status={table.status} initials={table.initial}/>
                )
            })
        }
         
        </div>
      </div>
      <BottomNav />
    </section>
  );
};

export default Tables;
