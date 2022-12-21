import React, { useEffect, useState } from "react";
import axios from "axios";

const Inventory = () => {
  const [data, setData] = useState([]);
  const FetchData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  };

  useEffect(() => {
    async function getData() {
      try {
        const response = await FetchData();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <div className='relative h-full w-full bg-neutral-50 '>
      <Heading />
      <div className='p-6 h-[calc(100%-5rem)] flex gap-12 flex-wrap overflow-y-scroll'>
        {data.map((item, index) => {
          return (
            <ProductCard key={index}  name={item.title} price={item.price} imageUrl={item.image}/>
           
          );
        })}
      </div>
    </div>
  );
};

export default Inventory;

function Heading() {
  return (
    <div className='sticky top-0 w-full h-20 border-b px-6 flex items-center gap-4 bg-neutral-100'>
      <select className=' bg-inherit outline-none' id=''>
        <option value='Category'>Category</option>
      </select>
      <select className=' bg-inherit outline-none' id=''>
        <option value='Brand'>Brand</option>
      </select>
      <div className='h-full w-full max-w-96 py-4 relative flex items-center'>
        <div className='absolute left-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 text-neutral-400'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </div>
        <input
          type='search'
          className='h-full w-full bg-white rounded-full outline-neutral-400  focus:bg-neutral-50 pl-12 pr-6'
          name=''
          id=''
        />
      </div>
      <div className='flex bg-neutral-300  rounded-lg '>
        <button className='p-2 h-full bg-white rounded-l-lg'>
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
              d='M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
            />
          </svg>
        </button>
        <button className='h-full p-2'>
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
              d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'
            />
          </svg>
        </button>
      </div>
      <button>
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
            d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
          />
        </svg>
      </button>
    </div>
  );
}






function ProductCard(props) {
  const { name, imageUrl, price, description, features } = props;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full sm:w-1/2 lg:w-1/3 pr-6 mb-12">
          <img className="w-full" src={imageUrl} alt={name} />
        </div>
        <div className="w-full sm:w-1/2 lg:w-2/3 pl-6 mb-12">
          <h1 className="text-3xl font-bold leading-tight mb-4">{name}</h1>
          <div className="text-2xl font-bold mb-6">{price}</div>
          <div className="mb-6">{description}</div>
          <ul>
            {features?.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}






 {/* <div key={index} className='relative w-56 h-72  mx-auto'>
              <div className='h-56 min-w-56  shadow-lg p-6'>
                <img
                  src={item.image}
                  className='h-full w-full object-cover '
                  alt=''
                />
              </div>
              <div className='absolute top-0 h-56 w-full text-2xl opacity-0 hover:opacity-100 p-4 ease-in-out duration-200 bg-white/30 backdrop-blur overflow-hidden'>
                {item.title}
                
              </div>
              <div className='h-16 py-4'>
                <p className='truncate'>{item.title}</p>
                <p className='truncate'>$ {item.price}</p>
              </div>
            </div> */}