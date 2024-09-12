'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';

const MerchandisePage: React.FC = () => {
  return (
    <div  className="select-none">
        <Navbar />
    
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-800 text-white pt-32">
        
     
      <motion.h1
        className="text-6xl font-extrabold text-center pt-16 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Darpan Official Merchandise
      </motion.h1>

      <div className="flex flex-col lg:flex-row h-[80vh]">
        
        <div className="flex-1 relative group">
          <div className="absolute inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#FF4081' }}
              whileTap={{ scale: 0.95 }}
              className="text-white bg-pink-500 py-3 px-8 rounded-full text-lg font-semibold shadow-lg"
            >
              Buy Now
            </motion.button>
          </div>
          <video
            src="/merch/hoodie.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          ></video>
        </div>

       
        <div className="hidden lg:block w-[2px] bg-gradient-to-b from-white to-transparent"></div>

       
        <div className="flex-1 relative group">
          <div className="absolute inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#FF4081' }}
              whileTap={{ scale: 0.95 }}
              className="text-white bg-pink-500 py-3 px-8 rounded-full text-lg font-semibold shadow-lg"
            >
              Buy Now
            </motion.button>
          </div>
          <video
            src="/merch/tshirt.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          ></video>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MerchandisePage;
