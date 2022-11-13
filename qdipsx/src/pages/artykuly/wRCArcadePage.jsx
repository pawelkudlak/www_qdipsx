import React from 'react'
import ButtonGoToTop from '../../components/buttomGoToTop'
import screen1 from './img_WRCArcade/01.jpg'
import screen2 from './img_WRCArcade/02.jpg'
import screen3 from './img_WRCArcade/03.jpg'
import screen4 from './img_WRCArcade/04.jpg'
import screen5 from './img_WRCArcade/05.jpg'
import screen6 from './img_WRCArcade/06.jpg'
import logo from './img_WRCArcade/logo_WRCArcade.png'

const WRCArcadePage = () => {

    return (
        <div>
            <div className='artykul'>
                <img className='logoBright' src={logo} alt={"źródło: własnoręcznie obrysowywałem"} title={"Tak wygląda logo gry"}></img>
                <p lang='pl'>Znaczna część graczy wychowanych na PS1, w chwili gdy zapytana zostanie o ciekawą grę rajdową odpowie zapewne „Colin McRae Rally!”.</p>
                <p lang='pl'>Ci lubiący bardziej rozgrywkę arcade, wymienią V-Rally lub Rally Masters, ale mało kto zna tytuł WRC Arcade, będący spin-offem serii o tym samym, trzyliterowym tytule.</p>
                <img className='image' src={screen1} alt={"źródło: własne"} title={"Subaru Impreza na ulicach jedzie bokiem lepiej jak golf na ręcznym"}></img>
                <p lang='pl'>Arcade w nazwie oznacza, że sterowanie jest w niej zręcznościowe. Na szczęście jest ono przyjemne na tyle, że dość szybko się do niego można przyzwyczaić. Rozgrywkę umila bardzo energiczna muzyka, która nastraja do ścigania się z przeciwnikami - tak, tu przyjdzie nam się ścigać z czterema zawodnikami na danym odcinku, a nie typowo jak w rajdach, poprzez ściganie się z ich wynikiem czasowym.</p>
                <img className='image' src={screen2} alt={"źródło: własne"} title={"Ford Focus będzie potrzebował myjni po takim offroad-zie"}></img>
                <p lang='pl'> Do dyspozycji mamy siedem samochodów rajdowych, biorących udział w mistrzostwach z 2002 roku, którymi zwiedzimy odcinki aż 14-tu krajów takich jak: mroźna i biała Szwajcaria, piaszczysta Australia czy błotnista i mokra Wielka Brytania. Wszystko to ubrane jest jeszcze w cztery tryby rozgrywki: Pojedynek z innym graczem, próby czasowe, pojedyncze zawody jak i seria zawodów. Najciekawsze oczywiście dla jednego gracza są te dwa ostatnie, z tym że mają kilka znaczących różnic.</p>
                <img className='image' src={screen3} alt={"źródło: własne"} title={"Nie ma to jak jazda bokiem na śniegu piękny Focusem"}></img>
                <p lang='pl'>Seria zawodów to po kolei odblokowywane mistrzostwa 3, 6 i 8-mio rundowe, w których na pojedynczej trasie mamy wyprzedzić dwóch przeciwników. W każdej kolejnej rundzie musimy pokonać następną dwójkę, żeby na końcu wyprzedzić lidera. Ciekawe rozwiązanie, z którym się jeszcze nie spotkałem w grach tego typu. Oczywiście każda trasa jest podzielona na cztery checkpointy, które dodają kilkadziesiąt sekund do limitu czasu.</p>
                <img className='image' src={screen4} alt={"źródło: własne"} title={"Jak nie stać nas na myjnie, można wykorzystać naturalne zasoby"}></img>
                <p lang='pl'>Co innego dzieje się w serii pojedynczych zawodów, gdzie mamy matrycę aut i tras i musimy wygrać w każdej możliwej konfiguracji. Zwycięstwo daje konkretną liczbę punktów, gdzie za pierwsze miejsce dostajemy trzy punkty i po uzbieraniu konkretnej liczby, odblokowują się kolejne zawody z matrycy. W tych zawodach, w przeciwieństwie do serii, walczymy z czwórką aut, a z kolejnymi odblokowanymi zawodami, przeciwnicy są coraz trudniejsi do pokonania… chociaż niezupełnie...</p>
                <img className='image' src={screen5} alt={"źródło: Własne"} title={"Mitsubishi Lancer najlepiej sprawdza się na piaszczystych drogach"}></img>
                <p lang='pl'>Gra niestety cierpi mocno na brak wyzwania, gdyż przeszedłem mistrzostwa, nie tracąc żadnego kredytu (mamy 3 na mistrzostwa), a większość zawodów wygrywałem za pierwszym razem. Jest to rozczarowujące gdyż przez to tytuł staje się bardzo krótki, bo można go ukończyć na 100% w około 5 godzin. Smutne jest też to, że dopiero ostatnie zawody z matrycy dają jakieś wyzwanie i trzeba się w nich naprawdę namęczyć, żeby zdobyć złoto. Kolejnym utrudnieniem w grze jest fizyka, która jest tutaj bardzo zabawna. Auta potrafią podskakiwać jakby były gumowymi piłkami, a uderzenia w barierki są bardzo miękkie aczkolwiek mocno hamują pojazd.</p>
                <img className='image' src={screen6} alt={"źródło: Własne"} title={"Na końcu i tak zdobędziemy nasze upragnione złoto"}></img>
                <p lang='pl'>Graficznie omawiana produkcja przedstawia się przyzwoicie, auta są na tyle odwzorowane, że można je rozpoznać bez problemu. Świat również jest bardzo sympatyczny i pokazuje co konsola potrafi. Czasami jednak pojawią się pewne problemy, jak na przykład obiekty wiszące w powietrzu, ale jest to rzadkość i trzeba chcieć to wychwycić. To co mi się tutaj podoba, to efekt brudzenia się auta i choć nie jest on tak efektowny jak w pierwszym Colinie, to błoto, ziemia i piach powodują, że auto się brudzi przy pomocy przyciemnienia, a wjazd w kałużę sukcesywnie to wszystko zmywa.</p>
                <p lang='pl'>WRC Arcade uważam za bardzo dobrą grę rajdową z gatunku zręcznościowych, bardzo pozytywnie mnie zaskoczyła i jak zacząłem w nią grać, to ukończyłem na 100%. Robiłem to z uśmiechem na twarzy i ze szczerą radością, a wiedzcie że nie jestem zwolennikiem arcadowego rodzaju rozgrywki. Jak będziecie mieli okazję ograć ten tytuł, to dajcie mu szansę, nie pożałujecie.</p>
                <div className='tabela'>
                    <table className='tabelaInfo'>
                        <tr className='tabelaInfo'>
                            <td>Deweloper</td>
                            <td>Unique Dev. Studios</td>
                        </tr>
                        <tr className='tabelaInfo'>
                            <td>Wydawca</td>
                            <td>Sony</td>
                        </tr>
                        <tr className='tabelaInfo'>
                            <td>Data wydania</td>
                            <td>8 listopada 2002</td>
                        </tr>
                        <tr className='tabelaInfo'>
                            <td>Numer Seryjny</td>
                            <td>SCES-00891</td>
                        </tr>
                    </table>
                </div>
            </div>
            <ButtonGoToTop />
        </div>
    )
}

export default WRCArcadePage