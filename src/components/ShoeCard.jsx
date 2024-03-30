import React from "react";

const ShoeCard = ({ imageUrl, changeBigShoe, bigShoe }) => {
  const handleClick = () => {
    if (bigShoe != imageUrl.bigShoe) {
      changeBigShoe(imageUrl.bigShoe);
    }
  };
  return (
    <div
      className={`border ${
        imageUrl.bigShoe === bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1 rounded-lg`}
      onClick={handleClick}
    >
      <div className="bg-card bg-center bg-cover flex items-center justify-center sm:w-40 sm:h-40 max-sm:p-4  ">
        <img
          src={imageUrl.thumbnail}
          alt="small collection"
          width={127}
          height={103}
          className=" object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
