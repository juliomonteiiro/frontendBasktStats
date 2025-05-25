import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Games from '../pages/Games';
import Playbook from '../pages/Playbook';
import Schedule from '../pages/Schedule';
import Stats from '../pages/Stats';
import Team from '../pages/Team';

const routes = [
  { path: '/login', component: Login, publicOnly: true },
  { path: '/register', component: Register, publicOnly: true },
  { path: '/', component: Home, private: true },
  { path: '/games', component: Games, private: true },
  { path: '/playbook', component: Playbook, private: true },
  { path: '/team', component: Team, private: true },
  { path: '/schedule', component: Schedule, private: true },
  { path: '/stats', component: Stats, private: true },
];

export default routes;
