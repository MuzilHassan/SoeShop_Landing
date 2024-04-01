import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ review }) => {
  const { customerName, rating, feedback, imgURL } = review;
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt=""
        className=" rounded-full object-cover h-[120px] w-[120px]"
      />
      <p className="mt-6 max-w-sm info-text text-center">{feedback}</p>
      <div className="mt-3 flex items-center justify-center gap-2">
        <img src={star} alt="" className=" object-contain" />
        <p className="info-text text-xl">({rating})</p>
      </div>
      <h3 className="mt-1 text-3xl text-center font-palanquin font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
