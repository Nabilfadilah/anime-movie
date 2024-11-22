import Header from "@/components/Dashboard/Header";
import Typography from "@/elements/button/text/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="mt-4 p-4">
      <Header title={"My Collection"} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/" className="relative border-2">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
            <Typography className="text-xl text-center">Judul Anime</Typography>
          </div>
        </Link>
        <Link href="/" className="relative border-2">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
            <Typography className="text-xl text-center">Judul Anime</Typography>
          </div>
        </Link>
        <Link href="/" className="relative border-2">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
            <Typography className="text-xl text-center">Judul Anime</Typography>
          </div>
        </Link>
        <Link href="/" className="relative border-2">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
            <Typography className="text-xl text-center">Judul Anime</Typography>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default page;
