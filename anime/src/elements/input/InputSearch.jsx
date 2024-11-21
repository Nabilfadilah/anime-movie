"use client";

import { useRouter } from "next/navigation";
import { forwardRef, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai"; // Import ikon dari React Icons
import Button from "../button/Button";

const InputSearch = forwardRef((props, ref) => {
  const { placeholder, name, className, onChange } = props;
  const searchRef = useRef();
  const router = useRouter();
  const [keyword, setKeyword] = useState(""); // Simpan nilai input saat ini

  // Handle tombol Enter
  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     event.preventDefault();
  //     handleSearch(); // Panggil fungsi pencarian
  //   }
  // };

  // Handle tombol klik dan real-time update
  // const handleSearch = () => {
  //   const keyword = searchRef.current?.value || "";
  //   if (keyword.trim()) {
  //     router.push(`/search/${keyword}`); // Navigasi ke halaman pencarian
  //   }
  // };

  // const handleInputChange = (event) => {
  //   const keyword = event.target.value;
  //   if (keyword.trim()) {
  //     router.push(`/search/${keyword}`); // Navigasi otomatis saat input berubah
  //   }
  //   if (onChange) onChange(event); // Tetap memanggil onChange props jika ada
  // };

  // Handle perubahan input ke-2
  const handleInputChange = (event) => {
    const value = event.target.value;
    setKeyword(value);

    if (value.trim() === "") {
      // Jika input kosong, arahkan kembali ke halaman utama
      router.push("/");
    } else {
      // Jika input tidak kosong, arahkan ke halaman pencarian real-time
      router.push(`/search/${value}`);
    }
  };

  // Handle perubahan input
  // const handleInputChange = (event) => {
  //   const value = event.target.value;
  //   setKeyword(value);

  //   if (value.trim() === "") {
  //     // Jika input kosong, panggil fungsi untuk reset data populer
  //     if (onResetPopular) {
  //       onResetPopular();
  //     }
  //   }
  // };

  return (
    <div className="flex">
      {/* Ikon Search */}
      {/* <Button className="grid items-center" onClick={handleSearch}> */}
      {/* <AiOutlineSearch className="left-3 top-2.5 text-color-secondary" /> */}
      {/* </Button> */}

      {/* Input Field */}
      <input
        type="search"
        className={`text-sm border border-gray-500 rounded w-full py-2 px-10 text-slate-700 placeholder:opacity-90 ${className}`}
        placeholder={placeholder || "Cari..."}
        name={name}
        id={name}
        ref={ref || searchRef}
        value={keyword}
        // onKeyDown={handleKeyDown} // Tangani Enter
        onChange={handleInputChange} // Update real-time
      />
    </div>
  );
});

export default InputSearch;
