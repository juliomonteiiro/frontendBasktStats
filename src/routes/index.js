import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';

const routes = [
  { path: '/login', component: Login, publicOnly: true },
  { path: '/register', component: Register, publicOnly: true },
  { path: '/home', component: Home, private: true },
];

export default routes;
