import React, { useState, useEffect } from "react";
import axios from "axios";
import Headder from "./components/Headder";
import Footer from "./components/Footer";

export default function cut() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://node-api-u9ix.onrender.com/getdel")
      .then(response => {
        const results = response.data.results; // Access 'results' array
        console.log(results); // Log the 'results' array
        setData(results); // Set 'results' to 'data'
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data from the API:", error);
        setLoading(false);
      });
  }, []);
  

  const arrayBufferToBase64 = (buffer) => {
    const binary = new Uint8Array(buffer);
    const base64 = btoa(String.fromCharCode(...binary));
    return `data:image/jpeg;base64,${base64}`;
  };

  return (
    <div className="h-auto bg-[#f2f3f5]">
      <Headder />
      <div className="flex justify-center items-center">
        <div className={`w-[1300px] ${loading ? 'h-[600px]' : 'h-auto'} bg-white mt-4 rounded-lg p-4`}>
          <h1 className="text-3xl font-bold mb-4">Data Table</h1>
          {loading ? (
            <div className="text-center">
              Loading...
            </div>
          ) : (
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">passsell</th>
                  <th className="px-4 py-2">cardcode</th>
                  <th className="px-4 py-2">cardname</th>
                  <th className="px-4 py-2">problem</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{item.passsell}</td>
                    <td className="border px-4 py-2">{item.cardcode}</td>
                    <td className="border px-4 py-2">{item.cardname}</td>
                    <td className="border px-4 py-2">{item.problem}</td>
                    <td className="border px-4 py-2">
                      {/* You can add content here */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
