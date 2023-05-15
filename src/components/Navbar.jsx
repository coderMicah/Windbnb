"use client"

import Image from "next/image";
import SearchModal from "./SearchModal";
import { useState } from "react";

function Navbar(props) {
  const [showModal,setShowModal] = useState(false)
  return (
    <nav className="flex flex-col sm:flex-row justify-between md:items-center mt-6 sm:mt-12">
      <Image className="mb-4 flex-start" src="/logo.svg" alt="windbnb logo" height={20} width={120} />
      <div className="w-full sm:w-max">
        <form className="flex bg-slate-50 rounded-2xl" onClick={() => setShowModal(true)}>
          <input className="w-[40%] sm:w-max text-md p-2 border-x rounded-l-2xl border-r-gray-300 focus:outline-none" type="text" placeholder="Helsinki,Finland" />
          <input className="w-[40%] sm:w-max text-md p-2 border-r border-r-gray-300 focus:outline-none" type="text" placeholder="Add Guests" />
          <button className="w-[20%] sm:w-max p-4" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </form>
      </div>
      {showModal && <SearchModal/>}
    </nav>
  );
}

export default Navbar;
