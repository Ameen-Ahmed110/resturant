import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#13131A] h-[280px] gap-7 flex flex-col items-center justify-center">
      <div className="flex gap-2 text-[22px] ">
        <div className="cursor-pointer border-2 border-[#FFC107] h-12 w-12 rounded-full flex items-center justify-center">
          <FaFacebookF />
        </div>
        <div className="cursor-pointer border-2 border-[#FFC107] h-12 w-12 rounded-full flex items-center justify-center">
          <FaTwitter />
        </div>
        <div className="cursor-pointer border-2 border-[#FFC107] h-12 w-12 rounded-full flex items-center justify-center">
          <FaInstagram />
        </div>
        <div className="cursor-pointer border-2 border-[#FFC107] h-12 w-12 rounded-full flex items-center justify-center">
          <FaLinkedin />
        </div>
        <div className="cursor-pointer border-2 border-[#FFC107] h-12 w-12 rounded-full flex items-center justify-center">
          <FaPinterest />
        </div>
      </div>
      <div className="flex items-center gap-4 text-xl">
        <div className="border-2 border-[#FFC107] w-[110px] h-10 flex items-center justify-center ">
          <a href="#About">Home</a>
        </div>
        <div  className="border-2 border-[#FFC107] w-[110px] h-10 flex items-center justify-center ">
          <a href="#About">About</a>
        </div>
        <div  className="border-2 border-[#FFC107] w-[110px] h-10 flex items-center justify-center ">
          <a href="#About">Menu</a>
        </div>
        <div  className="border-2 border-[#FFC107] w-[110px] h-10 flex items-center justify-center ">
          <a href="#About">Contact</a>
        </div>
        <div  className="border-2 border-[#FFC107] w-[110px] h-10 flex items-center justify-center ">
          <a href="#About">Blogs</a>
        </div>
        <div  className="border-2 border-[#FFC107] w-[110px] h-10 flex items-center justify-center ">
          <a href="#About">Product</a>
        </div>
        <div  className="border-2 border-[#FFC107] w-[110px] h-10 flex items-center justify-center ">
          <a href="#About">Review</a>
        </div>
      </div>
     
        <p className="text-[18px] tracking-wide	">
          Created By <span className="text-[#FFC107]">Coding Circulate</span> |
          All Rights Reserved
        </p>
      
    </div>
  );
};

export default Footer;
