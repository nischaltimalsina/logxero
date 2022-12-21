import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Main = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(toggle => !toggle);
  };

  return (
    <div className='relative w-screen h-screen '>
      <div className="absolute w-full bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-50">
      <Navbar/>
      </div>
      <div className="absolute top-20 h-[calc(100%-5rem)] p-3 w-full flex gap-3">
        <div className="w-80 h-full hidden lg:block">
          <div className=" bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-50 h-full w-full  ">
            <Sidebar/>
          </div>
        </div>
        <div className="w-full lg:w-[calc(100%-20rem)] h-full z-50 overflow-x-hidden">
        <Outlet/>
        </div>
      </div>
    </div>
  );
};

/* Using React Memo to prevent Unnecessary re-renders */
export default React.memo(Main);
