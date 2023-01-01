import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import React, { useEffect, useState, Fragment } from "react";

export const ProductGrid = ({ products }) => {
  return (
    <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
      {products.map((product, i) => (
        <div key={i} className='group relative'>
          <div
            className={` min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80`}>
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className='h-full w-full object-cover object-center lg:h-full lg:w-full'
            />
          </div>
          <div className='mt-4 flex justify-between'>
            <div>
              <h3 className='text-sm text-gray-700'>
                <a href={product.href}>
                  <span aria-hidden='true' className='absolute inset-0' />
                  {product.name}
                </a>
              </h3>
              <p className='mt-1 text-sm text-gray-500'>{product.color}</p>
            </div>
            <p className='text-sm font-medium text-gray-900'>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export function ProductList({ products }) {
  return (
    <div className=' mt-6 '>
      <div className='grid grid-cols-6 text-sm lg:text-lg font-bold tracking-wide py-4 px-2 border-b text-center lg:text-start mb-4'>
        <div className='col-span-1 text-center'>S. No.</div>
        <div className='col-span-1'>Item</div>
        <div className='col-span-1'>Name</div>
        <div className='col-span-1'>Color</div>
        <div className='col-span-1'>Price</div>
        <div className='col-span-1'>Category</div>
      </div>
      {products.map((product, i) => (
        <a
          href={product.href}
          key={i}
          className='group hover:bg-neutral-300  h-20 grid grid-cols-6 relative p-2 rounded-md text-center lg:text-start items-center'>
          <p className='col-span-1 text-center'>{i + 1}</p>
          <div
            className={`h-16 aspect-square col-span-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 `}>
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className='h-full w-full object-cover object-center'
            />
          </div>
          <div className=' col-span-2'>
            <div className=' grid grid-cols-4'>
              <h3 className='text-sm text-gray-700 col-span-2'>
                <p>
                  <span
                    aria-hidden='true'
                    className='absolute inset-0 sr-only'
                  />
                  {product.name}
                </p>
              </h3>
              <p className=' text-sm text-gray-500 col-span-2'>
                {product.color}
              </p>
            </div>
          </div>
          <p className='text-sm font-medium col-span-1 text-gray-900'>
            {product.price}
          </p>{" "}
          <p className='text-sm font-medium col-span-1 text-gray-900'>
            {product.category}
          </p>
        </a>
      ))}
    </div>
  );
}

export function Store() {

  const [view, setView] = useState("grid");

  const handleView = () => {
    if (view === "grid") {
      setView("list");
    } else {
      setView("grid");
    }
  };
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
      category: "T-Shirt",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
      category: "T-Shirt",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
      category: "T-Shirt",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
      category: "T-Shirt",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
      category: "T-Shirt",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
      category: "T-Shirt",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
      category: "T-Shirt",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
      category: "T-Shirt",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
      category: "T-Shirt",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
      category: "T-Shirt",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
      category: "T-Shirt",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
      category: "T-Shirt",
    },
  ];
  const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Best Rating", href: "#", current: false },
    { name: "Newest", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ];
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='mx-auto w-full md:w-64 lg:w-96 py-8 md:py-24 px-4  sm:px-6 lg:px-8 border-b lg:border-b-0'>
        <Category />
        <Filters />
        <Sort sortOptions={sortOptions} />
      </div>

      <div className='mx-auto w-full py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-12'>
          <h2 className='text-2xl font-bold tracking-wide'>Inventory</h2>
          <div className='h-full w-32 rounded-md bg-neutral-200'>
            <button className='h-full w-full' onClick={handleView}></button>
          </div>
        </div>
        <ProductView type={view} products={products} />
      </div>
    </div>
  );
}

function ProductView({ type, products }) {
  return (
    <div
      className={`${
        type === "grid"
          ? "mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
          : "mt-6"
      } ease-in-out duration-200`}>
      <div
        className={`${
          type === "grid"
            ? "hidden"
            : "grid grid-cols-6 text-sm lg:text-lg font-bold tracking-wide py-4 px-2 border-b text-center lg:text-start mb-4"
        }`}>
        <div className='col-span-1 text-center'>S. No.</div>
        <div className='col-span-1'>Item</div>
        <div className='col-span-1'>Name</div>
        <div className='col-span-1'>Color</div>
        <div className='col-span-1'>Price</div>
        <div className='col-span-1'>Category</div>
      </div>
      {products.map((product, i) => (
        <div
          key={i}
          className={`${
            type === "grid"
              ? "group relative"
              : "group hover:bg-neutral-300  h-20 grid grid-cols-6 relative p-2 rounded-md text-center lg:text-start items-center"
          }`}>
          <p
            className={`${
              type === "grid" ? "hidden" : "col-span-1 text-center"
            }`}>
            {i + 1}
          </p>
          <div
            className={` ${
              type === "grid"
                ? " min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"
                : "h-16 aspect-square col-span-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 "
            }`}>
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className='h-full w-full object-cover object-center lg:h-full lg:w-full'
            />
          </div>
          <div
            className={`${
              type === "grid"
                ? "mt-4 flex justify-between"
                : "col-span-4 grid grid-cols-4"
            }`}>
            <div
              className={`${
                type === "grid" ? "" : "col-span-2 grid grid-cols-2"
              }`}>
              <h3
                className={`${
                  type === "grid"
                    ? "text-sm text-gray-700"
                    : "text-sm text-gray-700 col-span-1"
                }`}>
                <a href={product.href}>
                  <span aria-hidden='true' className='absolute inset-0' />
                  {product.name}
                </a>
              </h3>
              <p
                className={`${
                  type === "grid"
                    ? "mt-1 text-sm text-gray-500"
                    : " text-sm text-gray-500 col-span-1"
                }`}>
                {product.color}
              </p>
            </div>
            <p
              className={`${
                type === "grid"
                  ? "text-sm font-medium text-gray-900"
                  : "text-sm font-medium col-span-1 text-gray-900"
              }`}>
              {product.price}
            </p>
            <p
              className={`${
                type === "grid"
                  ? "hidden"
                  : "text-sm font-medium col-span-1 text-gray-900"
              }`}>
              {product.category}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Category() {
  return (
    <>
      <h3 className='text-2xl font-bold'>Categories</h3>
      <ul className='py-6 flex flex-wrap lg:flex-none'>
        <li className='flex gap-3'>
          <input type='checkbox' name='' id='' />
          <label htmlFor=''>Men</label>
        </li>
      </ul>
    </>
  );
}

function Filters() {
  return (
    <>
      <h3 className='text-2xl font-bold'>Filters</h3>
      <ul className='py-6'>
        <li className='flex gap-3'>
          <input type='checkbox' name='' id='' />
          <label htmlFor=''>Men</label>
        </li>
      </ul>
    </>
  );
}

function Sort({ sortOptions }) {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
          Sort
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 8.25l-7.5 7.5-7.5-7.5'
            />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'>
        <Menu.Items className='absolute left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            {sortOptions.map((option) => (
              <Menu.Item key={option.name}>
                {({ active }) => (
                  <a
                    href={option.href}
                    className={classNames(
                      option.current
                        ? "font-medium text-gray-900"
                        : "text-gray-500",
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm"
                    )}>
                    {option.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
