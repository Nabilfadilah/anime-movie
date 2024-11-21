import { forwardRef } from "react";
import { AiOutlineSearch } from "react-icons/ai"; // Import ikon dari React Icons

const InputSeacrh = forwardRef((props, ref) => {
  const { placeholder, name, className, onChange } = props;

  return (
    <div className="relative w-80">
      {/* Ikon Search */}
      <AiOutlineSearch className="absolute left-3 top-2.5 text-gray-400" />

      {/* Input Field */}
      <input
        type="search"
        className={`text-sm border border-gray-500 rounded w-full py-2 px-10 text-slate-700 placeholder:opacity-90 ${className}`}
        placeholder={placeholder || "Cari..."}
        name={name}
        id={name}
        ref={ref}
        onChange={onChange}
      />
    </div>
  );
});

export default InputSeacrh;
