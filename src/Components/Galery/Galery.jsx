import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import data from "../../Data/Galery";
import "./Galery.css";

const Galery = ({ category = "" }) => {
  const card = () => {
    const res = data.map((item) => (
      <div className="container-card" key={item.id}>
        <div
          className="rounded-custom flex flex-col justify-center px-5 py-10 h-[300px] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${item.src})` }}
        ></div>
        <div className="overlay text-center">
          <div className="text text-white-bone">
            <h5 className="text-2xl text-bold">{item.title}</h5>
            <p className="flex">
              Learn more <BsArrowRightShort className="text-2xl icon" />
            </p>
          </div>
        </div>
      </div>
    ));
    return res;
  };

  const filtered = (category) => {
    const filtered = data
      .filter((item) => item.category === category)
      .map((item) => (
        <div className="container-card hover:cursor-pointer" key={item.id}>
          <div
            className="rounded-custom flex flex-col justify-center px-5 py-10 h-[300px] bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${item.src})` }}
          ></div>
          <div className="overlay text-center">
            <div className="text text-white-bone">
              <h5 className="text-2xl text-bold">{item.title}</h5>
              <p className="flex">
                Learn more <BsArrowRightShort className="text-2xl icon" />
              </p>
            </div>
          </div>
        </div>
      ));
    return filtered;
  };

  return (
    <div className="mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {category ? filtered(category) : card()}
    </div>
  );
};

export default Galery;
