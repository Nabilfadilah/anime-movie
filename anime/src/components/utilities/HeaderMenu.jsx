import Typography from "@/elements/button/text/Typography";
import React from "react";

const HeaderMenu = ({ title }) => {
  return (
    <div>
      <div className="p-8">
        <Typography className="text-center text-2xl text-color-primary">
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default HeaderMenu;
