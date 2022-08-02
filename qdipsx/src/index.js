import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BottomMenuComponent from './components/bottomMenu/bottomMenu.component';
import FooterMenuComponent from './components/footerMenu/footerMenu.component';
import YoutubePage from './pages/youtube/youtubePage';
import ArtykulyPage from './pages/artykuly/artykulyPage';
import KolekcjePage from './pages/kolekcje/kolekcjePage';
import OMniePage from './pages/omnie/omniePage';
import KontaktPage from './pages/kontaktPage/kontaktPage';
import SocialMediaPage from './pages/socialMediaPage/socialMediaPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BottomMenuComponent />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/youtube' element={<YoutubePage/>} />
        <Route path='/artykuly' element={<ArtykulyPage/>} />
        <Route path='/kolekcje' element={<KolekcjePage/>} />
        <Route path='/omnie' element={<OMniePage/>} />
        <Route path='/kontakt' element={<KontaktPage/>} />
        <Route path='/socialmedia' element={<SocialMediaPage/>} />
      </Routes>
      <FooterMenuComponent />
    </BrowserRouter>
  </React.StrictMode>
);