const Button = (props) => {
    // konsep desctrukturing
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
  