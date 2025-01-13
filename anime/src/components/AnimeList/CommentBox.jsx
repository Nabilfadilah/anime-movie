import prisma from "@/libs/prisma";
import React from "react";

const CommentBox = async ({anime_mal_id}) => {
  const comments = await prisma.comment.findMany({where: {anime_mal_id}});

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 px-4">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="bg-white border border-gray-200 shadow-lg rounded-lg p-4"
        >
          {/* User Info */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-lg font-bold text-gray-700">
              {comment.username.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-semibold text-gray-800">{comment.username}</p>
              <p className="text-sm text-gray-500">
                {comment.date || "Just now"}
              </p>
            </div>
          </div>

          {/* Comment Content */}
          <p className="text-gray-700">{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentBox;
