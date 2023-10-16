import Home01 from "./Home01";
import Home02 from "./Home02";
import Login from "./Login";
import SignUp from "./SignUp";



const routes = [
  { path: '/', component: <Home01 />},
  { path: '/home-02', component: <Home02 />},
  { path: '/login', component: <Login />},
  { path: '/sign-up', component: <SignUp />},
]

export default routes;