import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const ImgCard = ({ item }) => {
  return (
    <div className="container-card hover:cursor-pointer">
      <div
        className="rounded-custom flex flex-col justify-center px-5 py-10 h-[300px] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${item.src})` }}
      ></div>
      <div className="overlay text-center">
        <div className="text text-white-bone">
          <h3 className="text-2xl text-bold">{item.title}</h3>
          <p className="flex">
            Learn more <BsArrowRightShort className="text-2xl icon" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImgCard;
