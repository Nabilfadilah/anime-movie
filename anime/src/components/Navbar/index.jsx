import InputSeacrh from "@/elements/input/InputSearch";
import Link from "next/link";
import React from "react";
import UserAction from "./UserAction";
import {BiSolidMoviePlay} from "react-icons/bi";

const Navbar = () => {
  return (
    <header className="bg-orange-950 shadow-2xl">
      <div className="flex md:flex-row flex-col justify-between items-center p-4 gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center font-bold text-white text-2xl hover:opacity-90 transition-opacity gap-2"
        >
          <BiSolidMoviePlay size={28} className="text-yellow-500" />{" "}
          {/* Ikon Movie */}
          ANIMEGS
        </Link>

        {/* Search Input */}
        <div className="w-full md:w-auto flex-grow md:flex-grow-0">
          <InputSeacrh placeholder="Cari anime..." />
        </div>

        {/* User Actions */}
        <UserAction />
      </div>
    </header>
  );
};

export default Navbar;
