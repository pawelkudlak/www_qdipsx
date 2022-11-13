import React from 'react'
import logo from './img_Hercules/logo_Hercules.png'
import { useNavigate } from 'react-router-dom'

const HerculesShort = () => {

    const navigate = useNavigate();

    return (
        <div className='shortArticle'>
            <div className='logoContainer'>
                <img id='logoBright' src={logo} alt={"źródło: https://gamesdb.launchbox-app.com/games/images/10245"} title={"Tak wygląda logo gry"}></img>
            </div>
            <div>
                <div>
                    <p lang='pl' id='wstep'>Nie każdemu twórcy udaje się przenieść film do świata gry, do tego stopnia, że jest ona mile wspominana do dzisiaj. Jak wygląda sprawa z grą Herkules od Disneya? Postaram się podsunąć wam odpowiedź na to pytanie w tej recenzji.</p>
                </div>
                <div id='goToFullArticleButton' onClick={() => navigate(`/artykuly/hercules`)}>Przejdź do Artykułu</div>
            </div>
        </div>
    )
}

export default HerculesShort