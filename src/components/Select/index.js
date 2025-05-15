import React from 'react';

function Select({ name, value, onChange, options, className = '' }) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition ${className}`}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
