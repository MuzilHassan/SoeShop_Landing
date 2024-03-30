import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
const Hero = () => {
  const [bigImg, setBigImg] = useState(bigShoe1);
  return (
    <section
      className="w-full max-container flex  xl:flex-row flex-col justify-center min-h-screen gap-10 "
      id="home"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className=" text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover Stylish Nike Arrivals,quality comfort and inovation for your
          active life
        </p>
        <Button label="Shop Now" icon={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((item, i) => (
            <div key={i}>
              <p className="text-4xl font-bold font-palanquin">{item.value}</p>
              <p className=" text-slate-gray leading-7 font-montserrat">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex-1 flex items-center justify-center relative xl:min-h-screen
      max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
      >
        <img
          src={bigImg}
          alt=""
          height={500}
          width={610}
          className=" object-contain relative z-10"
        />

        <div className=" flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imageUrl={shoe}
                changeBigShoe={setBigImg}
                bigShoe={bigImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
