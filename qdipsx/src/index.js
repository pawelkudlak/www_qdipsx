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

import GamesList from './components/kolekcje/gamesList.component';

import XBoxPage from './pages/kolekcje/xBoxPage';
import XBox360Page from './pages/kolekcje/xBox360Page';
import XBoxOnePage from './pages/kolekcje/xBoxonePage';
import GBAPage from './pages/kolekcje/gbaPage';
import DSPage from './pages/kolekcje/dsPage';
import GCPage from './pages/kolekcje/gcPage';
import WiiPage from './pages/kolekcje/wiiPage';

import OMniePage from './pages/omnie/omniePage';
import KontaktPage from './pages/kontaktPage/kontaktPage';
import SocialMediaPage from './pages/socialMediaPage/socialMediaPage';
import NinjaShadowOfDarknessPage from './pages/artykuly/NinjaShadowOfDarknessPage';
// import GamesSlice from './components/kolekcje/gamesSlice';


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
            <Route path='ninjashadowofdarkness' element={<NinjaShadowOfDarknessPage/>} />
          </Route>
          <Route path='/kolekcje'>
            <Route index element={<KolekcjePage />} />
            <Route path='ps1gameslist' element={<GamesList />}></Route>
            <Route path='ps2gameslist' element={<GamesList />}></Route>
            <Route path='ps3gameslist' element={<GamesList />}></Route>
            <Route path='ps4gameslist' element={<GamesList />}></Route>
            <Route path='pspgameslist' element={<GamesList />}></Route>

            <Route path='xboxgameslist' element={<XBoxPage />}></Route>
            <Route path='xbox360gameslist' element={<XBox360Page />}></Route>
            <Route path='xboxonegameslist' element={<XBoxOnePage />}></Route>

            <Route path='gbagameslist' element={<GBAPage />}></Route>
            <Route path='dsgameslist' element={<DSPage />}></Route>
            <Route path='gcgameslist' element={<GCPage />}></Route>
            <Route path='wiigameslist' element={<WiiPage />}></Route>

            <Route path='pcgameslist' element={<GamesList />}></Route>
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