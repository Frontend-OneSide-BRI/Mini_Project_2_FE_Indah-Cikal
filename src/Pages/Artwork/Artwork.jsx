import React from "react";
import Galery from "../../Components/Galery/Galery";
import TabsRender from "../../Components/Tabs/Tabs";

const Artwork = () => {
  return (
    <>
      <section className="hero-artwork">
        <div
          className="parallax flex justify-center items-center text-white-bone text-center px-50 py-10 h-[400px]"
          style={{
            backgroundImage:
              'url("https://plus.unsplash.com/premium_photo-1670422126816-fd0594135bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=917&q=80',
          }}
        >
          <div className="md:w-2/3 ">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full h-[50px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white-bone focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="look for something"
              // value="Jane Doe"
            />
          </div>
        </div>
      </section>

      <section className="galery">
        <TabsRender/>
      </section>
    </>
  );
};

export default Artwork;
