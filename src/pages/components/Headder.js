import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineLogin,
} from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { TbLogin } from "react-icons/tb";

import { useRouter } from "next/router";
export default function Headder() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-1 grid-rows-1 bg-gradient-to-t from-amber-200 to-blue-300 p-3">
        <div className="flex flex-row items-center ml-3 text-[#fff] text-xl justify-between">
          <div
            className="flex flex-row items-center cursor-pointer text-white"
            onClick={() => router.push("/move")}
          >
    
            <h1 className="pl-1">RSM</h1>
          </div>
          <div className="flex items-center flex-row mr-3 outline-none border-none md:m-0">
            <div className="flex md:hidden" onClick={toggleMobileNav}>
              {isMobileNavOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
            <div className="max-[650px] hidden md:flex md:p-0  ">
     
              <button
                className="bg-white text-[#333] hover:bg-[#333] hover:text-[#fff] p-1 mr-2 rounded-md flex items-center outline-none text-sm"
                onClick={() => router.push("/move")}
              >
              
              ย้ายแฟ้มย้ายร้านให้เซลล์อีกคน
              </button>
              <button
                className="bg-white text-[#333] hover:bg-[#333] hover:text-[#fff] p-1 mr-2 rounded-md flex items-center outline-none text-sm"
                onClick={() => router.push("/cut")}
              >
             
              ตัดร้าน
              </button>
              <button
                className="bg-white text-[#333] hover:bg-[#333] hover:text-[#fff] p-1 mr-2 rounded-md flex items-center outline-none text-sm"
                onClick={() => router.push("/edit")}
              >

              แก้ชื่อร้านค้าหรือเลขที่เสียภาษี
              </button>
              <button
                className="bg-white text-[#333] hover:bg-[#333] hover:text-[#fff] p-1 mr-2 rounded-md flex items-center outline-none text-sm"
                onClick={() => router.push("/information")}
              >

              คู่มือการใช้งาน
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMobileNavOpen && (
        <div className="md:hidden bg-[#fff] w-full h-[200px] flex flex-col justify-center items-center text-center">
        
          <button
            className="mt-3 hover:text-[#06b6d4] flex items-center"
            onClick={() => router.push("/move")}
          >
   ย้ายแฟ้มย้ายร้านให้เซลล์อีกคน
          </button>
          <button
            className="mt-3 hover:text-[#06b6d4] flex items-center"
            onClick={() => router.push("/cut")}
          >
                    ตัดร้าน
          </button>
          <button
            className="mt-3 hover:text-[#06b6d4] flex items-center"
            onClick={() => router.push("/edit")}
          >
          แก้ชื่อร้านค้าหรือเลขที่เสียภาษี
          </button>
          <button
                className="mt-3 hover:text-[#06b6d4] flex items-center"
                onClick={() => router.push("/information")}
              >

              คู่มือการใช้งาน
              </button>
        </div>
      )}
    </div>
  );
}