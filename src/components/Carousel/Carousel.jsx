import React, { useState } from 'react';
import { motion } from 'motion/react';

function Carousel() {


    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselItems = [
    {
      content: (
        <div className="bg-white h-full w-full flex flex-col items-center justify-center text-black px-20 gap-10">
          <h1 className='text-4xl font-semibold'>What Our Customers Say</h1>
          <p className='font-medium'>WYLD Leadership is a fantastic opportunity to take a step back from daily challenges and spend some time getting to know yourself better. It provides you with information and tools</p>
          <h3 className='text-blue-600 text-xl font-semibold'>-Robert Gold, Lawyer</h3>
        </div>
      ),
    },
    {
      content: (
        <div className="bg-white h-full w-full flex flex-col items-center justify-center text-black px-20 gap-10">
          <h1 className='text-4xl font-semibold'>What Our Customers Say</h1>
          <p className='font-medium'>WYLD Leadership is a fantastic opportunity to take a step back from daily challenges and spend some time getting to know yourself better. It provides you with information and tools</p>
          <h3 className='text-blue-600 text-xl font-semibold'>-Bessie Cooper, Bonobos Employee</h3>
        </div>
      ),
    },
    {
      content: (
        <div className="bg-white h-full w-full flex flex-col items-center justify-center text-black px-20 gap-10">
          <h1 className='text-4xl font-semibold'>What Our Customers Say</h1>
          <p className='font-medium'>WYLD Leadership is a fantastic opportunity to take a step back from daily challenges and spend some time getting to know yourself better. It provides you with information and tools</p>
          <h3 className='text-blue-600 text-xl font-semibold'>-Lilia Swong, Web designer</h3>
        </div>
      ),
    },
  ];


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  

  return (
    <>
       <motion.div 
       initial={{ y: 60, opacity: 0 }} // Initial scale (original size)
            whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: true }}
       className="relative w-full max-w-4xl mx-auto">
        <img src="/icon5_files/645253163b3fe4bfee2fe6c9_White Buttom Background 1.webp" alt=""/>
        
        <div className="relative h-64 overflow-hidden">
            {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            {item.content}
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-gray-800 p-2 rounded-full shadow-md transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-gray-800 p-2 rounded-full shadow-md transition-all duration-300"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

       <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
    </>
  );
}

export default Carousel;
