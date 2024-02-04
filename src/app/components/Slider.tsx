"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    img: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    img: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    img: "/slide3.png",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[clac(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className=" bg-red-500 text-white py-4 px-8">Order Now</button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="relative lg:h-full flex-1">
        <Image
          src={data[currentSlide].img}
          alt="Slide Image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
