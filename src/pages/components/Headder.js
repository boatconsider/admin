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
      <div className="grid grid-cols-1 grid-rows-1 bg-gradient-to-r from-cyan-200 to-blue-600 p-5">
        <div className="flex flex-row items-center ml-3 text-[#fff] text-xl justify-between">
          <div
            className="flex flex-row items-center cursor-pointer text-blue-500"
            onClick={() => router.push("/")}
          >
            <RiComputerLine />
            <h1 className="pl-1">HardWare</h1>
          </div>
          <div className="flex items-center flex-row mr-3 outline-none border-none md:m-0">
            <div className="flex md:hidden" onClick={toggleMobileNav}>
              {isMobileNavOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
            <div className="max-[650px] hidden md:flex md:p-0  ">
              <button
                className="text-[#fff] hover:bg-[#06b6d4] hover:text-[#fff] p-1 mr-2 rounded-md flex items-center outline-none"
                onClick={() => router.push("/")}
              >
                <AiOutlineHome />
                หน้าหลัก
              </button>
              <button
                className="text-[#fff] hover:bg-[#06b6d4] hover:text-[#fff] p-1 mr-2 rounded-md flex items-center outline-none"
                onClick={() => router.push("/shop")}
              >
                <AiOutlineShoppingCart />
                ร้านค้า
              </button>
              <button
                className="text-[#fff] hover:bg-[#06b6d4] hover:text-[#fff] p-1 mr-2 rounded-md flex items-center outline-none"
                onClick={() => router.push("/login")}
              >
                <AiOutlineLogin />
                เข้าสู่ระบบ
              </button>
              <button
                className="text-[#fff] hover:bg-[#06b6d4] hover:text-[#fff] p-1 mr-2 rounded-md flex items-center outline-none"
                onClick={() => router.push("/signup")}
              >
                <TbLogin />
                สมัครสมาชิก
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMobileNavOpen && (
        <div className="md:hidden bg-[#fff] w-full h-[200px] flex flex-col justify-center items-center text-center">
          <button
            className="mt-3 hover:text-[#06b6d4] flex items-center"
            onClick={() => router.push("/")}
          >
            <AiOutlineHome />
            หน้าหลัก
          </button>
          <button
            className="mt-3 hover:text-[#06b6d4] flex items-center"
            onClick={() => router.push("/shop")}
          >
            <AiOutlineShoppingCart />
            ร้านค้า
          </button>
          <button
            className="mt-3 hover:text-[#06b6d4] flex items-center"
            onClick={() => router.push("/login")}
          >
            <AiOutlineLogin />
            เข้าสู่ระบบ
          </button>
          <button
            className="mt-3 hover:text-[#06b6d4] flex items-center"
            onClick={() => router.push("/signup")}
          >
            <TbLogin />
            สมัครสมาชิก
          </button>
        </div>
      )}
    </div>
  );
}
