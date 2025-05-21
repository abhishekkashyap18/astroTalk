import Carousel from "../Carousel/Carousel";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "motion/react";

function Contact() {
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
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ y: 60, opacity: 0 }} // Initial scale (original size)
          whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="sm:text-xl text-base font-medium sm:font-semibold"
        >
          Get Personalized Astrological Advice
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

      <div className="flex sm:flex-row flex-col gap-20 pl-32 py-32">
        <motion.div
          initial={{ y: 60, opacity: 0 }} // Initial scale (original size)
          whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-[35%]"
        >
          <h1 className="sm:text-5xl text-2xl font-bold pb-16 w-[50vw] sm:w-auto">
            Connect with our Astrology Experts
          </h1>
          <div className="border-2 border-gray-500 mb-10 w-[70vw] sm:w-auto -ml-14 sm:-ml-0">
            <ul className="flex flex-col gap-2 font-extrabold p-4">
              <li>Office Location:</li>
              <li className="flex gap-2 items-center">
                <FaLocationDot />
                <p>5 Washington Square, New York, USA</p>
              </li>
              <li className="flex gap-2 items-center">
                <FaPhoneAlt />
                <p>+1 212 425 8617</p>
              </li>
              <li className="flex gap-2 items-center">
                <MdEmail />
                <p>information@office.com</p>
              </li>
            </ul>
          </div>

          <div className="border-2 border-gray-500 w-[70vw] sm:w-auto -ml-14 sm:-ml-0">
            <ul className="flex flex-col gap-2 font-extrabold p-4">
              <li>Opening Hours:</li>
              <li>
                <span>Mon-Fri:</span> 8:00 – 17:00
              </li>
              <li>
                <span>Saturday:</span> 12:00 - 19:00
              </li>
              <li>
                <span>Sunday:</span> Closed
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 60, opacity: 0 }} // Initial scale (original size)
          whileInView={{ y: 0, opacity: 1 }} // Scale up to 2x when in view
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="bg-[#2433b3] sm:w-[45%] w-[70vw] -ml-14 sm:-ml-0"
        >
          <h1 className="text-3xl font-bold text-white px-5 py-5">
            Send Us A Message
          </h1>
          <ul className="p-6">
            <li className="flex flex-col gap-8">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#2433b3] text-white placeholder:text-white border-b-2 border-white"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="bg-[#2433b3] text-white placeholder:text-white border-b-2 border-white"
              />
              <input
                type="text"
                placeholder="Your Text"
                className="bg-[#2433b3] text-white placeholder:text-white border-b-2 border-white pb-24"
              />
            </li>
          </ul>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full text-xl font-semibold transition duration-300 w-auto my-10 ml-5">
            Submit
          </button>
        </motion.div>
      </div>

      <div className="bg-[#2433b3]">
        <img
          src="/icon5_files/6452528de6ab51422179aa81_White Top Background 1.webp"
          alt=""
          className="w-full"
        />

        <div className="py-32">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Contact;
