"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface CustomSliderProps {
  items: {
    title: string;
    label: string;
    description: string;
    img: StaticImageData;
  }[];
}

const CustomSlider = ({ items }: CustomSliderProps) => {
  const [currSlide, setCurrSlide] = React.useState(0);

  const handleNextSlide = () => {
    setCurrSlide((prev) => (prev + 1) % items.length);
  };

  const handlePrevSlide = () => {
    setCurrSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleSetSlide = (index: number) => {
    setCurrSlide(index);
  };

  const translateX = currSlide * 200;

  return (
    <div className="relative mx-8 w-full lg:w-[80%] overflow-hidden">
      {/* Main Image */}
      <div className="relative h-[30rem] w-full">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/60 via-transparent  z-10"></div>

        {/* Description container */}
        <div className="absolute bottom-0 z-20 p-8 max-w-96">
          <hr className="border-white mb-4" />
          <div>
            <h3 className="text-4xl text-white">{items[currSlide].label}</h3>
            <h1 className="text-8xl text-white">{items[currSlide].title}</h1>
            <p className="text-xl text-white">{items[currSlide].description}</p>
            <div className="flex gap-5">
              <button className="rounded-2xl bg-[#B46924] px-8 py-4">
                View Live
              </button>
              <button className="rounded-2xl bg-[#B46924] px-8 py-4"></button>
            </div>
          </div>
        </div>
        <Image
          className="object-cover h-full w-full"
          quality={100}
          src={items[currSlide].img}
          alt={items[currSlide].title}
        />
      </div>

      {/* Thumbnails Container */}
      <div className="absolute right-0 bottom-0 flex items-center">
        <div className="relative overflow-hidden min-h-[18.5rem] min-w-[28rem]">
          <div
            className="flex absolute z-10 items-end transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {items.map((item, index) => (
              <div className="p-4" key={item.title}>
                <div
                  className={`shadow-xl relative border-[4px] rounded-3xl border-[#FFD700]`}
                >
                  <Image
                    className={`${
                      index === currSlide
                        ? "h-[16rem] min-w-[14rem]"
                        : "h-[12rem] min-w-[10rem]"
                    } object-cover rounded-[1.25rem] duration-1000`}
                    src={item.img}
                    quality={100}
                    alt={item.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute flex gap-2 bottom-4 -translate-x-1/2 left-1/2 z-20">
        {items.map((item, index) => (
          <div
            key={item.title}
            onClick={() => handleSetSlide(index)}
            className={`${
              index === currSlide ? "" : "opacity-50"
            } bg-white w-3 h-3 rounded-full cursor-pointer`}
          ></div>
        ))}
      </div>
      {/* <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &#8592;
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &#8594;
      </button> */}
    </div>
  );
};

export default CustomSlider;
