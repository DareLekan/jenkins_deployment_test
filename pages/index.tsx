import type { NextPage } from "next";
import Hero from "../components/Hero";

import data from "../wishes.json";
import Carousel from "./Carousel";

const Home: NextPage = () => {
  return (
    <main className="pb-12">
      <Hero />

      <section className="my-8 text-center">
        <h3
          className="font-pacifico 
        text-2xl md:text-[45px] md:leading-[80px]
        "
        >
          We got you a little something
        </h3>
        <span
          className="bg-[url('/images/arrow.svg')] mx-auto
        bg-no-repeat bg-contain h-8 md:h-10 lg:h-[50px] aspect-square block 
        "
        />
      </section>

      <section className="max-w-5xl grid-cols-10 px-3 mx-auto md:grid md:gap-y-14 lg:gap-y-28 gap-x-7 ">
        {data.map((item, i) => (
          <article
            key={i}
            className={`col-span-4 my-12 md:my-0
          text-center md:text-left col-start-2
          even:col-start-6`}
          >
            <h3 className="mb-2 text-lg font-extrabold md:text-xl lg:text-2xl md:mb-4">
              {item.name}
            </h3>
            <p className="whitespace-pre-line ">{item.wish}</p>
          </article>
        ))}
      </section>

      <Carousel />

      <h3
        className="font-pacifico my-2 text-center
        text-2xl md:text-[45px] md:leading-[80px]
        "
      >
        Happy Birthday Kolade!
      </h3>
    </main>
  );
};

export default Home;
