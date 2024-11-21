"use client";

import { useRouter } from "next/navigation";
import { forwardRef, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai"; // Import ikon dari React Icons

const InputSearch = forwardRef((props, ref) => {
  const { placeholder, name, className, onChange } = props;
  const searchRef = useRef();
  const router = useRouter();

  // Handle tombol Enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch(); // Panggil fungsi pencarian
    }
  };

  // Handle tombol klik dan real-time update
  const handleSearch = () => {
    const keyword = searchRef.current?.value || "";
    if (keyword.trim()) {
      router.push(`/search/${keyword}`); // Navigasi ke halaman pencarian
    }
  };

  // const handleInputChange = (event) => {
  //   const keyword = event.target.value;
  //   if (keyword.trim()) {
  //     router.push(`/search/${keyword}`); // Navigasi otomatis saat input berubah
  //   }
  //   if (onChange) onChange(event); // Tetap memanggil onChange props jika ada
  // };

  return (
    <div className="relative">
      {/* Ikon Search */}
      <button onClick={handleSearch}>
        <AiOutlineSearch className="absolute left-3 top-2.5 text-gray-400" />
      </button>

      {/* Input Field */}
      <input
        type="search"
        className={`text-sm border border-gray-500 rounded w-full py-2 px-10 text-slate-700 placeholder:opacity-90 ${className}`}
        placeholder={placeholder || "Cari..."}
        name={name}
        id={name}
        ref={ref || searchRef}
        onKeyDown={handleKeyDown} // Tangani Enter
        // onChange={handleInputChange} // Update real-time
      />
    </div>
  );
});

export default InputSearch;
