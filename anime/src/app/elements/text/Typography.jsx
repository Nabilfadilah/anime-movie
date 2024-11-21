import React from "react";

const Typography = (props) => {
  const { children, className = "" } = props;

  return <p className={`font-poppins ${className}`}>{children}</p>;
};

export default Typography;
