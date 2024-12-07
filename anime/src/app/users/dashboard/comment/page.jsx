import Header from "@/components/Dashboard/Header";
import Typography from "@/elements/button/text/Typography";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";
import React from "react";

const page = async () => {
  const user = await authUserSession();

  // fetch semua data di mysql
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });
  console.log(comments);

  return (
    <section className="mt-4 p-4">
      <Header title={"My Comment"} />
      <div className="grid grid-cols-1 px-4 py-1 gap-4">
        {comments.map((comment) => {
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="bg-color-accent text-color-secondary p-4 rounded-md"
            >
              <Typography className="text-sm">
                Judul : {comment.anime_title}
              </Typography>
              <Typography className="italic">"{comment.comment}"</Typography>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default page;
