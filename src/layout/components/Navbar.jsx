const Navbar = ({ toggle, handleToggle }) => {
  return (
    <div className=' h-20 w-full flex items-center border-b gap-3 bg-neutral-100'>
      <div className='lg:w-96 object-cover pl-4 lg:pr-12 flex justify-between'>
        <button onClick={handleToggle}>
          <MenuIcon toggle={toggle} />
        </button>
      </div>

      <div className='relative w-full lg:w-[calc(100%-36rem)] h-full py-4 flex items-center'>
        <div className='absolute left-3'>
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
          placeholder='Search for people, products and more... '
        />
      </div>
      <div className='lg:w-48 h-full flex items-center justify-end gap-4 pr-4'>
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
              d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
            />
          </svg>
        </button>
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
              d='M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z'
            />
          </svg>
        </button>
        <button className='hidden lg:flex items-center gap-3 '>
          <div className='h-12 w-12 bg-neutral-600 rounded-full'></div>
          <div>
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
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
const MenuIcon = ({ toggle }) => {
  return (
    <>
      {!toggle ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={0.9}
          stroke='currentColor'
          className='w-10 h-10'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={0.9}
          stroke='currentColor'
          className='w-10 h-10'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      )}
    </>
  );
};
