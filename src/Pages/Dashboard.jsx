import React from "react";
import SvgCircle from "../interface/charts/SvgCircle";
import { GithubLogo } from "./assets/images/headerImages.js";
import RevenueChart from "./utils/RevenueChart";

const Dashboard = () => {
  return (
    <>
      <div className='h-full w-full overflow-y-scroll p-3 flex flex-wrap xl:flex-nowrap gap-6'>
        <div className='h-full w-full xl:w-[calc(100%-24rem)]'>
          <div className="flex justify-between items-end pb-6">
            <div className=' text-neutral-500'>
              <h1 className='text-4xl '>Dashboard</h1>
              <p className='tracking-wider text-neutral-400 '>
                Hello User, take a glimpse at your day
              </p>
            </div>
            <div className="flex gap-6">
              <button className='flex gap-2 items-center'>
                <span>This Week</span>
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
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </button>
              <button>Change View</button>
            </div>
          </div>
          <div className='flex flex-wrap xl:flex-nowrap gap-6 '>
            <Chart />
            <div className='h-auto w-full lg:w-auto  text-neutral-500'>
              <Tasks />
              <Target />
            </div>
          </div>
        </div>
        <div className=' h-full w-full xl:w-[24rem] bg-neutral-50 rounded-2xl'></div>
      </div>
    </>
  );
};

export default Dashboard;

function Chart() {
  return (
    <div className='w-[42rem] max-w-full bg-neutral-50 p-5 rounded-2xl'>
      <div className='flex w-full h-12 items-center gap-4 mb-5'>
        <h3 className='text-lg font-light text-neutral-500 ml-4'>Revenue</h3>
        <div className='flex items-center h-full text-emerald-500 gap-2'>
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
    <div className='h-32 flex items-center gap-5 px-6'>
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
            className=' w-8 h-8  stroke-indigo-600'>
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
        <p>Tasks Complete</p>
      </div>
      <div>
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
              d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Target() {
  return (
    <div className='h-[calc(100%-8rem)] px-6 py-6 bg-neutral-50 rounded-2xl'>
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
              className='w-8 h-8  stroke-emerald-600'>
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
        <div>
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
                d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
              />
            </svg>
          </button>
        </div>
      </div>
      <div className='w-full flex justify-end px-10 py-4 translate-x-12'>
        <img
          className='h-10 w-10 rounded-full  bg-neutral-200 p-1'
          src={GithubLogo}
          alt=''
        />
        <img
          className='h-10 w-10 rounded-full -translate-x-3 bg-neutral-200 p-1'
          src={GithubLogo}
          alt=''
        />
        <img
          className='h-10 w-10 rounded-full -translate-x-6 bg-neutral-200 p-1'
          src={GithubLogo}
          alt=''
        />
        <img
          className='h-10 w-10 rounded-full -translate-x-9 bg-neutral-200 p-1'
          src={GithubLogo}
          alt=''
        />
        <img
          className='h-10 w-10 rounded-full -translate-x-12 bg-neutral-200 p-1'
          src={GithubLogo}
          alt=''
        />
      </div>
    </div>
  );
}
