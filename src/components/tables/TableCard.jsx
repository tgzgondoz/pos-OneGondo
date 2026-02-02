import React from 'react'
import { getRandomBG } from '../../utils'

const TableCard = ({key, name, status,initials}) => {


  return (
    <div key={key} className="w-[300px] hover:bg-[#2c2c2c] bg-[#262626] p-4 rounded-lg  cursor-pointer  ">
      <div className="flex items-center justify-between px-1">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">{name}</h1>
        <p className={` ${status==="Booked" ?"text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg":"text-[white] bg-[#664a04] text-white"} px-2 py-1 rounded-lg`}>
          {status}
        </p>
      </div>
      <div className="flex items-center justify-center mt-5 mb-7">
        <div className="bg-[#025cca]  text-white rounded-full w-24 h-24 flex items-center justify-center">
          <h1 className ={`${getRandomBG()} text-white  rounded-full p-5 text-xl`}>{initials}</h1>
        </div>
      </div>
    </div>
  )
}

export default TableCard