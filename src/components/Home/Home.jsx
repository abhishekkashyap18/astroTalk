import React, { useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import { motion, useAnimation } from "motion/react";

function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.9, ease: "easeInOut", once: true },
    });

    controls.start({
      // scale: [1, 1.2 , 1],
      y: [0, -20, 0],
      transition: {
        duration: 7,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls]);

  return (
    <>
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }} // Initial scale (original size)
        whileInView={{ scale: 1, opacity: 1 }} // Scale up to 2x when in view
        transition={{ duration: 0.9, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex-grow bg-cover bg-center flex flex-col items-center justify-center h-[90vh] w-full relative"
        style={{
          backgroundImage: "url('/mainImg.webp')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-start">
          <div className="text-center p-8 max-w-2xl sm:ml-32">
            <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4">
              Personal Horoscope & Astro Counseling
            </h1>
            <p className="sm:text-xl text-base text-gray-200 mb-8">
              When you have knowledge of what lies ahead, you’ll have absolute
              clarity of the moves you’ll need to make to maximize your 2023.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full sm:text-2xl text-base font-semibold transition duration-300">
              Start Your Journey
            </button>
          </div>
        </div>

        <img
          src="/icon5_files/645253163b3fe4bfee2fe6c9_White Buttom Background 1.webp"
          alt=""
          className="absolute bottom-0 w-full"
        />
      </motion.div>

      <div className="w-full h-full flex justify-center items-center py-20 sm:py-40 gap-7 sm:gap-10 flex-col-reverse sm:flex-row pl-4 sm:pl-0">
        <div>
          <ul className="flex sm:flex-row flex-col justify-center items-center  gap-4 sm:gap-10 mb-4 sm:mb-10">
            <motion.li
              initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
              whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              className=" border-2 border-gray-400 rounded-md w-[80vw] sm:w-80 flex flex-col justify-between items-center text-center py-9 px-2"
            >
              <img src="/icon1.webp" alt="" />
              <motion.h1
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="sm:text-2xl text-lg font-semibold py-4"
              >
                Astro Reading
              </motion.h1>
              <motion.p
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="w-80 text-base text-gray-600"
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority
              </motion.p>
            </motion.li>
            <motion.li
              initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
              whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              className=" border-2 border-gray-400 rounded-md w-[80vw] sm:w-80 flex flex-col justify-between items-center text-center py-9 px-2"
            >
              <img src="/icon2.webp" alt="" />
              <motion.h1
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="sm:text-2xl text-lg font-semibold py-4"
              >
                Compatibility
              </motion.h1>
              <motion.p
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="w-80 text-base text-gray-600"
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority
              </motion.p>
            </motion.li>
          </ul>
          <ul className="flex sm:flex-row flex-col sm:gap-10 gap-4">
            <motion.li
              initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
              whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="border-2 border-gray-400 rounded-md w-[80vw] sm:w-80 flex flex-col justify-between items-center text-center py-9 px-2"
            >
              <img src="/icon3.webp" alt="" />
              <motion.h1
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="sm:text-2xl text-lg font-semibold py-4"
              >
                Horoscope
              </motion.h1>
              <motion.p
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority
              </motion.p>
            </motion.li>
            <motion.li
              initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
              whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="border-2 border-gray-400 rounded-md w-[80vw] sm:w-80 flex flex-col justify-between items-center text-center py-9 px-2"
            >
              <img src="/icon4.webp" alt="" />
              <motion.h1
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="sm:text-2xl text-lg font-semibold py-4"
              >
                Personal gems
              </motion.h1>
              <motion.p
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="w-80 text-base text-gray-600"
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority
              </motion.p>
            </motion.li>
          </ul>
        </div>
        <motion.div
          initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
          whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="sm:h-[86vh] h-full w-full sm:w-auto"
        >
          <img src="/portrait.jpg" alt="" className="sm:h-full sm:w-auto ml-10 sm:ml-0 w-[80vw] h-72" />
        </motion.div>
      </div>

      <div className="bg-[#2433b3] relative flex sm:flex-row flex-col gap-20 items-center p-40">
        <img
          src="/icon5_files/6452528de6ab51422179aa81_White Top Background 1.webp"
          alt=""
          className="absolute top-0 left-0 sm:-top-2"
        />
        <motion.div
          initial={{ scale: 2, opacity: 0 }}
          animate={controls}
          className="w-full"
        >
          <img src="/astroHand.webp" alt="" className="w-full h-96" />
        </motion.div>
        <motion.div
          initial={{ y: 70, opacity: 0 }} // Initial scale (original size)
          whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center  gap-10 text-white"
        >
          <h1 className="sm:text-6xl text-2xl font-bold text-white">
            Get a Glimpse into Your Future with Our Accurate Astrology
            Predictions
          </h1>
          <p className="sm:text-lg text-base font-normal sm:font-semibold">
            Ruled by Mercury, there are a little commons between Gemini and
            Cancer. It’s all about being heard and read. There, the similarities
            end, however. The body, mind and spirit can’t be separated and it’s
            physical being which dictates spiritual contentment.
          </p>
          <p className="sm:text-lg text-base font-normal sm:font-semibold">
            Individuals can gain a deeper understanding of themselves and the
            world around them, and use this knowledge to navigate their lives
            with greater purpose and meaning.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full sm:text-2xl text-base font-semibold transition duration-300 w-44 sm:w-52">
            get started
          </button>
        </motion.div>
      </div>

      <div className="relative w-full p-36">
        <img
          src="/icon5_files/645253163b3fe4bfee2fe6c9_White Buttom Background 1.webp"
          alt=""
          className="absolute -top-2 left-0 sm:-top-4 w-full"
        />

        <div className="flex flex-col justify-center items-center gap-10">
          <motion.h1
            initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
            whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="sm:text-4xl text-2xl font-semibold"
          >
            Online Shop
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
            whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="sm:text-xl text-base font-medium sm:font-semibold text-center sm:px-64"
          >
            Wide range of Healing Crystals and Gemstones. For those interested
            in browsing what Crystals we currently have for sale, we have
            provided a preview below
          </motion.p>
          <motion.ul
            initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
            whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex sm:flex-row flex-col justify-center items-center gap-4"
          >
            <li className="flex flex-col items-center border-2 border-gray-400 py-5 px-2 overflow-hidden">
              <motion.img src="/gem1.jpg" alt="" 
              whileHover={{scale:1.1}}
              transition={{duration:1, ease: "easeInOut", repeatType:"reverse"}}
              className="h-44" />
              <motion.h1
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-2xl font-semibold"
              >
                Natural Mineral
              </motion.h1>
              <motion.p
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-base py-3 w-72 text-center"
              >
                Apophyllites magnify and focus energy through.
              </motion.p>
              <motion.h1
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-3xl text-orange-500"
              >
                $ 30.50 USD
              </motion.h1>
              <motion.button
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="bg-blue-800 text-white p-3 mt-3 rounded-full px-5"
              >
                Add to card
              </motion.button>
            </li>
            <li className="flex flex-col items-center border-2 border-gray-400 py-5 px-2 overflow-hidden">
              <motion.img src="/gem2.jpg" alt="" 
              whileHover={{scale:1.1}}
              transition={{duration:1, ease: "easeInOut", repeatType:"reverse"}}
              className="h-44" />
              <motion.h1
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-2xl font-semibold"
              >
                Natural Mineral
              </motion.h1>
              <motion.p
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-base py-3 w-72 text-center"
              >
                Apophyllites magnify and focus energy through.
              </motion.p>
              <motion.h1
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-3xl text-orange-500"
              >
                $ 30.50 USD
              </motion.h1>
              <motion.button
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="bg-blue-800 text-white p-3 mt-3 rounded-full px-5"
              >
                Add to card
              </motion.button>
            </li>
            <li className="flex flex-col items-center border-2 border-gray-400 py-5 px-2 overflow-hidden">
              <motion.img src="/gem3.jpg" alt="" 
              whileHover={{scale:1.1}}
              transition={{duration:1, ease: "easeInOut", repeatType:"reverse"}}
              className="h-44" />
              <motion.h1
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-2xl font-semibold"
              >
                Natural Mineral
              </motion.h1>
              <motion.p
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-base py-3 w-72 text-center"
              >
                Apophyllites magnify and focus energy through.
              </motion.p>
              <motion.h1
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-3xl text-orange-500"
              >
                $ 30.50 USD
              </motion.h1>
              <motion.button
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="bg-blue-800 text-white p-3 mt-3 rounded-full px-5"
              >
                Add to card
              </motion.button>
            </li>
            <li className="flex flex-col items-center border-2 border-gray-400 py-5 px-2 overflow-hidden">
              <motion.img src="/gem4.jpg" alt="" 
              whileHover={{scale:1.1}}
              transition={{duration:1, ease: "easeInOut", repeatType:"reverse"}}
              className="h-44" />
              <motion.h1
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-2xl font-semibold"
              >
                Natural Mineral
              </motion.h1>
              <motion.p
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-base py-3 w-72 text-center"
              >
                Apophyllites magnify and focus energy through.
              </motion.p>
              <motion.h1
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-3xl text-orange-500"
              >
                $ 30.50 USD
              </motion.h1>
              <motion.button
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="bg-blue-800 text-white p-3 mt-3 rounded-full px-5"
              >
                Add to card
              </motion.button>
            </li>
          </motion.ul>

          <motion.button
            initial={{ y: 10, opacity: 0 }} // Initial scale (original size)
            whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
            transition={{ duration: 1.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-2xl font-semibold transition duration-300 w-52"
          >
            View More
          </motion.button>
        </div>
      </div>

      <div className="bg-[#2433b3]">
        <img
          src="/icon5_files/6452528de6ab51422179aa81_White Top Background 1.webp"
          alt=""
        />

        <div className="flex justify-center py-20 gap-4 sm:gap-20 ml-28 sm:ml-0">
          <motion.div 
            initial={{ y: 60, opacity: 0 }} // Initial scale (original size)
            whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-white sm:text-5xl text-lg font-medium sm:font-semibold">
              Get Your Gift Offer
            </h1>
            <h3 className="text-white sm:text-lg text-base font-normal sm:font-semibold pb-14 pt-6 w-72">
              Discover Your Destiny: Get Your Free Astrological Reading Now
            </h3>
            <div className="flex gap-10 mb-6">
              <input
                type="text"
                placeholder="FirstName*"
                className="bg-[#2433b3] text-white placeholder:text-white border-b-2 border-b-white py-3 w-[50%]"
              />
              <input
                type="text"
                placeholder="LastName*"
                className="bg-[#2433b3] text-white placeholder:text-white border-b-2 border-b-white w-[50%]"
              />
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <input
                type="text"
                placeholder="Email*"
                className="bg-[#2433b3] text-white placeholder:text-white border-b-2 border-b-white pb-3 mb-6 mt-6"
              />
              <input
                type="text"
                placeholder="Birth Data"
                className="bg-[#2433b3] text-white placeholder:text-white border-b-2 border-b-white pb-3"
              />
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full sm:text-2xl text-base font-semibold transition duration-300 w-44 sm:w-52 my-10">
                get started
              </button>
            </div>
          </motion.div>
          <div
            className="
             relative h-[70%]"
          >
            <motion.img
              src="/rotatingObject.webp"
              alt=""
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 40,
                ease: "linear",
              }}
              className="h-[80vh]"
            />
            <motion.img
              src="/portrait.jpg"
              alt=""
              initial={{ x: -200, scale: 3, opacity: 0 }} // Initial scale (original size)
              whileInView={{ x: 0, scale: 1, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute top-16 right-0 h-[88%] invisible sm:visible"
            />
          </div>
        </div>

        <Carousel />
        <motion.div
          initial={{ y: 60, opacity: 0 }} // Initial scale (original size)
          whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="py-20 px-28 text-white "
        >
          <h1 className="sm:text-5xl text-2xl font-bold my-8 py-10">
            Last Materials In Blog
          </h1>
          <ul className="flex sm:flex-row flex-col gap-10">
            <li className="border-2 border-gray-500 rounded-lg overflow-hidden w-[65vw] sm:w-[40%] flex flex-col gap-4 justify-center">
              <div className="overflow-hidden">
              <motion.img src="/blog1.jpg" alt="" 
              whileHover={{scale:1.2}}
              transition={{duration:1, ease: "easeInOut", repeatType:"reverse"}}
              className="w-full h-full"/>
              </div>
              <motion.div
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="flex justify-between px-3 "
              >
                <p className="text-orange-600 font-semibold">MAY 8, 2023</p>
                <p className="font-bold">Astro</p>
              </motion.div>
              <motion.h2
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-xl font-medium px-3"
              >
                Understanding The Basics Of Your Sun And Moon
              </motion.h2>
              <motion.p
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-base font-medium px-3 text-gray-300"
              >
                Ruled by Mercury, there are a little commons between Gemini and
                Cancer. It’s all about being heard and read.
              </motion.p>
              <motion.p
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-lg font-bold px-3 py-4 border-t-2 border-gray-500"
              >
                Read More
              </motion.p>
            </li>
            <li className="border-2 border-gray-500 rounded-lg overflow-hidden w-[65vw] sm:w-[40%] flex flex-col gap-4 justify-center">
              <div className="overflow-hidden">
              <motion.img src="/blog2.png" alt="" 
              whileHover={{scale:1.2}}
              transition={{duration:1, ease: "easeInOut", repeatType:"reverse"}}
              className="w-full h-full"/>
              </div>
              <motion.div
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="flex justify-between px-3 "
              >
                <p className="text-orange-600 font-semibold">MAY 8, 2023</p>
                <p className="font-bold">Astro</p>
              </motion.div>
              <motion.h2
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-xl font-medium px-3"
              >
                How Astrology Can Help Navigate Life's Challenges
              </motion.h2>
              <motion.p
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-base font-medium px-3 text-gray-300"
              >
                Ruled by Mercury, there are a little commons between Gemini and
                Cancer. It’s all about being heard and read.
              </motion.p>
              <motion.p
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-lg font-bold px-3 py-4 border-t-2 border-gray-500"
              >
                Read More
              </motion.p>
            </li>
            <li className="border-2 border-gray-500 rounded-lg overflow-hidden w-[65vw] sm:w-[40%] flex flex-col gap-4 justify-center">
              <div className="overflow-hidden">
              <motion.img src="/blog3.jpg" alt="" 
              whileHover={{scale:1.2}}
              transition={{duration:1, ease: "easeInOut", repeatType:"reverse"}}
              className="w-full h-full"/>
              </div>
              <motion.div
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="flex justify-between px-3 "
              >
                <p className="text-orange-600 font-semibold">MAY 8, 2023</p>
                <p className="font-bold">Astro</p>
              </motion.div>
              <motion.h2
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-xl font-medium px-3"
              >
                The Secret Revealed - Why Millennials Love Astrology
              </motion.h2>
              <motion.p
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-base font-medium px-3 text-gray-300"
              >
                Ruled by Mercury, there are a little commons between Gemini and
                Cancer. It’s all about being heard and read.
              </motion.p>
              <motion.p
                initial={{ y: 40, opacity: 0 }} // Initial scale (original size)
                whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-lg font-bold px-3 py-4 border-t-2 border-gray-500"
              >
                Read More
              </motion.p>
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
