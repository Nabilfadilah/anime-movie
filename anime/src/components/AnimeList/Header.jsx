import React from "react";
import Typography from "@/elements/button/text/Typography";
import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <Typography className="text-2xl font-bold text-color-primary">
          {title}
        </Typography>
        {linkHref && linkTitle ? (
          <Link
            href={linkHref}
            className="md:text-lg text-md underline text-color-primary hover:text-color-accent transition-all"
          >
            {linkTitle}
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
