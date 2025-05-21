import React from "react";
import Carousel from "../Carousel/Carousel";
import { GiCardRandom } from "react-icons/gi";
import { motion } from "motion/react";

function AboutUs() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-[#2433b3] text-white w-full h-[75vh] relative">
        <motion.h1
          initial={{ y: 60, opacity: 0 }} // Initial scale (original size)
          whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="sm:text-7xl text-2xl font-bold pb-4"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ y: 60, opacity: 0 }} // Initial scale (original size)
          whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="sm:text-xl text-base font-normal sm:font-semibold ml-9 text-center sm:ml-0"
        >
          Bringing Clarity and Insight to Your Life's Journey Through the Power
          of Astrology
        </motion.p>
        <img
          src="/icon5_files/645253163b3fe4bfee2fe6c9_White Buttom Background 1.webp"
          alt=""
          className="w-full absolute bottom-0"
        />
        <motion.img
          src="/public/Facebook.webp"
          alt=""
          animate={{ scale: 1.1 }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          className="absolute -left-1/2 -bottom-12"
        />
        <motion.img
          src="/public/Facebook.webp"
          alt=""
          animate={{ scale: 0.9 }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          className="absolute left-1/2 -bottom-28"
        />
      </div>

      <div className="w-full flex justify-evenly py-32 px-32">
        <ul className="flex sm:flex-row flex-col gap-20">
          <li className="flex gap-8 w-[60vw] sm:w-auto">
            <motion.img
              src="/icon1.webp"
              alt=""
              initial={{ scale: 1.2, opacity: 0 }} // Initial scale (original size)
              whileInView={{ scale: 1, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="rounded-full"
            />
            <motion.div
              initial={{ y: 80, opacity: 0 }} // Initial scale (original size)
              whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <h1 className="text-3xl font-bold">Privacy</h1>
              <p className="font-semibold">
                Information obtained during the consultaion is private
              </p>
            </motion.div>
          </li>
          <li className="flex gap-8">
            <motion.img
              src="/icon2.webp"
              alt=""
              initial={{ scale: 1.2, opacity: 0 }} // Initial scale (original size)
              whileInView={{ scale: 1, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="rounded-full"
            />
            <motion.div
              initial={{ y: 80, opacity: 0 }} // Initial scale (original size)
              whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <h1 className="text-3xl font-bold">Result Guarantee</h1>
              <p className="font-semibold">
                We provided a guaranteed 100% result
              </p>
            </motion.div>
          </li>
          <li className="flex gap-8">
            <motion.img
              src="/icon3.webp"
              alt=""
              initial={{ scale: 1.2, opacity: 0 }} // Initial scale (original size)
              whileInView={{ scale: 1, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="rounded-full"
            />
            <motion.div
              initial={{ y: 80, opacity: 0 }} // Initial scale (original size)
              whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <h1 className="text-3xl font-bold">Competence</h1>
              <p className="font-semibold">
                We only take on issues that we can solve
              </p>
            </motion.div>
          </li>
        </ul>
      </div>

      <div className="flex sm:flex-row flex-col justify-center pl-40 pb-20 gap-32">
        <motion.div
          initial={{ y: 50, opacity: 0 }} // Initial scale (original size)
          whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-10 w-[60vw] sm:w-[40%] -ml-16 sm:-ml-0"
        >
          <h1 className="sm:text-4xl text-xl font-bold">
            We know everything about astrology
          </h1>
          <p className="sm:text-lg text-base font-normal">
            Astrology is one of the earliest attempts made by man to find the
            order hidden behind or within the confusing and apparent chaos that
            exists in the world.
          </p>
          <p className="sm:text-lg text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mi
            tellus, pulvinar vel tempus eget, finibus vitae ante. Fusce sit amet
            velit eleifend, iaculis velit quis, malesuada lacus. Vestibulum
            sodales magna a volutpat tempus. Mauris vestibulum id urna viverra
            ultrices. Nullam rhoncus elit eget libero varius dapibus.
          </p>
        </motion.div>
        <div className="sm:w-[40%] w-[90vw] -ml-16 sm:-ml:0">
          <motion.div
            initial={{ y: 50, opacity: 0 }} // Initial scale (original size)
            whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="bg-[#2433b3] text-white flex flex-col gap-8 justify-center items-center h-full py-5 sm:py-0 w-[70vw] sm:w-[60%]"
          >
            <span className="flex gap-3">
              <GiCardRandom className="size-12" />
              <h1 className="text-4xl font-semibold">what we do</h1>
            </span>
            <ol className="flex flex-col gap-4 px-8 text-lg font-medium list-disc">
              <li>General consulation</li>
              <li>Personal life advice</li>
              <li>Annual forecast</li>
              <li>Work, career, finance</li>
              <li>Forecast of future events</li>
            </ol>
          </motion.div>
        </div>
      </div>

      <div className="bg-[#2433b3] pb-32">
        <img
          src="/public/icon5_files/6452528de6ab51422179aa81_White Top Background 1.webp"
          alt=""
          className="w-full"
        />
        <motion.h1
          initial={{ y: 70, opacity: 0 }} // Initial scale (original size)
          whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-white sm:text-3xl text-2xl font-bold py-20 px-44"
        >
          Meet Our Leading Astrologers
        </motion.h1>
        <ul className="flex sm:flex-row flex-col justify-center px-44 gap-28">
          <li className="flex flex-col gap-3 border-2 border-gray-600 text-white rounded-lg overflow-hidden w-[50vw] -ml-6 sm:-ml-0 sm:w-auto">
            <div className="overflow-hidden">
            <motion.img
              src="/portrait.jpg"
              alt=""
              initial={{ y: 70, opacity: 0 }} // Initial scale (original size)
              whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              whileHover={{scale:1.1}}
              viewport={{ once: true }}
              className="w-full h-full"
            />
            </div>
            <motion.h1
              initial={{ y: 70, opacity: 0 }} // Initial scale (original size)
              whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="px-3 text-lg font-medium"
            >
              Jenny Wilson
            </motion.h1>
            <motion.p
              initial={{ y: 70, opacity: 0 }} // Initial scale (original size)
              whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="px-3 pb-5"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Exercitation veniam consequat sunt nostrud amet.
            </motion.p>
          </li>
          <li className="flex flex-col gap-3 border-2 border-gray-600 text-white rounded-lg overflow-hidden w-[50vw] -ml-6 sm:-ml-0 sm:w-auto">
            <div className="overflow-hidden">
            <motion.img
              src="/portrait.jpg"
              alt=""
              initial={{ y: 70, opacity: 0 }} // Initial scale (original size)
              whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              whileHover={{scale:1.1}}
              viewport={{ once: true }}
              className="w-full h-full"
            />
            </div>
            <motion.h1
              initial={{ y: 70, opacity: 0 }} // Initial scale (original size)
              whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="px-3 text-lg font-medium"
            >
              Jenny Wilson
            </motion.h1>
            <motion.p
              initial={{ y: 70, opacity: 0 }} // Initial scale (original size)
              whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="px-3 pb-5"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Exercitation veniam consequat sunt nostrud amet.
            </motion.p>
          </li>
          <li className="flex flex-col gap-3 border-2 border-gray-600 text-white rounded-lg overflow-hidden w-[50vw] -ml-6 sm:-ml-0 sm:w-auto">
            <div className="overflow-hidden">
            <motion.img
              src="/portrait.jpg"
              alt=""
              initial={{ y: 70, opacity: 0 }} // Initial scale (original size)
              whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              whileHover={{scale:1.1}}
              viewport={{ once: true }}
              className="w-full h-full"
            />
            </div>
            <motion.h1
              initial={{ y: 70, opacity: 0 }} // Initial scale (original size)
              whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="px-3 text-lg font-medium"
            >
              Jenny Wilson
            </motion.h1>
            <motion.p
              initial={{ y: 70, opacity: 0 }} // Initial scale (original size)
              whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="px-3 pb-5"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Exercitation veniam consequat sunt nostrud amet.
            </motion.p>
          </li>
        </ul>

        <ul className="flex sm:flex-row flex-col justify-center gap-24 sm:gap-72 text-white py-32 sm:py-72">
          <li className="text-center">
            <h1 className="text-4xl font-extrabold">546K</h1>
            <motion.h3
              initial={{ y: 70, opacity: 0 }} // Initial scale (original size)
              whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="text-lg font-normal"
            >
              Happy clients
            </motion.h3>
          </li>
          <li className="text-center">
            <h1 className="text-4xl font-extrabold">83</h1>
            <motion.h3
              initial={{ y: 70, opacity: 0 }} // Initial scale (original size)
              whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="text-lg font-normal"
            >
              Numerologists in our team
            </motion.h3>
          </li>
          <li className="text-center">
            <h1 className="text-4xl font-extrabold">290</h1>
            <motion.h3
              initial={{ y: 70, opacity: 0 }} // Initial scale (original size)
              whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="text-lg font-normal"
            >
              Years of experience
            </motion.h3>
          </li>
        </ul>

        <Carousel />

        <motion.div
          initial={{ y: 70, opacity: 0 }} // Initial scale (original size)
          whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-white pt-60  pl-60 flex flex-col gap-8 -ml-14 sm:-ml-0"
        >
          <h1 className="sm:text-6xl text-2xl font-semibold w-[60%]">
            Get your free daily number every day when you Contact Us!
          </h1>
          <p className="sm:text-lg text-base font-normal sm:font-medium w-[60%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            rem facere recusandae dolorum officiis inventore quaerat eius?
            Porro, harum eveniet.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full sm:text-2xl text-base font-semibold transition duration-300 w-44 sm:w-52">
            get started
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;
