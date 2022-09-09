import React from "react";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="flex items-center justify-center p-2 m-2 mt-8 md:mt-12">
      <div
        className="mx-auto my-2 overflow-hidden rounded-xl aspect-[2/3] w-full max-w-[275px] md:w-3/4 lg:max-w-[640px] min-w-[150px] relative max-h-[907px] md:scale-[85%] lg:scale-50 lg:-my-[20%]  xl:-my-[10%] 
       desktop-med:-my-[15%] 2xl:-my-[1%] custom-shadow
      2xl:scale-[80%]  bg-slate-400"
      >
        <div className="absolute top-0 left-0 w-full h-full fade fade1">
          <div className="relative h-full">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src="/images/bday-1.png"
              alt="Sir K"
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full fade fade2">
          <div className="relative h-full">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src="/images/bday-2.jpg"
              alt="Sir K with the team"
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full fade fade3">
          <div className="relative h-full">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src="/images/bday-3.jpg"
              alt="Sir K again"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
