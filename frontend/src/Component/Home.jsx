import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";
function Home() {
  const [StoreApps, setStoreApps] = useState([]);

  useEffect(() => {
    async function fetchStoreApp() {
      try {
        const response = await axios.get("http://localhost:3000/api/storeApp");
        const data = response.data;
        setStoreApps(data);
      } catch (error) {
        console.error("Error fetching Store App data: ", error);
      }
    }
    fetchStoreApp();
  }, []);
  return (
    <>
    <NavBar/>
      <div className="bg-[#21345d] flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            {StoreApps.map((StoreApp) => (
              <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#d0ebf2] p-6">
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    {StoreApp.title}
                  </h2>
                  <p className="text-sm text-gray-500">ID: {StoreApp.id}</p>
                </div>
                <p className="text-gray-700 mb-4">{StoreApp.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg  font-semibold text-gray-900">
                    السعر: ${StoreApp.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default Home;
