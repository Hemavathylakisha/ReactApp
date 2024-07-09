import React from 'react';

const Jumbutron = ({ children }) => {
  return (
    <div className='bg-gray-900 flex items-center py-10'>
       {/*<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <nav className="border-gray-200 dark:bg-gray-900">
            <ul className='max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400'>
              <li>
                <a href={`/login`} className='font-medium text-white-600 dark:text-white-500 hover:underline'>Login</a>
              </li>
              <li>
                <a href={`/register`} className='font-medium text-white-600 dark:text-white-500 hover:underline'>Register</a>
              </li>
            </ul>
          </nav>
        </div> */}
        <div className='max-w-md mx-auto w-full'>
            <h1 className='text-white text-center text-2xl font-bold mb-5'>Find Images</h1>           
            {children}          
        </div>      
    </div>
  );
};

export default Jumbutron;
