import React, { useState } from "react";
import {
  BsStarFill,
  BsAwardFill,
  BsFillBookmarkStarFill,
} from "react-icons/bs";
import Galery from "../Galery/Galery";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = useState("All Posts");
  const tabData = [
    {
      category: "All Posts",
      icons: <BsFillBookmarkStarFill />,
    },
    {
      category: "Most Popular",
      icons: <BsAwardFill />,
    },
    {
      category: "Personal Favorite",
      icons: <BsStarFill />,
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-1/2">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {tabData.map((item) => (
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === item.category
                      ? `text-white-bone bg-${color}`
                      : ` bg-white`)
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(item.category);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  {item.icons} {item.category}
                </a>
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
