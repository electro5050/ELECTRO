import Home01 from "./Home01";
import Home02 from "./Home02";
import Login from "./Login";
import SignUp from "./SignUp";
import GamePage from "electra/pages/game";
import CoinPage from "electra/pages/buy-coin";
import MobileLanding from "mobileview/pages/mobile/Landing";
import Aboutus from "../pages/about/About";
import Privacy from "../pages/privacy/Privacy";
import Terms from '../pages/terms/Terms';
import User from '../pages/user/User';
import Responsible from '../pages/responsible/Resposible';
const routes = [
  { path: '/', component: <Home01 />},
  { path: '/home-02', component: <Home02 />},
  { path: '/login', component: <Login />},
  { path: '/sign-up', component: <SignUp />},
  { path: '/game', component: <GamePage />},
  { path: '/coin', component: <CoinPage />},
  { path: '/mobile', component: <MobileLanding />},
  { path: '/About', component: <Aboutus />},
  { path: '/Privacy', component: <Privacy />},
  { path: '/terms', component: <Terms />},
  { path: '/user', component: <User />},
  { path: '/responsible', component: <Responsible />},
]

export default routes;