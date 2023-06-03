import React from "react";
import data from "../../Data/Galery";
import "./Galery.css";
import ImgCard from "./ImgCard";

const Galery = ({ category = "" }) => {
  const card = () => {
    const res = data.map((item) => <ImgCard item={item} key={item.id} />);
    return res;
  };

  const filtered = (category) => {
    const filtered = data
      .filter((item) => item.category === category)
      .map((item) => <ImgCard item={item} key={item.id} />);
    return filtered;
  };

  return (
    <div className="mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {category ? filtered(category) : card()}
    </div>
  );
};

export default Galery;
