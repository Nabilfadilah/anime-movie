"use client";

import Button from "@/elements/button/Button";
import Typography from "@/elements/button/text/Typography";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  // state rating
  // const [rating, setRating] = useState(0);
  // const [hover, setHover] = useState(null);

  // agar langsung muncul ketika udah posting komentar
  const router = useRouter();

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();

    // kalau punya data baru ya tinggal tambah parameter
    // data komentar dan rating
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
      // setRating(0); // reset rating
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

        {/* tampilan rating */}
        {/* <div className="flex items-center gap-1 my-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={24}
              className={`cursor-pointer ${
                star <= (hover || rating)
                  ? "text-color-yellow"
                  : "text-color-accent"
              }`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(null)}
            />
          ))}
        </div> */}

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
