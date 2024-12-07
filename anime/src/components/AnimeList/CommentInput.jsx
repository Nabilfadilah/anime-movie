"use client";

import Button from "@/elements/button/Button";
import Typography from "@/elements/button/text/Typography";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  // agar langsung muncul ketika udah posting komentar
  const router = useRouter();

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();

    // kalau punya data baru ya tinggal tambah parameter
    const data = { anime_mal_id, user_email, comment, username, anime_title };
    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Failed to create comment:", response.statusText);
      return;
    }

    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setComment(""); // agar clear textera
      router.refresh(); // update semua state
    }
    return;
  };

  // untuk disable button ketika kurang dari 3 huruf
  const isButtonDisable = comment.trim().length < 3;

  return (
    <div className="flex flex-col gap-2">
      {isCreated && (
        <p className="text-color-accent">postingan komentar terkirim...</p>
      )}
      <Typography className="text-color-primary">
        <textarea
          onChange={handleInput}
          value={comment}
          placeholder="Tulis komentar Anda..."
          className="w-full h-28 text-color-dark rounded-lg p-2"
        ></textarea>
        <Button
          disabled={isButtonDisable}
          onClick={handlePosting}
          className="py-2 px-3 text-color-dark hover:text-color-accent bg-color-accent hover:bg-color-secondary"
        >
          Posting Komentar
        </Button>
      </Typography>
    </div>
  );
};

export default CommentInput;
