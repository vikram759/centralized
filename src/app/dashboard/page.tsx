"use client";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { useContext,useEffect } from "react";
import { StringContext } from "@/Components/provider/SessionWrapper";

const user = {
wallet_id:"dmwk398r73fh",
 
 

 ethereum:0,
 bitcoin:0, 
 amount:0,
 name:"XYZ",
 email:"abc@example.com",
 aadhar:"80X XXX XXX"

};

const DashboardPage: React.FC = () => {
  const context=useContext(StringContext)
  if (!context) {
    // Handle the case when context is undefined
    throw new Error("useStringContext must be used within a StringProvider");
  }
const {count,setCount}=context;

useEffect(() => {
 console.log(count)


}, [])



 
  return (
    <>
      <Navbar />
      <div className="bg-transparent backdrop-blur-lg p-6 max-w-4xl min-h-[70vh] mx-auto ">
        {/* Header */}
        <div className=" space-x-4">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex gap-9">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <h1 className="text-2xl font-bold">{count}djnjwfnwjf</h1>
            {/* <p className="text-gray-600">{user.position}</p> */}
          </div>
          <div className="flex gap-9 mt-3">
            <h1 className="text-2xl font-bold">{user.email}</h1>
            <h1 className="text-2xl font-bold">{user.aadhar}f</h1>
            {/* <p className="text-gray-600">{user.position}</p> */}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-7">
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
          <div className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Amount</h2>
            <p>
             ₹ {user.amount} </p>
          </div>
        </div>
      <div className="flex w-[800px] gap-[70px] justify-center mt-[40px]   ">
      <div className="text-gray-900 h-[40px] bg-gray-300 p-2 w-[100px] rounded-md text-center">Deposit</div>
      <div className="text-gray-900 h-[40px] bg-gray-300 p-2 w-[100px] rounded-md text-center">Withdraw</div>
      <div className="text-gray-900 h-[40px] bg-gray-300 p-2 w-[100px] rounded-md text-center">Sell</div>
           <div className="text-gray-900 h-[40px] bg-gray-300 p-2 w-[100px] rounded-md text-center">Buy</div>
           <div className="text-gray-900 h-[40px] bg-gray-300 p-2 w-[100px] rounded-md text-center">Send</div>

      </div>
      </div>

      <Footer />
    </>
  );
};

export default DashboardPage;
