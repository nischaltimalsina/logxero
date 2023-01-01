import React from "react";
import { Outlet } from "react-router-dom";
import { GithubLogo } from "./assets/headerImages";

const Chat = () => {
  return (
    <div className=' h-full w-full flex '>
      <div className='w-20 md:w-80 h-full bg-neutral-50 border-r lg:p-5'>
        <div className='relative h-12 w-full  lg:flex items-center hidden'>
        <div className=' absolute left-3'>
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
          type='text'
          className='h-full w-full outline-none focus:bg-white rounded-full bg-neutral-50 pl-12 pr-6 font-light text-sm lg:text-lg'
          placeholder='Search messages... '
        />
      </div>
      
        <div className='w-full '>
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
        </div>
      </div>
      <div className=' w-[calc(100%-5rem)]  md:w-[calc(100%-20rem)]  bg-neutral-50  overflow-hidden'>
          <Outlet />
        <div className='w-full h-16 bg-neutral-50'></div>
        <div className='w-full h-[calc(100%-10rem)] bg-neutral-200'>
        </div>
        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;

const ChatInput = () => {
  return (
    <div className='w-full h-24 bg-neutral-200 p-4'>
      <div className=' relative w-full h-full bg-neutral-50 rounded-full'>
        <input
          type='text'
          className='h-full w-full rounded-full outline-none py-2 pl-4 pr-32'
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
  );
};

const ChatList = () => {
  return (
    <div className='w-full p-2 md:p-4 '>
      <div className='w-full flex gap-3 text-lg items-center text-neutral-500 '>
        <div className='relative h-16 w-16 p-1'>
          <img
            className='h-full aspect-square  rounded-full'
            src={GithubLogo}
            alt=''
          />
          <span className='absolute h-4 aspect-square rounded-full bg-green-600 bottom-0 right-0 ring-1 ring-white '></span>
        </div>
        <div className='w-[calc(100%-5rem)] hidden md:block'>
          <div className='flex justify-between'>
            <h3 className='hidden md:block'>Alan Doe</h3>
            <span className='ml-auto text-xs hidden md:block'>4m</span>
          </div>
          <div className='w-full items-center flex gap-4'>
            <p className=' font-light truncate text-sm text-neutral-400'>
              Please check the sales report of today
            </p>
            <span className='ml-auto h-4 aspect-square rounded-full bg-red-500 text-xs flex items-center justify-center text-white'>
              2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
