import Home01 from "./Home01";
import Home02 from "./Home02";
import Login from "./Login";
import SignUp from "./SignUp";
import GamePage from "electra/pages/game";
import CoinPage from "electra/pages/buy-coin";

const routes = [
  { path: '/', component: <GamePage />},
  { path: '/home-02', component: <Home02 />},
  { path: '/login', component: <Login />},
  { path: '/sign-up', component: <SignUp />},
  { path: '/game', component: <GamePage />},
  { path: '/coin', component: <CoinPage />},
]

export default routes;