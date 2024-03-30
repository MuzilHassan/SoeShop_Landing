import React from "react";
import { star } from "../assets/icons";
const PopularProduct = ({ prodcut }) => {
  const { imgURL, name, price } = prodcut;
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt="" className="h=[228px] w-[228px]" />
      <div className="mt-8 flex justify-start gap-2">
        <img src={star} alt="" height={24} width={24} />
        <p className=" font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="leading-normal mt-3 font-palanquin font-semibold text-2xl">
        {name}
      </h3>
      <p className="font-semibold leading-normal font-montserrat text-coral-red mt-2 text-2xl">
        {price}
      </p>
    </div>
  );
};

export default PopularProduct;
