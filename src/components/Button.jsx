import React from "react";

const Button = ({ label, icon }) => {
  return (
    <button
      className=" flex gap-2 items-center justify-center px-7 py-4 border bg-coral-red rounded-full
     text-white font-montserrat leading-none border-coral-red "
    >
      {label}
      {icon && (
        <img src={icon} alt="" className=" rounded-full ml-2 h-5 w-5 " />
      )}
    </button>
  );
};

export default Button;
