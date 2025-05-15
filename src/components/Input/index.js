import React from 'react';

const Input = ({ value, onChange, placeholder, type = 'text', className }) => (
  <input
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
    className={`
      w-full
      px-4
      py-3
      text-base
      text-gray-700
      placeholder-gray-400
      bg-white
      border border-gray-300
      rounded-lg
      shadow-sm
      focus:outline-none
      focus:ring-2
      focus:ring-orange-500
      focus:border-orange-500
      transition duration-200 ease-in-out
      ${className}
    `}
  />
);

export default Input;
