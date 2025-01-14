import Button from "@/elements/button/Button";
import Typography from "@/elements/button/text/Typography";
import React from "react";

const Pagination = ({page, lastPage, setPage}) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-xl">
      <Button
        disabled={page === 1}
        onClick={handlePrevPage}
        className="transition-all text-white hover:text-gray-300 bg-orange-950 hover:bg-orange-900 p-2"
      >
        Prev
      </Button>
      <Typography>
        {page} of {lastPage}
      </Typography>

      {page >= lastPage ? null : (
        <Button
          onClick={handleNextPage}
          className="transition-all text-white hover:text-gray-300 bg-orange-950 hover:bg-orange-900 p-2"
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default Pagination;
