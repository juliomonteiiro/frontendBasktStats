import React from 'react';
import Button from '../../components/Button';

function Home({ token }) {
  return (
    <div>
      <h1>Bem-vindo à HomePage!</h1>
      {token ? (
        <div>
          <p>Você está autenticado.</p>
          <Button onClick={() => alert('Ação!')}>Ação</Button>
        </div>
      ) : (
        <p>Por favor, faça login para continuar.</p>
      )}
    </div>
  );
}

export default Home;
