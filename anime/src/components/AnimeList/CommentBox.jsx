import prisma from "@/libs/prisma";
import React from "react";

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {comments.map((comment) => {
        return (
          <div
            key={comment.id}
            className="text-color-primary bg-color-dark border border-color-primary rounded-sm"
          >
            <p className="px-2 font-bold">{comment.username}</p>
            <hr />
            <p className="px-2">{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
