"use client";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { useContext } from "react";
import { StringContext } from "@/Components/provider/SessionWrapper";

const user = {
wallet_id:"dmwk398r73fh",
 
 

 ethereum:0,
 bitcoin:0, 

};

const DashboardPage: React.FC = () => {
  const context=useContext(StringContext)
  if (!context) {
    // Handle the case when context is undefined
    throw new Error("useStringContext must be used within a StringProvider");
  }
const {count,setCount}=context;
 
  return (
    <>
      <Navbar />
      <div className="bg-transparent backdrop-blur-lg p-6 max-w-4xl min-h-[70vh] mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold">{count}kejedjhudwfhfi</h1>
            {/* <p className="text-gray-600">{user.position}</p> */}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Personal Information Panel */}
       



         

          {/* Ratings Panel */}
          <div className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Ethereum</h2>
            <p>
              {user.ethereum} ETH
            </p>
          </div>

          {/* Performance Status Panel */}
          <div className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Bitcoin</h2>
            <p>
              {user.bitcoin}  BTC</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;
