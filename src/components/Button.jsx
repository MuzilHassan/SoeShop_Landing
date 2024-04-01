import React from "react";

const Button = ({
  label,
  icon,
  backgrounColor,
  textColor,
  borderColor,
  width = "",
}) => {
  return (
    <button
      className={`flex gap-2 items-center justify-center px-7 py-4 border ${
        backgrounColor
          ? `${backgrounColor}${textColor}${borderColor}`
          : "bg-coral-red  border-coral-red  text-white"
      } ${width} rounded-full
     font-montserrat leading-none`}
    >
      {label}
      {icon && (
        <img src={icon} alt="" className=" rounded-full ml-2 h-5 w-5 " />
      )}
    </button>
  );
};

export default Button;
