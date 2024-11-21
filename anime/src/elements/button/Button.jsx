// Directive ini memberi tahu Next.js bahwa file tersebut harus dirender sebagai Client Component, sehingga mendukung event handler seperti onClick.
"use client"; 

const Button = (props) => {
  // Konsep destructuring
  const {
    children,
    className = "bg-black text-white font-poppins",
    onClick = () => {},
    type = "button",
    disabled,
  } = props;
  
  return (
    <button
      className={`h-7 px-4 text-sm rounded-md ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
