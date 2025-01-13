"use client";

import Button from "@/elements/button/Button";
import React, {useState} from "react";

const CollectionButton = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();

    // kalau punya data baru ya tinggal tambah parameter
    const data = {anime_mal_id, user_email, anime_image, anime_title};
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Failed to create collection:", response.statusText);
      return;
    }

    const collection = await response.json();
    if (collection.isCreated) {
      setIsCreated(true);
    }
    return;
  };

  return (
    <>
      {isCreated ? (
        <p className="text-color-primary">Berhasil ditambahkan</p>
      ) : (
        <Button
          onClick={handleCollection}
          className="px-2 py-1 mt-2 bg-white hover:bg-gray-300"
        >
          Add To Collection
        </Button>
      )}
    </>
  );
};

export default CollectionButton;
