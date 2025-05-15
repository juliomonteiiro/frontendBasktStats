import React from 'react';

function Textarea({ name, value, onChange, placeholder, className = '' }) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={4}
      className={`w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200 resize-none ${className}`}
    />
  );
}

export default Textarea;
