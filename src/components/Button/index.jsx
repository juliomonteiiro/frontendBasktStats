import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '' }) => (
  <button
    type={type}
    onClick={onClick}
    className={`
    w-full
    py-3 px-5
    font-medium
    rounded-md
    transition duration-200 ease-in-out
    bg-orange text-white
    hover:bg-blue dark:bg-orange-500 dark:text-gray-900 dark:hover:bg-blue
    focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-1
      ${className}
    `}
  >
    {children}
  </button>
);

export default Button;
