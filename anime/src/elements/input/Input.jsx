import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const {
    type,
    placeholder,
    name,
    className = "w-full",
    onChange,
    value,
    accept,
    onBlur,
    error,
    helperText,
  } = props; // Set default class w-80

  return (
    <input
      type={type}
      className={`text-sm border border-gray-400 rounded py-2 px-2 text-slate-700 placeholder:opacity-50 ${className}`} // Tambahkan className dari props
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
      onChange={onChange}
      // required
      value={value}
      accept={accept}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
    />
  );
});

export default Input;
