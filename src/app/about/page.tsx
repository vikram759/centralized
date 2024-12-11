import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const About: React.FC = () => {
  return (
    <>
    <Navbar/>

   
    <div className="p-8  text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Centralized Crypto Overview</h1>
        <p className="mb-4">
          Centralized crypto refers to cryptocurrency systems managed by a single authority or organization. Unlike decentralized cryptocurrencies (e.g., Bitcoin, Ethereum), centralized systems rely on a central entity for operations and oversight, sacrificing decentralization for convenience and control.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Examples of Centralized Crypto Systems</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Centralized Exchanges (CEXs):</strong> Platforms like Binance, Coinbase, and Kraken that facilitate trading and custody.</li>
          <li><strong>Stablecoins:</strong> Cryptos like USDT and USDC, managed by companies.</li>
          <li><strong>CBDCs:</strong> Central bank digital currencies, such as China’s Digital Yuan.</li>
        </ul>

        <p className="mt-4">
          Centralized crypto bridges traditional finance and blockchain technology but trades off decentralization for user-friendliness and regulation compliance.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Centralized P2P Transactions</h2>
        <p className="mb-4">
          P2P transactions on centralized platforms combine user-to-user exchanges with the security of central oversight. Platforms facilitate trade matching, use escrow services to secure funds, and mediate disputes.
        </p>

        <p>
          This hybrid approach ensures both autonomy in trading and the convenience of centralized support.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};
 
export default About;