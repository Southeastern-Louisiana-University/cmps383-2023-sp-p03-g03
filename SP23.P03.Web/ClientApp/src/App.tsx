import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AboutPage } from './pages/About/about';
import { DestinationsPage } from './pages/Destinations/destinations-page';
import { HomePage } from './pages/Home/home-page';
import { LoginPage } from './pages/Login-Page/login-page';
import { MorePage } from './pages/More/more-page';
import { NotFoundPage } from './pages/NotFound/notfound-page';
import { RewardsPage } from './pages/Rewards/rewards-page';
import { SignUpPage } from './pages/SignUp-Page/signup-page';
import { SupportPage } from './pages/Support/support-page';
import { TicketsPage } from './pages/Tickets/tickets-page';
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
          <Route path={routes.destinations} element={<DestinationsPage/>}/>
          <Route path={routes.tickets} element={<TicketsPage/>}/>
          <Route path={routes.rewards} element={<RewardsPage/>}/>
          <Route path={routes.support} element={<SupportPage/>}/>
          <Route path={routes.more} element={<MorePage/>}/>
        </Routes>
    </div>

  );

}
export default App;