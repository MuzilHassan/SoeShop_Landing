import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section id="about-us">
      <div className="flex justify-between max-lg:flex-col gap-10 w-full max-container ">
        <div>
          <h2 className="mt-10 font-palanquin text-4xl  font-bold lg:max-w-lg">
            We Provide You
            <br />
            <span className=" text-coral-red ">Super </span>
            <span className=" text-coral-red ">Quality </span>
            Shoes
          </h2>
          <p className="  mt-4 info-text lg:max-w-lg">
            Elevate your step with unparalleled quality. Our shoes are
            meticulously crafted with premium materials, ensuring durability and
            comfort with every stride. Experience the perfect blend of style and
            functionality, designed to accompany you on every journey. Discover
            the epitome of footwear excellence and redefine your walking
            experience today.
          </p>
          <p className="  mt-6 info-text lg:max-w-lg mb-12">
            Our dedication to details ensures customer satisfaction
          </p>

          <Button label="View Details" />
        </div>
        <div className="flex justify-center items-center flex-1">
          <img
            src={shoe8}
            alt=""
            height={570}
            width={522}
            className=" object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
