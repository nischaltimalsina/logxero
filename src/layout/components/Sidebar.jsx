import React from "react";
import { NavLink } from "react-router-dom";
import { navLinkData, StoreNavData } from "./navlinkData";

const Sidebar = ({toggle, handleToggle}) => {
  return (
    <aside className='h-full w-full px-8 py-12 flex flex-col justify-between'>
      <div>
        <ul className='flex flex-col gap-8 text-neutral-500 font-light' onClick={handleToggle}>
          {navLinkData.map((item) => {
            return (
              <li key={item.id} className='flex gap-4 items-center'>
                {item.icon}
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
            );
          })}
        </ul>
        <h3 className='uppercase  text-neutral-500 mt-10 mb-6'>Store</h3>
        <ul className='flex flex-col gap-8 text-neutral-500 font-light' onClick={handleToggle}>
          {StoreNavData.map((item) => {
            return (
              <li key={item.id} className='flex gap-4 items-center'>
                {item.icon}
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <button className='flex gap-4 text-neutral-500 font-light'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
          />
        </svg>
       <p>Logout</p> 
      </button>
    </aside>
  );
};

export default Sidebar;
