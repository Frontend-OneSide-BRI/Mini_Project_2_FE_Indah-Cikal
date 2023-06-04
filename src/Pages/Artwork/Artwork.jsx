import React, { useState } from "react";
import TabsRender from "../../Components/Tabs/Tabs";
import SearchRes from "../../Components/SearchRes/SearchRes";
import { IoCloseCircleSharp } from "react-icons/io5";

const Artwork = () => {
  const [searchValue, setSearchValue] = useState("");
  const bg =
    "https://images.unsplash.com/photo-1580393563530-ac23da98aa0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1030&q=80";
  return (
    <>
      <section className="hero-artwork">
        <div
          className="parallax flex justify-center items-center text-center px-50 pt-16 h-[400px] sm:h-[500px]"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <div className="w-4/5 lg:w-2/3 ">
            <label className="text-white-bone ">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-wider pb-3 leading-10">
                Are you looking for something?
              </h2>
              <p className="pb-5 text-xl text-wide">No worries! We got you.</p>
            </label>
            <div className="flex">
              <input
                className="bg-gray-200/75 text-dark-font placeholder:text-dark-font/50 placeholder:text-sm  rounded-full w-full h-[50px] py-2 px-4 leading-tight focus:outline-none focus:bg-white-bone focus:border-2 border-indigo-800/75"
                id="inline-full-name"
                type="text"
                placeholder="Insert title, author, or category that you're looking for"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              {searchValue && (
                <IoCloseCircleSharp
                  className="text-5xl ml-2 text-white-bone/75 hover:text-white-bone hover:cursor-pointer"
                  onClick={() => setSearchValue("")}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      {searchValue ? (
        <section className="search-result mx-auto px-10 py-5 bg-white-bone">
          <SearchRes value={searchValue} />
        </section>
      ) : (
        <section className="galery bg-white-bone py-7">
          <div className="text-center pb-2 text-dark-font">
            <h2 className="text-3xl font-bold tracking-wider">
              Check Out Our Works!
            </h2>
            <p className="px-5">
              Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Est, porro.
            </p>
          </div>
          <TabsRender />
        </section>
      )}
    </>
  );
};

export default Artwork;
