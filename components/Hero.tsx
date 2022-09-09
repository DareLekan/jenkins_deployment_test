import React from "react";
// bg-[url('/images/confetti.gif'),url('/images/hero-image.svg'),url('/images/cheers.svg')]
const Hero = () => {
  return (
    <div className="grad">
      <header
        className="h-screen max-h-[650px] flex flex-col justify-center
  md:grid md:grid-cols-12 gap-3  pt-[25%] md:pt-10
   items-center relative  max-w-screen-desktop-wide mx-auto
  bg-no-repeat overflow-hidden 
  hero
  "
      >
        <article className="md:!col-start-2 text-center md:text-start md:col-span-8 pb-10 xl:col-span-5 mx-5 md:mx-1 ">
          <h1 className="mb-4 text-2xl font-pacifico md:text-3xl lg:text-5xl lg:leading-[70px] ">
            Happy Birthday Kolade aka Sir K
          </h1>
          <p className="text-xs font-normal md:text-sm lg:text-lg md:w-[85%]">
            It&apos;s been such a pleasure working with you and seeing all the
            great stuff you do with Fusion Intelligence. Your drive for success
            is quite admirable. We wish you a very happy birthday and all of the
            best that life has to offer. Cheers to an even greater year filled
            with God&apos;s goodness, blessings, good health, success and wealth
            🍾 🍾 🍾
          </p>
        </article>

        <div className="bg-[url('/images/hero-image-mobile.svg')] w-full flex-1 relative bg-cover bg-no-repeat md:hidden" />
      </header>
    </div>
  );
};

export default Hero;
