import { RiComputerLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-600 w-full  p-5  max-[380px]:h-[800px]   max-[1024px]:p-0 max-[1024px]:h-[451px]" >
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center cursor-pointer text-blue-500 text-2xl font-xl mt-2">
          <RiComputerLine />
          <h1 className="pt-1">HardWare</h1>
        </div>
        <div className="w-[100%] md:w-[100%] h-[150px] md:h-auto">
          <div className="grid grid-cols-1 grid-rows-1">
            <div className="flex flex-row justify-center items-center text-center text-[#fff] text-xl flex-wrap ">
            <div className="max-[1024px]:flex max-[1024px]:flex-col  md:flex md:flex-row ">
              <div className="flex flex-col max-[650px]:mt-3 max-[1024px]:mt-3">
                <h1>ช้อปปิ้ง</h1>
                <div className="text-lg ">
                  <h1>โปรโมชั่นออนไลน์</h1>
                  <h1>เข้าสู่ระบบสำหรับช้อปออนไลน์</h1>
                  <h1>วิธีการสั่งซื้อ</h1>
                  <h1>วิธีการชำระเงิน</h1>
                  <h1>วิธีการจัดส่ง</h1>
                </div>
              </div>
              <div className="flex flex-col max-[650px]:mt-3 max-[1024px]:mt-3 ">
                <h1>ดีลเลอร์</h1>
                <div className="text-lg">
                  <h1>แจ้งชำระเงิน</h1>
                  <h1>เช็คสถานะการจัดส่ง</h1>
                  <h1>วิธีการสั่งซื้อ</h1>
                  <h1>วิธีการชำระเงิน</h1>
                  <h1>เข้าสู่ระบบสำหรับดีลเลอร์/ช่าง</h1>
                </div>
              </div>
              </div>
              <div className="max-[1024px]:flex max-[1024px]:flex-col  md:flex md:flex-row  ">
              <div className="flex flex-col max-[650px]:mt-3 max-[1024px]:mt-3 ">
                <h1>บริการช่วยเหลือ</h1>
                <div className="text-lg">
                  <h1>เงื่อนไขการรับประกัน</h1>
                  <h1>ตรวจสอบการรับประกัน</h1>
                  <h1>เช็คสถานะงานบริการ</h1>
                  <h1>คำถามที่พบบ่อย</h1>
                  <h1>นโยบายส่วนบุคคล</h1>
                </div>
              </div>
              <div className="flex flex-col max-[650px]:mt-3 max-[1024px]:mt-3 ml-5 max-[1024px]:ml-0">
                <h1>ติดต่อเรา</h1>
                <div className="text-lg">
                  <h1>เกี่ยวกับเรา</h1>
                  <h1>นักลงทุนสัมพันธ์</h1>
                  <h1>สมัครงาน</h1>
                  <h1>ที่ตั้งสำนักงานใหญ่</h1>
                  <h1>รับเรื่องร้องเรียน</h1>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
