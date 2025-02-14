"use client";

import Button from "@/elements/button/Button";
import Typography from "@/elements/button/text/Typography";
import Link from "next/link";
import React from "react";
import {IoMdArrowBack} from "react-icons/io";
import {useRouter} from "next/navigation";

const Header = ({title}) => {
  const router = useRouter();

  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <Typography className="text-2xl text-black font-semibold">
        {title}
      </Typography>

      <Button
        className="bg-orange-950 hover:bg-orange-900 text-white p-2"
        onClick={handleBack}
      >
        <span className="flex items-center space-x-1">
          <IoMdArrowBack />
          <span>Back</span>
        </span>
      </Button>
    </div>
  );
};

export default Header;
