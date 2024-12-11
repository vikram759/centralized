import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import "./resources/about.css"

const AboutPage: React.FC = () => {
  return (
    <>
    
    <Navbar/>
   
    <div className="service p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">About Decentralized Cryptocurrencies</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Are Decentralized Cryptocurrencies?</h2>
        <p className="text-lg leading-7">
          Decentralized cryptocurrencies are digital currencies that operate without central
          authorities, using blockchain technology to securely record transactions. This
          peer-to-peer system eliminates intermediaries, enabling users to transfer value
          directly, with transactions verified by a global network of participants.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How Decentralized Cryptocurrencies Work</h2>
        <ol className="list-decimal ml-6 space-y-2 text-lg leading-7">
          <li>
            <strong>Creation of Units:</strong> New cryptocurrency units are generated
            through mining or staking, rewarding participants for verifying transactions.
          </li>
          <li>
            <strong>Transactions:</strong> Users sign and broadcast transactions, which are
            verified by nodes and added to the blockchain.
          </li>
          <li>
            <strong>Smart Contracts:</strong> Platforms like Ethereum enable self-executing
            contracts, automatically enforcing agreements without intermediaries.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Advantages</h2>
        <ul className="list-disc ml-6 space-y-2 text-lg leading-7">
          <li><strong>Security:</strong> Decentralization makes the system more resilient to fraud and attacks.</li>
          <li><strong>Transparency:</strong> Blockchain records all transactions, making them publicly verifiable.</li>
          <li><strong>Control:</strong> Users retain full control over their funds, with no need for banks or intermediaries.</li>
          <li><strong>Censorship Resistance:</strong> Transactions are harder to block, especially in restrictive regions.</li>
          <li><strong>Global Accessibility:</strong> Anyone with internet access can participate in decentralized cryptocurrencies.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
        <p className="text-lg leading-7">
          <strong>Regulation:</strong> Cryptocurrencies face regulatory hurdles as governments
          seek to balance innovation with concerns over illicit use.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">P2P Decentralized Transactions</h2>
        <ol className="list-decimal ml-6 space-y-2 text-lg leading-7">
          <li><strong>Initiation:</strong> A sender specifies the recipient, amount, and any metadata.</li>
          <li><strong>Digital Signature:</strong> The transaction is signed with the sender's private key.</li>
          <li><strong>Broadcast:</strong> The signed transaction is sent to the network for validation.</li>
          <li><strong>Validation:</strong> Nodes verify the sender’s balance and signature.</li>
          <li><strong>Consensus:</strong> Transactions are added to the blockchain via Proof of Work or Proof of Stake.</li>
          <li><strong>Confirmation:</strong> The recipient’s wallet is updated after network confirmation.</li>
        </ol>
      </section>

      <p className="text-lg leading-7">
        Decentralized cryptocurrencies offer secure, transparent, and autonomous financial
        transactions, empowering users with greater control and accessibility.
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default AboutPage;

