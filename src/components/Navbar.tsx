"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Discoverpage from "@/components/Discoverpage"

import RegisterForm from "@/components/RegisterForm";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Perform your search logic here
      // For example, you can redirect to a search page with the search term
      window.location.href = `/search?query=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <div className="container pt-6 p-5 shadow-sm">
      <div className="flex justify-between items-center p-2 rounded-2xl  bg-[#ffffff98]">
        <div className="flex items-center space-y-0 space-x-10 ">

          <Link href={"/"} className=" text-indigo-600 text-3xl font-bold ">
            HorizonAid
          </Link>

          <Link
            href={"/discover"}
            className="text-black hover:text-indigo-500 font-bold"
          >
            Discover
          </Link>
          
          <Link
            href={"/projects"}
            className="text-black hover:text-indigo-500 font-bold"
          >
            Start a project
          </Link>
          <Link
            href={"/about"}
            className="text-black hover:text-indigo-500 font-bold"
          >
            What we do
          </Link>
        </div>
        <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded-2xl pl-2 py-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-4.351-4.35"
        />
        <circle cx="10.5" cy="10.5" r="7.5" />
      </svg>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyUp={handleSearch}
        className="w-full border-none outline-none text-gray-800"
        placeholder="Search"
      />
    </div>
          <Link href={"/login"} className="text-black hover:text-gray-300">
            <button className="bg-transparent text-black px-4 py-2 rounded-md ring-offset-1 hover:bg-black hover:text-white focus:ring-1 focus:ring-black font-bold">
              Login
            </button>
          </Link>
          <Link href={"/register"}>
            <button className=" cursor-pointer shadow-lg bg-indigo-600 opacity-100 text-white px-4 py-2 rounded-md hover:bg-indigo-600">
              Register
            </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
