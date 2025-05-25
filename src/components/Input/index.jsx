import React, { useState } from 'react';

const Input = ({ value, onChange, placeholder, type = 'text', className, isPassword = false }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        value={value}
        onChange={onChange}
        type={isPassword && !showPassword ? 'password' : 'text'}
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
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-600 dark:text-gray-600"
        >
          {showPassword ? 'Ocultar' : 'Mostrar'}
        </button>
      )}
    </div>
  );
};

export default Input;
