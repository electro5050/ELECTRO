import './App.css';
import {   Routes , Route } from 'react-router-dom';
import routes from './pages/index'
import { AuthProvider } from './contexts/AuthContext.jsx';



function App() {

    return (
        <AuthProvider>
        <Routes >
            {
            routes.map((data,index) => (
                <Route onUpdate={() => window.scrollTo(0, 0)} exact={true} path={data.path} element={data.component} key={index} />
            ))
            }
      </Routes>
      </AuthProvider>
    );
}

export default App;
