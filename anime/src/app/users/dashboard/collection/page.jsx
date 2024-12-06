import Header from "@/components/Dashboard/Header";
import Typography from "@/elements/button/text/Typography";
import { getAnimeResponse } from "@/libs/api-libs";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  console.log("anime data response : ", anime);

  // memanggil authecntikasi user
  const user = await authUserSession();

  // panggil data collection di server component
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });
  console.log("INI data Collection : ", collection);

  return (
    <section className="mt-4 p-4">
      <Header title={"My Collection"} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collection.map((collect, index) => {
          return (
            <Link
              id={index}
              href={`/anime/${collect.anime_mal_id}`}
              className="relative"
            >
              <Image
                src={collect.anime_image}
                alt={collect.anime_image}
                width={350}
                height={350}
                className="w-full"
              />
              <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
                <Typography className="text-xl text-center">
                  {collect.anime_title}
                </Typography>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default page;
