import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './components/kolekcje/store'
import App from './App';

import BottomMenuComponent from './components/bottomMenu/bottomMenu.component';
import FooterMenuComponent from './components/footerMenu/footerMenu.component';

import YoutubePage from './pages/youtube/youtubePage';

import YouTubePS11994 from './pages/youtube/youtubePS11994';
import YouTubePS11996 from './pages/youtube/youtubePS11996';
import YoutubePS11995 from './pages/youtube/youTubePS11995';

import Top10Page from './pages/youtube/top10Page';
import Shoty from './pages/youtube/shoty';
import Zgpg from './pages/youtube/zgpg';
import Pozostale from './pages/youtube/pozostale';

import ArtykulyPage from './pages/artykuly/artykulyPage';

import LifeForceTenkaPage from './pages/artykuly/lifeForceTenkaPage';
import CrashBandicootPage from './pages/artykuly/crashBandicootPage';

import KolekcjePage from './pages/kolekcje/kolekcjePage';

import Ps1GamesList from './components/kolekcje/ps1GamesList.component';
import Ps2GamesList from './components/kolekcje/ps2GamesList.component';
import Ps3GamesList from './components/kolekcje/ps3GamesList.component';
import Ps4GamesList from './components/kolekcje/ps4GamesList.component';

import OMniePage from './pages/omnie/omniePage';
import KontaktPage from './pages/kontaktPage/kontaktPage';
import SocialMediaPage from './pages/socialMediaPage/socialMediaPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BottomMenuComponent />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/youtube'>
            <Route index element={<YoutubePage />} />
            <Route path='ps1year1994' element={<YouTubePS11994 />} />
            <Route path='ps1year1995' element={<YoutubePS11995 />} />
            <Route path='ps1year1996' element={<YouTubePS11996 />} />
            <Route path='top10' element={<Top10Page />} />
            <Route path='shoty' element={<Shoty />} />
            <Route path='zgpg' element={<Zgpg />} />
            <Route path='pozostale' element={<Pozostale />} />
          </Route>
          <Route path='/artykuly'>
            <Route index element={<ArtykulyPage />} />
            <Route path='lifeforcetenka' element={<LifeForceTenkaPage/>} />
            <Route path='crashbandicoot' element={<CrashBandicootPage/>} />
          </Route>
          <Route path='/kolekcje'>
            <Route index element={<KolekcjePage />} />
            <Route path='ps1gameslist' element={<Ps1GamesList />}></Route>
            <Route path='ps2gameslist' element={<Ps2GamesList />}></Route>
            <Route path='ps3gameslist' element={<Ps3GamesList />}></Route>
            <Route path='ps4gameslist' element={<Ps4GamesList />}></Route>
          </Route>
          <Route path='/omnie' element={<OMniePage />} />
          <Route path='/kontakt' element={<KontaktPage />} />
          <Route path='/socialmedia' element={<SocialMediaPage />} />
        </Routes>
        <FooterMenuComponent />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);