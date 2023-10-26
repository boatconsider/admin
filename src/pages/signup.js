import Headder from "./components/Headder";
import Footer from "./components/Footer";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import withReactContent from "sweetalert2-react-content";
export default function signup() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const MySwal = withReactContent(Swal);
  const router = useRouter();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Regex patterns for validation
    const thaiAndEnglishRegex = /^[\p{L} ]+$/u; // Allows Thai and English characters
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]+$/;

    // Validate fname
    if (!inputs.fname || !thaiAndEnglishRegex.test(inputs.fname)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fname: "กรุณากรอกชื่อที่ถูกต้อง",
      }));
      return;
    }

    // Validate lname
    if (!inputs.lname || !thaiAndEnglishRegex.test(inputs.lname)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lname: "กรุณากรอกนามสกุลที่ถูกต้อง",
      }));
      return;
    }

    // Validate username
    if (!inputs.username || !usernameRegex.test(inputs.username)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "กรุณากรอกชื่อผู้ใช้ที่ถูกต้อง",
      }));
      return;
    }

    // Validate password
    if (!inputs.password || !passwordRegex.test(inputs.password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "กรุณากรอกตัวเลขตัวอักษรภาษาอังกฤษตัวเล็กและตัวใหญ่",
      }));
      return;
    }

    axios
      .post("https://node-api-u9ix.onrender.com/register", inputs)
      .then((response) => {
        const result = response.data;
        console.log(result);

        // Handle registration success here
        if (result.status === "ok") {
          MySwal.fire({
            html: <i>{result.message}</i>,
            icon: "success",
          }).then(() => {
            router.push("/login");
          });
        } else {
          MySwal.fire({
            html: <i>{result.message}</i>,
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.log("Error:", error.message);
        // Handle the error here
      });

    console.log(inputs);
  };
  return (
    <div>
      <div>
        <Headder />
      </div>
      <div
        className="flex justify-center w-full h-[100vh] max-[650px] bg-[#fff] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://wallpaperbat.com/img/192020-minimal-forest-wallpaper-top-free-minimal-forest-background.jpg)",
        }}
      >
        <div className="flex justify-center items-center  ">
          <form onSubmit={handleSubmit}>
            <div className=" pl-[5rem] pr-[5rem] py-5 max-[650px]:p-3.5 bg-[#fff] border border-none rounded-xl opacity-70">
              <div className="text-gray-950 text-center pt-3 text-2xl max-[650px]:w-full">
                <h1 className="mt-3">สมัครสมาชิก</h1>
                <div className="mt-[2rem]">
                  <h1>ชื่อ</h1>
                  <input
                    type="text"
                    name="fname"
                    onChange={handleChange}
                    value={inputs.fname || ""}
                    className={`bg-[#01BAB5] text-[#fff] rounded-xl border-none outline-none ${
                      errors.fname && "outline-red"
                    }`}
                  />
                  {errors.fname && (
                    <p className="text-red-500">{errors.fname}</p>
                  )}
                </div>
                <div className="mt-[2rem]">
                  <h1>นามสกุล</h1>
                  <input
                    type="text"
                    name="lname"
                    onChange={handleChange}
                    value={inputs.lname || ""}
                    className={`bg-[#01BAB5] text-[#fff] rounded-xl border-none outline-none ${
                      errors.lname && "outline-red"
                    }`}
                  />
                  {errors.lname && (
                    <p className="text-red-500">{errors.lname}</p>
                  )}
                </div>
                <div className="mt-[2rem]">
                  <h1>ชื่อผู้ใช้</h1>
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={inputs.username || ""}
                    className={`bg-[#01BAB5] text-[#fff] rounded-xl border-none outline-none ${
                      errors.username && "outline-red"
                    }`}
                  />
                  {errors.username && (
                    <p className="text-red-500">{errors.username}</p>
                  )}
                </div>
                <div className="mt-[2rem]">
                  <h1>รหัสผ่าน</h1>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={inputs.password || ""}
                    className={`bg-[#01BAB5] text-[#fff] rounded-xl border-none outline-none ${
                      errors.password && "outline-red"
                    }`}
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password}</p>
                  )}
                </div>
                <div className="mt-[2rem]">
                  <input
                    type="submit"
                    value="สมัครสมาชิก"
                    className="outline-none border-[#333] w-[150px] h-[50px] bg-[#01BAB5] text-[#fff] rounded-2xl cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
