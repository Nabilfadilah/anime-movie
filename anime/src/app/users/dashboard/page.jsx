import Typography from "@/elements/button/text/Typography";
import {authUserSession} from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";
import {redirect} from "next/navigation";
import React from "react";

const Page = async () => {
  const user = await authUserSession();
  // console.log("Gabarnya ada? : ", user.image);
  if (!user) redirect("/");

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-color-primary rounded-lg border-t-8 border-orange-950 p-8 max-w-sm w-full text-center shadow-xl shadow-gray-500">
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

        <div className="flex items-center justify-center gap-4 py-8">
          <Link
            href="/users/dashboard/collection"
            className="bg-orange-950 hover:bg-orange-900 text-white font-bold px-4 py-3 text-sm rounded-xl"
          >
            My Collection
          </Link>
          <Link
            href="/users/dashboard/comment"
            className="bg-orange-950 hover:bg-orange-900 text-white font-bold px-4 py-3 text-sm rounded-xl"
          >
            My Comment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
