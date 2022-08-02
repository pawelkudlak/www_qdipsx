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
import YouTubePS11994 from './pages/youtube/youtubePS11994';
import YouTubePS11995 from './pages/youtube/youtubePS11995';
import YouTubePS11996 from './pages/youtube/youtubePS11996';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BottomMenuComponent />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/youtube'>
          <Route index element={<YoutubePage/>} />
          <Route path=':ps1year1994' element={<YouTubePS11994/>} />
          <Route path=':ps1year1995' element={<YouTubePS11995/>} />
          <Route path=':ps1year1996' element={<YouTubePS11996/>} />
          </Route>  
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