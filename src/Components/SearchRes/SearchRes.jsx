import React from "react";
import data from "../../Data/Galery";
import ImgCard from "../Galery/ImgCard";
import { TbMoodSad } from "react-icons/tb";

const SearchRes = ({ value }) => {
  const handleSearch = (value) => {
    const searchRes = data.map((item) => {
      const title = item.title.toLocaleLowerCase();
      const category = item.category.toLocaleLowerCase();
      const author = item.author.toLocaleLowerCase()
      const val = value.toLocaleLowerCase();
      return (
        (title.includes(val) || category.includes(val) || author.includes(val)) && (
          <ImgCard item={item} key={item.id} />
        )
      );
    });

    return searchRes;
  };

  const handleResult = (value) => {
    const isResTrue = handleSearch(value).some((item) => item !== false);
    const result = isResTrue ? (
      <div className="pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {handleSearch(value)}
      </div>
    ) : (
      <div className="text-center py-32">
        <h3 className="text-5xl md:text-6xl lg:text-7xl flex justify-center font-bold tracking-widest mb-5">
          OOPS! <TbMoodSad className="mx-1" />
        </h3>
        <h4 className="text-3xl mb-2">
          Sorry! we could not found what you're looking for!
        </h4>
        <p className="text-xl">please insert a new keyword!</p>
      </div>
    );

    return result;
  };

  return (
    <>
      <h2 className="px-2 py-3 font-bold text-xl">Search Result of {value}</h2>
      {handleResult(value)}
    </>
  );
};

export default SearchRes;
