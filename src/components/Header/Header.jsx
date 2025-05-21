import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    {
      name: "Demos",
    },
    {
      name: "About Us",
      submenu: [
        "About Us",
        "Our Services",
        "Our Team",
        "Pricing",
        "FAQ",
        "Testimonials",
        "Appointments",
      ],
    },
    {
      name: "Forecast",
    },
  ];

  const menuItems2 = [
    {
      name: "Case Studies",
      submenu: ["case studies", "case details"],
    },

    {
      name: "Contact",
    },
    {
      name: "All Pages",
      submenu: [
        "case studies",
        "Our Services",
        "Our Team",
        "Pricing",
        "FAQ",
        "Testimonials",
        "Appointments",
        "case studies",
        "case details",
      ],
    },
  ];

  return (
    <nav className="bg-white shadow-md bg-gradient-to-r from-black to-blue-950 ">
      <div className=" flex max-w-7xl mx-auto px-6 py-4 relative justify-between">
        <motion.img
          src="/public/logobg.webp"
          alt=""
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        />
        <img src="/public/logo.webp" alt="" className="absolute left-9 top-8" />
        <div className="flex justify-between items-center text-white gap-20">
          <Link
            to="/"
            className="text-lg font-medium hover:text-orange-600 active:text-orange-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium hover:text-orange-600 active:text-orange-500"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-lg font-medium hover:text-orange-600 active:text-orange-500"
          >
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
