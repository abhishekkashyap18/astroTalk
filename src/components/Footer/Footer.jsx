import React from "react";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialSkype } from "react-icons/ti";
import { motion } from "motion/react";

function Footer() {
  return (
    <div className="bg-black text-white relative ">
      <img
        src="/icon5_files/645253163b3fe4bfee2fe6c9_White Buttom Background 1.webp"
        alt=""
        className="w-full absolute -top-1 sm:-top-5 brightness-0"
      />
      <ul className="flex justify-evenly items-center py-10 pb-20 text-lg font-semibold border-b-2 border-gray-500">
        <li className="sm:visible invisible">Home</li>
        <li className="sm:visible invisible">About</li>
        <li className="sm:visible invisible">Forecast</li>
        <li>
          <motion.img
            src="/logobg.webp"
            alt=""
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="relative size-24 mr-2"
          />
          <img
            src="/logo.webp"
            alt=""
            className="absolute top-16 left-[47%]  sm:left-[49%] size-12"
          />
        </li>
        <li className="sm:visible invisible">Blog</li>
        <li className="sm:visible invisible">Shop</li>
        <li className="sm:visible invisible">Contact</li>
      </ul>

      <ul className="flex justify-center items-center gap-16 py-8"
      >
        <li>
          <TiSocialTwitter className="size-8 hover:text-blue-500" />
        </li>
        <li>
          <TiSocialYoutube className="size-8 hover:text-blue-500" />
        </li>
        <li>
          <TiSocialFacebook className="size-8 hover:text-blue-500" />
        </li>
        <li>
          <TiSocialSkype className="size-8 hover:text-blue-500" />
        </li>
      </ul>
      <p className="text-center text-xs sm:text-base w-[90vw] ml-10 sm:w-auto sm:ml-0 text-gray-500 pb-20">
        © Horoscope & Astrology 128. All Rights Reserved. Licensing Webflow
        Templatesby 128.digital. Powered by Webflow
      </p>
    </div>
  );
}

export default Footer;
