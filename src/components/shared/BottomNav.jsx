import React from 'react'
import { IoHome } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { FaTableList } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';


const BottomNav = () => {
  const navigate = useNavigate();
  return (
    <div className=' fixed bottom-0 left-0  right-0 bg-[#262626] p-2 h-16 flex justify-around'>
       <button onClick={() => navigate ("/")}className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]'> <IoHome className='inline mr-2 'size={30}/><p>Home</p> </button>
       <button onClick={() => navigate ("orders")} className='flex items-center justifycenter text-[#ababab]  w-[200px]'> <IoMenu className='inline mr-2 'size={30}/><p>Orders</p></button>
       <button onClick={() => navigate ("table")}className='flex items-center justify-center text-[#ababab]  w-[200px]'> <FaTableList className='inline mr-2 'size={30} /><p>Tables</p></button>
       <button className='flex items-center justify-center text-[#ababab]  w-[200px]'> <IoIosMore className='inline mr-2 'size={30}/><p>More</p></button>

       <button className='absolute bottom-6 bg-[#F6b100] text-[#f5f5f5] rounded-full p-3 items-center'><BiSolidPurchaseTag size={30}/></button>
     </div>
  )
}

export default BottomNav