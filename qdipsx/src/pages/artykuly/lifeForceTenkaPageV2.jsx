import React, { useState } from 'react'
import screen1 from './img_LifeForceTenka/ss3.jpg'
import screen2 from './img_LifeForceTenka/ss6.jpg'
import screen3 from './img_LifeForceTenka/ss9.jpg'
import screen4 from './img_LifeForceTenka/ss13.jpg'
import screen5 from './img_LifeForceTenka/ss8.jpg'
import screen6 from './img_LifeForceTenka/ss4.jpg'
import logo from './img_LifeForceTenka/LifeforceTenkaLogo.png'
import "../../style/components/lifeForceTenkaPage.css"

const LifeForceTenkaPage = () => {

    const [showArticle, setShowArticle] = useState();

    const toggleShowArticle = () => {
        setShowArticle(!showArticle);
    }

    const buttonText = showArticle ? "Czytaj mniej" : "Czytaj więcej";

    const readMore = () => {
        let breakPoint = document.getElementById("breakPoint");
        let more = document.getElementById("more");

        if (breakPoint.style.display === "none") {
            breakPoint.style.display = "inline";
            more.style.display = "none";
            toggleShowArticle()
        } else {
            breakPoint.style.display = "none";
            more.style.display = "inline";
            toggleShowArticle()
        }
    }


    return (
        <div>
            <div className='artykul'>
                <img className='logo' src={logo} alt={"źródło: samemu okroiłem z okładki"} title={"Tak wygląda logo gry"}></img>
                <p lang='pl'>Strzelanka na PlayStation, którą pamiętałem z Dema i zawsze chciałem zagrać w jej pełną wersję. Po jej zakupie po 20-tu latach, stwierdziłem że niepotrzebnie tyle zwlekałem, tak jakby...</p><span id='breakPoint'></span>
                <span id='more'>
                    <img className='image' src={screen1} alt={"źródło: https://psxdatacenter.com/games/P/L/SLES-00613.html"} title={"Tak wygląda autocelowanie w grze"}></img>
                    <p lang='pl'>Fabuła w tej grze jest tylko zapychaczem, który wyraźnie pokazuje, że twórcy wstawili ją chyba trochę dla żartów. Zakończenie jest rozczarowujące, gdyż po tym co przeżywamy, chciałoby się zobaczyć coś więcej, niż marne kilka sekund.</p>
                    <img className='image' src={screen2} alt={"źródło: https://psxdatacenter.com/games/P/L/SLES-00613.html"} title={"Widzisz taką przestrzeć zazwyczaj w 10 fps-ach"}></img>
                    <p lang='pl'>Możecie się domyślać, że Tenka nie należy do łatwych gier, niestety (albo stety) jest to tytuł BARDZO wymagający. Trudność tutaj objawia się w kilku elementach: celowanie, detekcja strzałów i irytujący przeciwnicy. Gra niestety nie obsługuje <abbr title='PlayStation 1, miała możliwość podłączenia dedykowanej myszy'>myszy</abbr>, więc twórcy postanowili wprowadzić autocelowanie. Wyszło to moim zdaniem miernie, gdyż nie zawsze to działa. No i jeszcze kwestia samego strzelania, które tutaj, mam wrażenie, w większości nie działa. Raz zabicie tego samego wroga odbywa się po wystrzeleniu kilku pocisków, a innym razem potrzeba kilkudziesięciu. Strasznie to irytuje, gdyż mamy bardzo ograniczoną liczbę amunicji. To co zasługuje za uznanie, to mechanika odstrzeliwania kończyn lub głów przeciwników, ale dodając do tego autocelowanie (zawsze) w tors przeciwnika, to możecie się domyśleć, że na <abbr title='Inaczej kursory lub krzyżak'>D-Padzie</abbr> sadzenie headshotów jest problematyczne.</p>
                    <img className='image' src={screen3} alt={"źródło: https://psxdatacenter.com/games/P/L/SLES-00613.html"} title={"Jak ten skurczybyk jest tak blisko, to ty jesteś równie blisko śmierci"}></img>
                    <p lang='pl'>Kolejnym tematem są oczywiście przeciwnicy, którzy są różnorodni i nierzadko nawet przerażający. Znajdziemy tutaj małe latające drony oraz roboty, mamy humanoidalne stwory i oczywiście abominacje typu głowy na dwóch kończynach, fruwające ogromne mózgi itd. Najwięcej problemu sprawiają mali przeciwnicy gdyż są bardzo szybcy i trafienie ich graniczy z cudem. Ci więksi natomiast mają w swoim arsenale między innymi wyrzutnie rakiet - wystarczy jednego z nich zignorować, a bardzo szybko przekonamy się, że w tej grze nie ma <abbr title='Punkty zapisu lub miejsce do którego wrócimy po śmierci'>checkpointów</abbr> i będziemy zaczynać <abbr title='Poziom lub mapa na której aktualnie gramy'>level</abbr> od nowa.</p>
                    <img className='image' src={screen4} alt={"źródło: https://psxdatacenter.com/games/P/L/SLES-00613.html"} title={"Mózg rozwinął skrzydła... znaczy kończyny"}></img>
                    <p lang='pl'>Graficznie gra jest obłędna, aczkolwiek te "fajerwerki" przypłaca płynnością, która tutaj czasami spada do paru klatek na sekundę - przy większej grupce wrogów, mamy istny pokaz slajdów. Niestety twórcy poszli na łatwiznę z konstrukcją plansz, gdyż niektóre są wręcz zdublowane. Rodzaje misji również, co powoduje że zaczynamy się nudzić, kiedy po raz kolejny musimy usunąć bomby z planszy, lub szukać specjalnych kart.</p>
                    <img className='image' src={screen5} alt={"źródło: https://psxdatacenter.com/games/P/L/SLES-00613.html"} title={"Mrok i ciemne korytarze to tutaj codzienność"}></img>
                    <p lang='pl'>Gra posiada bardzo ciekawy rozwój broni, ponieważ mamy jeden karabin, który po znalezieniu odpowiedniego moda, ulepsza się i zmienia. Mamy trzy główne tryby karabinu - jednostrzałowy, podwójny i ciągły, a do tego jeszcze dochodzą inne bajery, jak laser czy wyrzutnia rakiet.</p>
                    <img className='image' src={screen6} alt={"źródło: https://psxdatacenter.com/games/P/L/SLES-00613.html"} title={"To coś mówi: Taki @#uj"}></img>
                    <p lang='pl'>Pomimo tych problemów gra mnie w pewien sposób urzekła, może to z uwagi na sentyment wyniesiony z obcowania z wersją <abbr title='Wersja próbna gry, gdzie zazwyczaj dostępny jest tylko jeden poziom'>Demo</abbr>. Przyjdzie nam tu pokonać kilkanaście poziomów, które wręcz wycisną z nas ostatnie resztki cierpliwości i przetestują naszą wytrzymałość. Ja przechodziłem jeden poziom dziennie, gdyż ginąłem na nich tak często i obficie, że nie dałem rady mentalnie. Widząc końcowe napisy, radowałem się jak dziecko, znajdujące pod choinką wymarzony prezent. Jestem z siebie dumny, że udało mi się ten tytuł ukończyć.</p>
                    <div className='tabela'>
                        <table id='tabelaInfo'>
                            <tr>
                                <td>Deweloper</td>
                                <td>Psygnosis</td>
                            </tr>
                            <tr>
                                <td>Wydawca</td>
                                <td>Psygnosis</td>
                            </tr>
                            <tr>
                                <td>Data wydania</td>
                                <td>10 lipca 1997</td>
                            </tr>
                            <tr>
                                <td>Numer Seryjny</td>
                                <td>SLES-00613</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        {/* <img></img>
                <img></img> */}
                    </div>
                </span>
                <button onClick={readMore} id='moreArticleButton'>{buttonText}</button>
            </div>
        </div>
    )
}

export default LifeForceTenkaPage