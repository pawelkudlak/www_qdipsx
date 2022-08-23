import './style/pages/app.css'
import banner from "./img/banner.png"

function App() {
  return (
    <div className='app'>
      <div>
        <div id='banner'>
          <img src={banner} id='mainBanner'></img>
        </div>
        <div>
          <h1>Witaj na mojej stronie!</h1>
          <h2>Jest ona poświącona mojemu zamiłowaniu do gier wideo!</h2>
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
