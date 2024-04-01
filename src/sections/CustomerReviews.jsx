import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-bold text-4xl font-palanquin text-center">
        What
        <span className=" text-coral-red"> Our </span>
        Customers Says
      </h3>
      <p className="info-text max-w-lg m-auto mt-4 ">
        Genuine Stories from our customers about their exceptional journey with
        us
      </p>
      <div className="flex justify-evenly mt-16 flex-1 max-lg:flex-col gap-14 items-center">
        {reviews.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
