import React from "react";
import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
const SpecialOffer = () => {
  return (
    <section className="flex items-center max-lg:flex-col-reverse  gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          alt="offer_image"
          className=" object-contain w-full"
          width={774}
          height={687}
        />
      </div>
      <div className="flex justify-between max-lg:flex-col gap-10  max-container ">
        <div>
          <h2 className="mt-10 font-palanquin text-4xl  font-bold lg:max-w-lg">
            Special
            <span className=" text-coral-red "> Offer </span>
          </h2>
          <p className="  mt-4 info-text lg:max-w-lg">
            Unveil the epitome of footwear luxury with our exclusive special
            offer on shoes. Crafted with meticulous attention to detail and
            premium materials, each pair promises unparalleled comfort and
            style. Elevate your stride with confidence as you step into a world
            of unparalleled quality and sophistication.
          </p>
          <p className="  mt-6 info-text lg:max-w-lg mb-12">
            Discover the essence of exceptional footwear at unbeatable prices
            with our special offer on shoes. From timeless classics to modern
            designs, our collection caters to every style and occasion. Step
            into comfort and elegance with each pair, meticulously crafted to
            redefine your walking experience. Don't miss out on this opportunity
            to indulge in quality craftsmanship at remarkable value.
          </p>
          <div className="flex flex-wrap mt-11 gap-4">
            <Button label="Shop Now " icon={arrowRight} />
            <Button
              label={"Learn More"}
              backgrounColor={"bg-white"}
              borderColor={"border-slate-gray"}
              textColor={"text-slate-gray"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
