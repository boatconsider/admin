import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from 'antd';

import Headder from "./components/Headder";
import Footer from "./components/Footer";

export default function move() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios.get("https://node-api-u9ix.onrender.com/getfam")
      .then(response => {
        const results = response.data.results;
        console.log(results);

        setData(results.reverse());
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data from the API:", error);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData(); // Fetch initial data
  }, []); // This will run only once to fetch initial data

  const columns = [
    {
      title: 'รหัสเซลล์',
      dataIndex: 'passsell',
      key: 'passsell',
    },
    {
      title: 'รหัสร้านค้า',
      dataIndex: 'cardcode',
      key: 'cardcode',
    },
    {
      title: 'ชื่อร้านค้า',
      dataIndex: 'cardname',
      key: 'cardname',
    },
    {
      title: 'แฟ้มเก่า',
      dataIndex: 'oldfam',
      key: 'oldfam',
    },
    {
      title: 'แฟ้มใหม่',
      dataIndex: 'newfam',
      key: 'newfam',
    },
    {
      title: 'หมายเหตุ',
      dataIndex: 'problem',
      key: 'problem',
    },
   ];

  const isDataSmall = data.length < 5;



  return (
    <div className="h-auto bg-[#f2f3f5]">
      <Headder />
      <div className="flex justify-center items-center">
        <div className={`w-[1300px] max-[540px]:w-[360px] bg-white mt-4 rounded-lg p-4 ${isDataSmall ? 'h-[600px]' : 'h-auto'}`}>
          <h1 className="text-3xl font-bold mb-4">ตารางการย้ายแฟ้ม</h1>
      
          {loading ? (
            <div className="text-center">
              Loading...
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table columns={columns} dataSource={data} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
