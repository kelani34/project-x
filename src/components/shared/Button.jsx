import React from "react";

const Button = ({ text, image }) => {
  return (
    <button className="p-3 bg-[#071D2E] flex items-center gap-2 justify-center w-full">
      {image && <img src={image} alt="button image" />}
      <span className="text-white lg:text-2xl md:text-xl text-base">
        {text}
      </span>
    </button>
  );
};

export default Button;
