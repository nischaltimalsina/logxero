import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { ProductGrid, ProductList } from "./features/Product";
import { NavLink, Outlet } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Inventory = () => {
  // const [data, setData] = useState([]);
  // const FetchData = async () => {
  //   const res = await axios.get("https://fakestoreapi.com/products");
  //   return res.data;
  // };

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await FetchData();
  //       setData(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getData();
  // }, []);

 



  return (
    <div className='relative h-full w-full bg-white flex flex-col md:flex-row overflow-y-scroll  text-neutral-600'>
      <div className='mx-auto w-full h-full md:w-64 py-4 md:py-24 px-4  sm:px-6 lg:px-8 border-b lg:border-b-0'>
      <h3 className='text-2xl font-bold hidden md:block'>Menu</h3>

        <ul className="flex font-bold gap-4 h-full md:py-6 md:flex-col flex-wrap justify-between md:justify-start ">
          <li>
            <NavLink to={"inventory"}>View Store</NavLink>
          </li>
          <li>
            <NavLink to={""}>Add Product</NavLink>
          </li>
          <li>
            <NavLink to={""}>Settings</NavLink>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-[calc(100%-16rem)] "><Outlet/></div>
    </div>
  );
};

export default Inventory;




