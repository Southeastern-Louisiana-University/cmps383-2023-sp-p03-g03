import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AboutPage } from './pages/About/about';
import { HomePage } from './pages/Home/home-page';
import { LoginPage } from './pages/Login-Page/login-page';
import { NotFoundPage } from './pages/NotFound/notfound-page';
import { SignUpPage } from './pages/SignUp-Page/signUp-Page';
import { routes } from './Routes/config';



export function App() : React.ReactElement {

  return (
    <div>
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          {/* If the path does not exist */}
          <Route path="*" element={<NotFoundPage />} />
          <Route path={routes.signup} element={<SignUpPage/>}/>
          <Route path={routes.login} element={<LoginPage/>}/>
          <Route path={routes.about} element={<AboutPage/>}/>
        </Routes>
    </div>

  );

}
export default App;