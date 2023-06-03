import React, { useState } from "react";

import Galery from "../Galery/Galery";

const Tabs = () => {
  const [openTab, setOpenTab] = useState("All Posts");
  const tabData = ["All Posts","Most Popular", "Personal Favorite"];

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full lg:w-1/2">
          <ul
            className="mb-0 list-none py-4 flex align-center justify-center"
            role="tablist"
          >
            {tabData.map((item, i) => (
              <li
                key={i}
                className={
                  "px-2 md:px-5 font-bold flex items-center block justify-center hover:cursor-pointer transition-all duration-300 hover:underline underline-offset-4 decoration-2" +
                  (openTab === item ? ` underline text-dark-font` : ` text-light-font `)
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(item);
                }}
                data-toggle="tab"
                role="tablist"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {openTab === "All Posts" ? <Galery /> : <Galery category={openTab} />}
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="[#edd1ca]" />;
    </>
  );
}
