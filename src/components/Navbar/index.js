import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';
import { logoutUser } from '../../utils/auth';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = async () => {
    const success = await logoutUser();
    if (success) {
      navigate('/login');
      window.location.reload();
    } else {
      console.error('Falha no logout');
    }
  };

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-400">🏀 BasketStats</h1>
        <div className="space-x-6 text-sm">
          <Link to="/home" className="hover:text-orange-300 transition">Home</Link>
          <ThemeToggle />
          {!token ? (
            <>
              <Link to="/login" className="hover:text-orange-300 transition">Login</Link>
              <Link to="/register" className="hover:text-orange-300 transition">Registrar</Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-red-400 hover:text-red-200 transition"
            >
              Sair
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
