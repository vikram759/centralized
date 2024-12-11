// pages/index.tsx
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className='h-[80vh] flex flex-col justify-center items-center'>
      <div className='font-bold text-center text-[80px]  p-2 m-4'>

      PECEX

      </div>

      <div className='text-3xl'>
      Pecex: Your Central Hub for Secure and Seamless Crypto Trading.
      </div>

      </div>
      
      <Footer />
    </>
  );
};

export default Home;
