import Header from "@/components/Dashboard/Header";
import Typography from "@/elements/button/text/Typography";
import {getAnimeResponse} from "@/libs/api-libs";
import {authUserSession} from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({params: {id}}) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  console.log("anime data response : ", anime);

  // memanggil authecntikasi user
  const user = await authUserSession();

  // panggil data collection di server component
  const collection = await prisma.collection.findMany({
    where: {user_email: user.email},
  });
  console.log("INI data Collection : ", collection);

  return (
    <section className="mt-8 mb-8 px-6">
      <Header title="My Collection" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-6">
        {collection.map((collect, index) => (
          <Link
            key={index}
            href={`/anime/${collect.anime_mal_id}`}
            className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src={collect.anime_image}
              alt={collect.anime_image}
              width={350}
              height={350}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent h-16 flex items-center justify-center group-hover:bg-black/70 transition-colors duration-300">
              <Typography className="text-lg text-white font-semibold text-center px-4">
                {collect.anime_title}
              </Typography>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default page;
