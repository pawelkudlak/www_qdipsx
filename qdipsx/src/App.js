import './style/pages/app.css'
import { useNavigate } from 'react-router-dom'
import banner from "./img/banner.png"
import first from "./img/first.png"
import second from "./img/second.png"
import third from "./img/third.png"

function App() {

  const navigate = useNavigate();

  return (
    <div className='app'>
      <div>
        <div id='banner'>
          <img src={banner} id='mainBanner' alt="banner strony"></img>
        </div>
        <div id='mainDiv'>
          <h1>Qdi - youtuber, streamer i... programista</h1>
          <h2>Jest to moja pierwsza strona, którą napisałem samodzielnie.</h2>
          <h3>Jako front-end pre-junior developer, postanowiłem napisać tę stronę, która przedstawia mnie, moją działalność i kolekcję gier jaką przez lata stworzyłem</h3>
          <div id='buttonsToSites'>
            <div id='firstButton' onClick={() => navigate('/youtube')}>
              <img src={first} id="firstImg" alt="banner pierwszego przycisku"></img>
              <p>Moje filmy na YouTube</p>
            </div>
            <div id='secondButton' onClick={() => navigate('/artykuly')}>
              <img src={second} id="firstImg" alt="banner drugiego przycisku"></img>
              <p>Moje artykuły i pisemne recenzje</p>
            </div>
            <div id='thirdButton' onClick={() => navigate('/kolekcje')}>
              <img src={third} id="firstImg" alt="banner trzeciego przycisku"></img>
              <p>Moja kolekcja gier i nie tylko</p>
            </div>
          </div>
        </div>
      </div>

      {/* <h1>Witaj na mojej stronie, która jest cały czas w budowie!</h1>
      <h2>Strona główna - nowości itd.</h2>
      <h2><del>YouTube - moje filmy i recenzje z YT</del></h2>
      <h2><del>Artykuły - moje pisemne recenzji itd.</del></h2>
      <h2>Kolekcje: </h2>
      <h3><del>- konsole</del></h3>
      <h3><del>- gry - z podziałem na platformy</del></h3>
      <h3>- czasopisma growe</h3>
      <h3>- książki?</h3>
      <h3>- muzyka?</h3>
      <h2><del>O mnie - jakieś tam info kim jestem itd.</del></h2>
      <h2><del>Kontakt - formularz kontaktowy</del></h2>
      <h2><del>Social Media - linki do nich lub jakieś ciekawe moduły</del></h2> */}
    </div>
  );
}

export default App;
