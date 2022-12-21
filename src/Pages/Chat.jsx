import React from "react";
import { GithubLogo } from "./assets/images/headerImages";

const Chat = () => {
  return (
    <div className=' h-full w-full flex gap-3'>
      <div className='w-80 h-full bg-neutral-50 shadow-lg'>
        <div className='w-full  p-6 flex justify-between items-center'>
          <h2 className='text-4xl'>Chat</h2>
          <button className='w-12 h-10 text-2xl bg-emerald-600 text-neutral-50 shadow-lg'>
            +
          </button>
        </div>
        <div className='w-full divide-y'>
          <div className='w-full p-4'>
            <div className='flex gap-3 text-lg items-center mb-4 text-neutral-500'>
              <img className='h-8 w-8 rounded-full' src={GithubLogo} alt='' />
              <h3>Alan Doe</h3>
              <span className='ml-auto text-sm'>4m</span>
            </div>
            <div className='w-full flex items-center'>
              <p className='px-4 w-64 font-light whitespace-nowrap truncate text-ellipsis text-neutral-400'>
                Please check the sales report of today
              </p>
              <span className='ml-auto h-4 w-4 rounded-full bg-red-500 text-xs flex items-center justify-center text-white'>
                2
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[calc(100%-40rem)] bg-neutral-50 shadow-lg overflow-hidden'>
        <div className='w-full h-20 bg-neutral-50'></div>
        <div className='w-full h-[calc(100%-11rem)] bg-neutral-300'></div>
        <div className='w-full h-24 bg-neutral-300 p-4'>
          <div className=' relative w-full h-full shadow-lg bg-neutral-50'>
            <input
              type='text'
              className='h-full w-full shadow-lg outline-none py-2 pl-4 pr-32'
            />
            <div className='absolute px-4 py-2 h-full right-0 top-0 flex gap-2 items-center text-neutral-400 '>
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
                  d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                />
              </svg>
              <button className='px-2 h-full aspect-square rounded-full bg-indigo-500 flex items-center justify-center text-neutral-50'>
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
                    d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-80 h-full bg-neutral-50 shadow-lg '></div>
    </div>
  );
};

export default Chat;

/* 
    Stock Details
    Buyer Details {
        Purchase Item
        Purchase Qty
    }

*/
