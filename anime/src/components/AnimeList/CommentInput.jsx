"use client";

import Button from "@/elements/button/Button";
import Typography from "@/elements/button/text/Typography";
import React, { useState } from "react";

const CommentInput = () => {
  const [comment, setComment] = useState("");

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = (event) => {
    event.preventDefault();
    console.log(comment);
  };

  return (
    <div className="mt-4 flex flex-col gap-2">
      <Typography className="text-color-primary">
        <textarea
          onChange={handleInput}
          className="w-full h-28 text-color-dark rounded-lg p-2"
        ></textarea>
        <Button
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
