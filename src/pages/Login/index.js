import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { loginUser } from '../../utils/auth';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }

    const token = await loginUser(username, password);
    if (token) {
      localStorage.setItem('token', token);
      setToken(token);
      toast.success('Login bem-sucedido! Redirecionando...');
      setTimeout(() => navigate('/home'), 1500);
    } else {
      toast.error('Falha no login. Verifique suas credenciais.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6 text-orange-500 dark:text-orange-400">
          Bem-vindo de volta
        </h1>

        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuário"
          className="mb-4"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          type="password"
          className="mb-6"
        />

        <Button onClick={handleLogin}>Entrar</Button>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Não tem uma conta?{' '}
          <Link to="/register" className="text-orange-500 hover:underline">
            Registre-se
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
