import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Headder from "./components/Headder";
import Footer from "./components/Footer";
import { useState } from "react";
export default function login() {
  const MySwal = withReactContent(Swal);
  const [inputs, setInputs] = useState({});
  const [validationErrors, setValidationErrors] = useState({});
  const router = useRouter();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    setValidationErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Regex patterns for username and password validation
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]+$/;

    // Validate username
    if (!inputs.username || !usernameRegex.test(inputs.username)) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        username: "กรุณากรอกชื่อผู้ใช้ที่ถูกต้อง.",
      }));
      return;
    }

    // Validate password
    if (!inputs.password || !passwordRegex.test(inputs.password)) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        password: "กรุณาใส่รหัสผ่านที่ถูกต้อง",
      }));
      return;
    }

    axios
      .post("https://node-api-u9ix.onrender.com/login", inputs)
      .then((response) => {
        const result = response.data;
        console.log(result);

        // Handle login success here
        if (result.status === "ok") {
          MySwal.fire({
            html: <i>{result.message}</i>,
            icon: "success",
          }).then(() => {
            router.push("/");
          });
        } else {
          MySwal.fire({
            title: <strong>Login failed.</strong>,
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
        className="flex justify-center w-full h-[100vh]  bg-[#fff] bg-cover bg-center"
        style={{
          backgroundImage: "url(https://wallpaperaccess.com/full/2289563.jpg)",
        }}
      >
        <div className="flex justify-center items-center  ">
          <form onSubmit={handleSubmit}>
            <div className="  p-[3rem] bg-[#fff] border border-none rounded-xl opacity-70">
              <div className="text-gray-950 text-center pt-3 text-2xl ">
                <h1>เข้าสู่ระบบ</h1>

                <div className="mt-[2rem]">
                  <h1>ชื่อผู้ใช้</h1>
                  <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                    className={`bg-[#01BAB5] text-[#fff] rounded-xl  outline-none ${
                      validationErrors.username ? "outline-red-500" : ""
                    }`}
                  />
                  {validationErrors.username && (
                    <h1 className="text-red-500 mt-[1rem]">
                      {validationErrors.username}
                    </h1>
                  )}
                </div>
                <div className="mt-[2rem]">
                  <h1>รหัสผ่าน</h1>
                  <input
                    type="password"
                    name="password"
                    value={inputs.password || ""}
                    onChange={handleChange}
                    className={`bg-[#01BAB5] text-[#fff] rounded-xl border-none outline-none ${
                      validationErrors.password ? "outline-red-500" : ""
                    }`}
                  />
                  {validationErrors.password && (
                    <h1 className="text-red-500 mt-[1rem]">
                      {validationErrors.password}
                    </h1>
                  )}
                </div>
                <div className="mt-[2rem]">
                  <input
                    type="submit"
                    value="เข้าสู่ระบบ"
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
