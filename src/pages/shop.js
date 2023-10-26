import Footer from "./components/Footer";
import Headder from "./components/Headder";
import React, { useState, useEffect } from "react";
import axios from "axios";
export default function shop() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const url =
      "https://script.google.com/macros/s/AKfycbyEtdhDysTqbR_ZMPpt3vDOaS4LMXDmrvfHRSeAHuZjIlEFfj3dKJCztaF4ErR8ZlMW-w/exec?action=getUsers";
    const res = await axios.get(url);
    setData(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const skeletonDivs = Array.from({ length: 12 }, (_, index) => (
    <div
      key={index}
      className="bg-[#fff] w-[500px] h-[400px] max-[650px]:w-full flex flex-wrap justify-center items-center mr-2 mt-2 animate-wave"
    >
      {/* Render the skeleton loading UI */}
    </div>
  ));

  const dataDivs = data.slice(0, 12).map((item, index) => {
    return (
      <div
        key={index}
        className="bg-[#f2f3f5] w-[600px] h-[450px] max-[650px]:w-full flex flex-wrap justify-center items-center mr-2 mt-2 max-[650px]:bg-[#f2f3f5] max-[650px]:mr-0"
      >
        <div className="bg-[#f2f3f5] w-[300px] h-[300px] max-[650px]:w-[300px] max-[650px]:h-[300px]">
          <img src={item.images} alt="" className=" object-cover" />
        </div>
        <div>
          <h1>{item.header}</h1>
          <div className="flex flex-row justify-between items-center">
            <h1>{item.price} บาท</h1>
            <h1>ประกัน {item.guarantee}</h1>
          </div>
          <div className="flex justify-center items-center">
            <button className="w-[150px] h-[50px] rounded-lg bg-blue-500 text-[#fff]">
              {item.discount} บาท
            </button>
          </div>
        </div>
      </div>
    );
  });

  const divs = isLoading ? skeletonDivs : dataDivs;
  return (
    <div>
      <div className="h-auto bg-slate-200">
        <Headder />

        <div className="flex justify-center items-center flex-row pt-3 flex-wrap   ">
          {divs}
        </div>
        <div className="pt-[3rem]">
          <Footer />
        </div>
      </div>
    </div>
  );
}
