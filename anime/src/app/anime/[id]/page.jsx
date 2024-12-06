import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/utilities/VideoPlayer";
import Typography from "@/elements/button/text/Typography";
import Image from "next/image";
import React from "react";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  console.log(anime);

  const user = await authUserSession();

  // menghilangkan button add colection jika sudah di tambahkan
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });
  console.log(collection);

  return (
    <>
      <div className="pt-4 px-4">
        <Typography className="text-2xl text-color-primary">
          {anime.data.title} - {anime.data.year}
        </Typography>

        {!collection && user && (
          <CollectionButton
            anime_mal_id={id}
            user_email={user?.email}
            anime_image={anime.data.images.webp.image_url}
            anime_title={anime.data.title}
          />
        )}
      </div>

      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <Typography>PERINGKAT</Typography>
          <Typography>{anime.data.rank}</Typography>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <Typography>SKOR</Typography>
          <Typography>{anime.data.score}</Typography>
        </div>
        {/* <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <Typography>RATING</Typography>
          <Typography>{anime.data.rating}</Typography>
        </div> */}
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <Typography>MEMBER</Typography>
          <Typography>{anime.data.members}</Typography>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <Typography>FAVORIT</Typography>
          <Typography>{anime.data.favorites}</Typography>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <Typography>STATUS</Typography>
          <Typography>{anime.data.status}</Typography>
        </div>
        <div className="w-40 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <Typography>DURASI</Typography>
          <Typography>{anime.data.duration}</Typography>
        </div>
      </div>

      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />

        <Typography className="text-justify text-xl">
          RINGKASAN : {anime.data.synopsis}
        </Typography>
      </div>

      {/* input comment  */}
      <div className="px-4 py-2">
        <CommentInput />
      </div>

      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
