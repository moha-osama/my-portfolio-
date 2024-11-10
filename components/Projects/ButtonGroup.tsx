import React from "react";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="flex items-center justify-between absolute w-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 px-2 md:px-0">
      <button
        onClick={() => previous()}
        className={`text-3xl text-[#dea30d] hover:bg-[#dea30d] hover:text-white duration-300 rounded-full p-1 ${
          currentSlide === 0 ? "disable" : ""
        }`}
      >
        <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
          <path
            fillRule="evenodd"
            d="M1 8a7 7 0 1014 0A7 7 0 001 8zm15 0A8 8 0 110 8a8 8 0 0116 0zm-4.5-.5a.5.5 0 010 1H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5z"
          />
        </svg>
      </button>
      <button
        onClick={() => next()}
        className={`text-3xl text-[#dea30d] hover:bg-[#dea30d] hover:text-white duration-300 rounded-full p-1 ${
          currentSlide === 0 ? "disable" : ""
        }`}
      >
        <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
          <path
            fillRule="evenodd"
            d="M1 8a7 7 0 1014 0A7 7 0 001 8zm15 0A8 8 0 110 8a8 8 0 0116 0zM4.5 7.5a.5.5 0 000 1h5.793l-2.147 2.146a.5.5 0 00.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 10-.708.708L10.293 7.5H4.5z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ButtonGroup;
