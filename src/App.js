import React from 'react';
import 'assets/scss/style.scss';
import { Routes, Route } from 'react-router-dom';

import DetailsPage from 'pages/DetailPage_';
import CheckoutPage from 'pages/CheckoutPage';
import { ToastContainer } from 'react-toastify';
import NotFound from 'pages/404Page';
import LandingPage from 'pages/LandingPage';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          exact
          path='/'
          element={<LandingPage />}
        />
        <Route
          path='/properties/:id'
          element={<DetailsPage />}
        />
        <Route
          exact
          path='/checkout'
          element={<CheckoutPage />}
        />
        <Route
          exact
          path='*'
          element={<NotFound />}
        />
        {/* <Route exact path='/' element={<ToastContainer />} /> */}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
