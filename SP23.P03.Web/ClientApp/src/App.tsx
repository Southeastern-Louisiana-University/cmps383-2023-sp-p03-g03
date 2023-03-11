import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { PageRoutes } from './pageroute/pageroutes';
import { HomePage } from './pages/Home/home-page';
import { NotFoundPage } from './pages/NotFound/notfound-page';

export const routes = {
  home : '/',
}

function App() {
  return (
  <div>
      <div>Hello</div>
  </div>
 
  );
}

export default App;

// <Routes>
// <Route path={PageRoutes.HOME} element={<HomePage />} />
// {/* Page Not Found */}
// <Route path="*" element={<NotFoundPage />} />
// </Routes>

//*** ^^^ the 5 lines of code should be within the first div before the div with hello,
//*** just nothing renders on the page when trying to route to another.