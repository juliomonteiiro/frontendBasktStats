import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { registerUser } from '../../utils/auth';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      toast.error('As senhas não coincidem');
      return;
    }

    const result = await registerUser(name, username, email, password, confirmPassword);
    
    if (result.success) {
      toast.success('Registro bem-sucedido! Redirecionando...');
      setTimeout(() => navigate('/login'), 1500);
    } else {
      toast.error(result.message || 'Falha no registro. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6 text-orange-500 dark:text-orange-500">
          Criar Conta
        </h1>
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" className="mb-4" />
        <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuário" className="mb-4" />
        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="mb-4" />
        <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" type="password" isPassword={true}  className="mb-4" />
        <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirmar Senha" type="password" isPassword={true}  className="mb-6" />
        <Button onClick={handleRegister}>Registrar</Button>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Já tem uma conta?{' '}
          <Link to="/login" className="text-orange-500 hover:underline">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
