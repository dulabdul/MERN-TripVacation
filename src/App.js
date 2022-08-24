import React from 'react';
import 'assets/scss/style.scss';
import { Routes, Route } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import DetailsPage from 'pages/DetailPage_';
import CheckoutPage from 'pages/CheckoutPage';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/properties/:id' element={<DetailsPage />} />
        <Route exact path='/checkout' element={<CheckoutPage />} />
        {/* <Route exact path='/' element={<ToastContainer />} /> */}
        {/* <ToastContainer></ToastContainer> */}
      </Routes>
    </div>
  );
}

export default App;
