import Header from "@/components/Dashboard/Header";
import Typography from "@/elements/button/text/Typography";
import {authUserSession} from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  const user = await authUserSession();

  // fetch semua data di mysql
  const comments = await prisma.comment.findMany({
    where: {user_email: user.email},
  });
  console.log(comments);

  return (
    <section className="mt-8 px-6">
      <Header title="My Comment" />
      <div className="grid grid-cols-1 gap-6 mt-6 cursor-pointer">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white shadow-lg rounded-lg p-6 flex items-start gap-4 hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500">
              <Image
                src={comment.user_avatar || "/avatar.png"}
                alt={`${comment.user_name}'s Avatar`}
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Comment Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <Typography className="text-lg font-semibold text-gray-800">
                  {comment.user_name}
                </Typography>
                <Typography className="text-sm text-gray-500 italic">
                  {new Date(comment.timestamp).toLocaleDateString()}
                </Typography>
              </div>
              <Link
                href={`/anime/${comment.anime_mal_id}`}
                className="text-blue-600 hover:underline text-sm"
              >
                Judul: {comment.anime_title}
              </Link>
              <p className="mt-2 text-gray-700 italic">"{comment.comment}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
