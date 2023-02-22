import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DonationPage from '../src/pages/DonationPage/DonationPage'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import VolunteerRegistration from './pages/VolunteerRegistrationPage/VolunteerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path = "/" element = {<App />}></Route>
      <Route path='/donation' element={<DonationPage/>}/>
      <Route path='/donation/:type' element={<DonationPage/>}/>
      <Route path='/registration/:type' element={<VolunteerRegistration />}/>
    </Routes>
    <Footer />
  </BrowserRouter>
);

