import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Main = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <div className='relative w-screen h-screen '>
      <div className='absolute w-full bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-50'>
        <Navbar toggle={toggle} handleToggle={handleToggle} />
      </div>
      <div className='absolute top-20 h-[calc(100%-5rem)] w-full flex gap-3 z-10'>
        <div className='w-full  h-full  overflow-x-hidden'>
          <div
            className={`absolute left-0 top-0  w-full h-full bottom-0 flex ${
              toggle ? "z-50 " : "hidden"
            } `}>
            <button
              className={`absolute w-full h-full bg-black/40  ${
                toggle ? "backdrop-blur-sm block " : "hidden delay-150"
              }`}
              onClick={handleToggle}></button>
            <div
              className={`${
                toggle ? "translate-x-0" : "-translate-x-full"
              } ease-in-out duration-200  bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-50 h-full w-80 `}>
              <Sidebar handleToggle={handleToggle} />
            </div>
          </div>
          <div className='z-10 h-full w-full'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

/* Using React Memo to prevent Unnecessary re-renders */
export default React.memo(Main);
