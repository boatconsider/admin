import Footer from "./components/Footer";
import Headder from "./components/Headder";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
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
    <div className="h-[100vh] bg-slate-200">
      <Headder />
      <div className=" w-full h-[1200px] mt-2  ">
        <div className="grid grid-cols-[800px_minmax(0px,_1fr)] grid-row-[800px_minmax(200px,_1fr)] gap-x-2 gap-y-2 max-[650px]:grid-row-1 max-[650px]:grid-cols-1 max-[820px]:grid-cols-[450px_minmax(0px,_1fr)] max-[1024px]:grid-cols-[500px_minmax(0px,_1fr)]">
          <div className="w-full bg-[#fff] h-[550px] ">
            <img
              src="https://cdn.shopify.com/s/files/1/0624/7949/9512/files/graphicscards_1024x1024.jpg?v=1648720902"
              alt=""
              className=" w-full h-full"
            />
          </div>
          <div className="w-full bg-[#fff] h-[550px]">
            <img
              src="https://www.appdisqus.com/wp-content/uploads/2023/01/pLiv2jeg8Fb7KdjPAyyhCJ-1200-80.jpg.webp"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="  grid grid-cols-[600px_minmax(0px,_1fr)] grid-row-[800px_minmax(200px,_1fr)] gap-x-2 gap-y-2 w-full mt-2 max-[650px]:grid-row-1 max-[650px]:grid-cols-1  max-[820px]:grid-cols-[450px_minmax(0px,_1fr)]  max-[1024px]:grid-cols-[500px_minmax(0px,_1fr)]">
          <div className="w-full bg-[#fff] h-[550px]">
            <img
              src="https://secure.zortout.com/Home/DisplayProductImage?pid=14687478"
              alt=""
              className="h-full w-full"
            />
          </div>
          <div className="w-full bg-[#fff] h-[550px]">
            <img
              src="https://inwfile.com/s-ge/o0fctq.jpg"
              alt=""
              className="h-full w-full"
            />
          </div>
        </div>
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
