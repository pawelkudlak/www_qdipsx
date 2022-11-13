import React from 'react'
import logo from './img_NinjaShadowOfDarkness/logo.png'
import { useNavigate } from 'react-router-dom'

const NinjaShadowOfDarknessShort = () => {

    const navigate = useNavigate();

    return (
        <div className='shortArticle'>
            <div className='logoContainer'>
                <img id='logo' src={logo} alt={"źródło: https://images.launchbox-app.com/3298b017-6ef5-4844-bcc4-a22e8db5da81.png"} title={"Tak wygląda logo gry"}></img>
            </div>
            <div>
                <div>
                    <p lang='pl' id='wstep'>Fighting Force w feudalnej Japonii z elementami platformowymi wyciągniętymi z pierwszego Crasha, gdzie prowadzisz wojownika Ninja do walki przeciwko smokom lub demonicznym plugawstwom...</p>
                </div>
                <div id='goToFullArticleButton' onClick={() => navigate(`/artykuly/ninjashadowofdarkness`)}>Przejdź do Artykułu</div>
            </div>
        </div>
    )
}

export default NinjaShadowOfDarknessShort