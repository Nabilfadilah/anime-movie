import {getAnimeResponse} from "@/libs/api-libs";
import VideoPlayer from "@/components/utilities/VideoPlayer";
import Typography from "@/elements/button/text/Typography";
import Image from "next/image";
import React from "react";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import {authUserSession} from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";

const Page = async ({params: {id}}) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  console.log(anime);

  const user = await authUserSession();

  // menghilangkan button add colection jika sudah di tambahkan
  const collection = await prisma.collection.findFirst({
    where: {user_email: user?.email, anime_mal_id: id},
  });
  console.log(collection);

  return (
    <>
      <>
        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 p-6 bg-gray-100 text-gray-800">
          {[
            {label: "Peringkat", value: anime.data.rank},
            {label: "Skor", value: anime.data.score},
            {label: "Member", value: anime.data.members},
            {label: "Favorit", value: anime.data.favorites},
            {label: "Status", value: anime.data.status},
            {label: "Durasi", value: anime.data.duration},
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md shadow-gray-400"
            >
              <p className="text-sm font-semibold">{item.label}</p>
              <p className="text-lg font-bold">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-gray-900 to-pink-950 text-white p-6">
          <div className="flex flex-wrap items-center gap-6">
            {/* Poster */}
            <Image
              src={anime.data.images.webp.image_url}
              alt={anime.data.title}
              width={300}
              height={450}
              className="rounded-lg shadow-lg"
            />
            {/* Title and Details */}
            <div>
              <h1 className="text-4xl font-bold">{anime.data.title}</h1>
              <p className="text-lg mt-2">{anime.data.year}</p>
              {!collection && user && (
                <div className="mt-4 text-black">
                  <CollectionButton
                    anime_mal_id={id}
                    user_email={user?.email}
                    anime_image={anime.data.images.webp.image_url}
                    anime_title={anime.data.title}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Synopsis Section */}
        <div className="p-6 bg-white">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ringkasan</h2>
          <p className="text-gray-700 text-justify">{anime.data.synopsis}</p>
        </div>

        {/* Comments Section */}
        <div className="p-6 bg-gradient-to-r from-gray-200 to-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Komentar Penonton
          </h2>
          <CommentBox anime_mal_id={id} />
          {user && (
            <>
              <h3 className="text-xl font-bold text-gray-900 mt-6">
                Tambah Komentar
              </h3>
              <CommentInput
                anime_mal_id={id}
                user_email={user?.email}
                username={user?.name}
                anime_title={anime.data.title}
              />
            </>
          )}
        </div>

        {/* Trailer Section */}
        <div className="p-6 bg-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Trailer</h2>
          <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
        </div>
      </>
    </>
  );
};

export default Page;
