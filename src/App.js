import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import routes from './routes';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import ToastProvider from './components/ToastProvider';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  return (
    <>
      <Navbar />
      <ToastProvider />
      <Routes>
        {routes.map((route) => {
          const element = <route.component token={token} setToken={setToken} />;

          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.private
                  ? <PrivateRoute>{element}</PrivateRoute>
                  : route.publicOnly
                    ? <PublicRoute>{element}</PublicRoute>
                    : element
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
