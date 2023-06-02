import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import data from "../../Data/Galery";
import "./Galery.css";

const Galery = () => {
  return (
    <div className="mx-auto px-10 grid grid-cols-1 sm:grid-cols-4 gap-10">
      {data.map((item) => (
        <div className="container-card" key={item.id}>
          <div
            className="parallax rounded-custom flex flex-col justify-center px-5 py-10 h-[300px]"
            style={{ backgroundImage: `url(${item.src})` }}
          ></div>
          <div className="overlay">
            <div className="text text-white-bone">
              <h5 className="text-2xl text-bold">{item.title}</h5>
              <p className="flex">
                Learn more <BsArrowRightShort className="text-2xl icon" />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Galery;
