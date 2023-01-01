import React, { useRef } from "react";
import Calendar from "../interface/calendar/Calendar";
import SvgCircle from "../interface/charts/SvgCircle";

import RevenueChart from "./utils/RevenueChart";
import TodoList from "./utils/TodoList";

const Dashboard = () => {
  return (
    <>
      <div className=' w-full h-full overflow-hidden overflow-y-scroll relative grid grid-cols-7 gap-6 bg-neutral-50 py-6 md:pt-16 px-4  sm:px-6 lg:px-8'>
        <div className=' col-span-7 xl:col-span-5 grid grid-cols-6 gap-6 '>
          <div className='h-96 border rounded-md w-full col-span-6 lg:col-span-4 '>
            <Chart />
          </div>
          <div className='lg:h-96 w-full  xl:w-auto  col-span-6 lg:col-span-2 text-neutral-500 border rounded-md grid grid-cols-3'>
            <div className='col-span-3 md:col-span-1 lg:col-span-3'>
              <Tasks />
            </div>
            <div className='col-span-3  md:col-span-1 lg:col-span-3'>
              <Target />
            </div>
            <div className='col-span-3 md:col-span-1  lg:col-span-3'>
              <Revenue />
            </div>
          </div>
          <div className='lg: w-full  xl:w-auto  col-span-6 lg:col-span-3 text-neutral-500 border rounded-md '>
            <Transactions />
          </div>
          <div className='h- border rounded-md w-full col-span-6 lg:col-span-3 '><TodoList/></div>
        </div>
        <div className=' w-full border py-6 rounded-md col-span-7 xl:col-span-2'>
          <Calendar />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

function Chart() {
  return (
    <div className='w-full lg:max-w-40  p-6'>
      <div className='flex w-full h-12 items-center gap-4 mb-5'>
        <h3 className='text-lg font-light text-neutral-500 ml-4'>Revenue</h3>
        <div className='flex items-center h-full text-emerald-500 gap-1 md:gap-2 text-xs md:text-base'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4 md:w-6 md:h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941'
            />
          </svg>
          <p>+ 11%</p>
        </div>
        <div className='ml-auto flex gap-4 text-sm text-neutral-500'>
          <button className='flex items-center gap-2 text-neutral-500'>
            <svg width='10' height='10'>
              <circle cx='5' cy='5' r='4' fill='currentColor' />
            </svg>
            Previous
          </button>
          <button className='flex items-center gap-2 text-neutral-400'>
            <svg width='10' height='10'>
              <circle cx='5' cy='5' r='4' fill='currentColor' />
            </svg>
            Current
          </button>
        </div>
      </div>
      <div className='h-64'>
        <RevenueChart />
      </div>
    </div>
  );
}

function Tasks() {
  return (
    <div className='h-full group relative hover:bg-neutral-100 w-full flex items-center justify-between gap-5 px-6 py-4'>
      <div className='flex items-center  gap-5 '>
        <div className='relative h-16'>
          <SvgCircle
            ri={40}
            ro={45}
            value={40}
            className=' stroke-indigo-600 fill-indigo-200/50 '
          />
          <div className='absolute top-0 h-full w-full flex items-center justify-center  '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1}
              stroke='currentColor'
              className=' w-7 h-7  stroke-indigo-600'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
              />
            </svg>
          </div>
        </div>
        <div>
          <h3 className='text-2xl text-indigo-600'>40%</h3>
          <p className='text-sm lg:text-base'>Tasks Complete</p>
        </div>
      </div>
      <div>
        <a href='#' className='absolute inset-0'></a>
        <button className='h-7 w-7 rounded-full bg-neutral-200 flex justify-center items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Target() {
  return (
    <div className='h-full group relative hover:bg-neutral-100 w-full flex items-center justify-between gap-5 px-6 py-4'>
      <div className=' flex items-center gap-5'>
        <div className='relative h-16'>
          <SvgCircle
            ri={40}
            ro={45}
            value={40}
            className=' stroke-emerald-600 fill-emerald-200/50 '
          />
          <div className='absolute top-0 h-full w-full flex items-center justify-center  '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1}
              stroke='currentColor'
              className='w-7 h-7  stroke-emerald-600'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605'
              />
            </svg>
          </div>
        </div>
        <div>
          <h3 className='text-2xl text-emerald-600'>67%</h3>
          <p>Target Reached</p>
        </div>
      </div>
      <div className=''>
        <a href='#' className='absolute inset-0'></a>
        <button className='h-7 w-7 rounded-full bg-neutral-200 flex justify-center items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Revenue() {
  return (
    <>
      <div className='h-full flex items-center justify-between pl-10 pr-6 py-4'>
        <div className='h-full '>
          <h3 className='text-xl text-emerald-600'>Total Sales</h3>
          <p className='text-lg text-neutral-500'>$3012</p>{" "}
          <span className='flex gap-4 items-center text-sm text-neutral-400'>
            <svg
              viewBox='0 0 24 24'
              fill='currentColor'
              className='h-4 w-4 rotate-180 fill-emerald-600'>
              <path d='M11.178 19.569a.998.998 0 001.644 0l9-13A.999.999 0 0021 5H3a1.002 1.002 0 00-.822 1.569l9 13z' />
            </svg>
            10% since last week
          </span>
        </div>
        <svg
          viewBox='0 0 576 512'
          fill='currentColor'
          className='h-12 w-12 fill-emerald-700 -rotate-12'>
          <path d='M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm208 128h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 112c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zm-91.9-144v6.3c6.6 1.2 16.6 3.2 21 4.4 10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-3.8-1-17.4-3.7-21.7-4.3-12.2-1.9-22.2-.3-28.6 2.6-6.3 2.9-7.9 6.2-8.2 8.1-.6 3.4 0 4.7.1 5 .3.5 1 1.8 3.6 3.5 6.1 4.2 15.7 7.2 29.9 11.4l.8.2c12.1 3.7 28.3 8.5 40.4 17.4 6.7 4.9 13 11.4 16.9 20.5 4 9.1 4.8 19.1 3 29.4-3.3 19-15.9 32-31.6 38.7-4.9 2.1-10 3.6-15.4 4.6v5.5c0 11.1-9 20.1-20.1 20.1s-20.1-9-20.1-20.1v-6.4c-9.5-2.2-21.9-6.4-29.8-9.1-1.7-.6-3.2-1.1-4.4-1.5-10.5-3.5-16.1-14.8-12.7-25.3s14.8-16.1 25.3-12.7c2 .7 4.1 1.4 6.4 2.1 9.5 3.2 20.2 6.9 26.2 7.9 12.8 2 22.7.7 28.8-1.9 5.5-2.3 7.4-5.3 8-8.8.7-4 .1-5.9-.2-6.7-.4-.9-1.3-2.2-3.7-4-5.9-4.3-15.3-7.5-29.3-11.7l-2.2-.7c-11.7-3.5-27-8.1-38.6-16-6.6-4.5-13.2-10.7-17.3-19.5-4.2-9-5.2-18.8-3.4-29 3.2-18.3 16.2-30.9 31.1-37.7 5-2.3 10.3-4 15.9-5.1v-6c0-11.1 9-20.1 20.1-20.1s20.1 9 20.1 20.1z' />
        </svg>
      </div>
    </>
  );
}

function Transactions() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <>
      <div className='h-full w-full px-4 py-4  pt-6  text-neutral-400 overflow-hidden'>
        <p className=' pb-4 text-xl'>Recent Transactions</p>
        <div className='rounded-md overflow-hidden'>
          <div className=''>
            <div className='text-sm text-start bg-neutral-100 rounded-t-md text-neutral-500 border-b'>
              <div className='grid grid-cols-2  p-4'>
                <p className='col-span-1'>Date</p>
                <p className='col-span-1 text-center'>Name</p>
              </div>
            </div>
            <div className='h-80  overflow-scroll scroll-smooth  divide-y'>
              {data.map((datum, i) => (
                <div
                  key={i}
                  className='group hover:bg-neutral-200 grid grid-cols-2 text-sm text-start  p-4 text-neutral-400'>
                  <p className='col-span-1'>12.12.2022</p>
                  <p className='col-span-1 truncate text-end'>
                    Nirjara MakeUp Studio
                  </p>
                  <div className='col-span-2 hidden group-focus:block group-hover:block pt-2 snap-proximity relative'>
                    <div className='flex justify-between'>
                      {" "}
                      <p>Order Id: </p> <p>7685868798hf</p>
                    </div>
                    <div className='flex justify-between'>
                      <p>Amount: </p> <p>$316</p>
                    </div>
                    <div className='flex justify-between'>
                      {" "}
                      <p>OrderId:</p> <p> 7685868798hf</p>
                    </div>
                    <a href='#' className='absolute inset-0'></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Todo() {
  return (
    <>
      <div>
        <h3>Todo</h3>
      </div>
    </>
  );
}
