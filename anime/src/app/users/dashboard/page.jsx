import Typography from "@/elements/button/text/Typography";
import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import React from "react";

const Page = async () => {
  const user = await authUserSession();
  console.log("Gabarnya ada? : ", user.image);

  return (
    <div className="min-h-screen flex items-start justify-start p-6">
      <div className="bg-color-primary shadow-lg rounded-lg p-8 max-w-sm w-full text-center">
        <Typography className="text-3xl font-bold text-gray-800 mb-4">
          Dashboard
        </Typography>
        <p className="text-lg text-gray-600 mb-6">
          Welcome, <span className="font-semibold">{user.name}</span>!
        </p>
        <div className="relative w-40 h-40 mx-auto mb-4">
          <Image
            src={user.image}
            alt="Profile Picture"
            width={160}
            height={160}
            className="rounded-full border-4 border-indigo-500 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
