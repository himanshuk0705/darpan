'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { generatePhotos } from '@/lib/photoUtil';
import Navbar from '@/components/navbar'; 

const GalleryPage: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const photos = generatePhotos(8);

  const openPhoto = (index: number) => setSelectedPhotoIndex(index);
  const closePhoto = () => setSelectedPhotoIndex(null);

  const previousPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null));
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % photos.length : null));
  };

  return (
    <div className="select-none">
      <Navbar />
    
      <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen text-white p-8 pt-32"> 
        <h1 className="text-4xl font-bold mb-12 text-center">Darpan Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openPhoto(index)}
              className="cursor-pointer overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={300}
                className="object-cover w-full h-64 hover:brightness-75 transition-all"
              />
            </motion.div>
          ))}
        </div>

        
        <AnimatePresence>
          {selectedPhotoIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePhoto}
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative w-full max-w-[90vw] max-h-[90vh] flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={photos[selectedPhotoIndex].src}
                  alt={photos[selectedPhotoIndex].alt}
                  width={photos[selectedPhotoIndex].width}
                  height={photos[selectedPhotoIndex].height}
                  className="object-contain w-auto h-auto max-w-[90%] max-h-[85vh]"
                />

               
                <button
                  onClick={closePhoto}
                  className="absolute top-4 right-4 bg-opacity-70 text-white bg-black rounded-full p-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

               
                <button
                  onClick={previousPhoto}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

               
                <button
                  onClick={nextPhoto}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GalleryPage;
