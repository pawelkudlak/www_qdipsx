import React from 'react'
import logo from './img_WRCArcade/logo_WRCArcade.png'
import { useNavigate } from 'react-router-dom'

const WRCArcadeShort = () => {

    const navigate = useNavigate();

    return (
        <div className='shortArticle'>
            <div className='logoContainer'>
                <img id='logoBright' src={logo} alt={"źródło: własnoręcznie obrysowywałem"} title={"Tak wygląda logo gry"}></img>
            </div>
            <div>
                <div>
                    <p lang='pl' id='wstep'>Znaczna część graczy wychowanych na PS1, w chwili gdy zapytana zostanie o ciekawą grę rajdową odpowie zapewne „Colin McRae Rally!”.</p>
                </div>
                <div id='goToFullArticleButton' onClick={() => navigate(`/artykuly/wrcarcade`)}>Przejdź do Artykułu</div>
            </div>
        </div>
    )
}

export default WRCArcadeShort