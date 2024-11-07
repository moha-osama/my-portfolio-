import React from "react";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="project-card hover:cursor-pointer w-fit scale-75 lg:scale-[0.65] xl:scale-75">
      <div className="relative rounded-3xl">
        <svg
          className="backdrop-blur-sm"
          xmlns="http://www.w3.org/2000/svg"
          width="416"
          height="508"
          viewBox="0 0 416 508"
          fill="none"
        >
          <defs>
            <clipPath id="clipShape">
              <path d="M0 37C0 16.5655 16.5655 0 37 0H379C399.435 0 416 16.5655 416 37V338.5C416 358.935 399.435 375.5 379 375.5H356.049C317.534 375.5 286.476 407.031 287.057 445.541L287.433 470.442C287.745 491.092 271.09 508 250.437 508H37C16.5655 508 0 491.435 0 471V37Z" />
            </clipPath>
          </defs>
        </svg>
        <div
          className="card-bg absolute inset-0 backdrop-blur-sm bg-[#68686833]"
          style={{ clipPath: "url(#clipShape)" }}
        >
          <div className="border-b">
            <h1 className="text-white text-3xl p-8 font-bold">Landing Page</h1>
          </div>
          <div className="img-docs h-full flex items-end relative">
            <Image
              src="/cover.jpg"
              className="h-4/5 object-cover rounded-t-3xl absolute z-40"
              quality={100}
              width={1024}
              height={1024}
              alt=""
            />
            <div className="absolute bg-[#9E9D9D] h-[84%] w-[93%] z-30 right-1/2 translate-x-1/2 rounded-t-3xl bottom-0"></div>
            <div className="absolute bg-[#757575] opacity-50 h-[87%] w-[87%] z-20 right-1/2 translate-x-1/2 rounded-t-3xl bottom-0"></div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0">
          <button className="bg-[#1D2939] rounded-[50%] h-28 w-28 inline">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
