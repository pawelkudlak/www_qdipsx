import React from 'react'
import logo from './img_CrashBandicoot/logo_CrashBandicoot.png'
import "../../style/pages/crashBandicootShort.css"
import { useNavigate } from 'react-router-dom'

const CrashBandicootShort = () => {

    const navigate = useNavigate();

    return (
        <div className='shortArticle'>
            <div className='logoContainerCB'>
                <img id='logoCB' src={logo} alt={"źródło: samemu okroiłem z okładki"} title={"Tak wygląda logo gry"}></img>
            </div>
            <div>
                <div>
                    <p lang='pl' id='wstep'>Można ją z łatwością przejść w dwie godziny, ale zdobycie stu procent wymaga nie lada odwagi, wytrzymałości oraz szczęścia. Tak oto widzę pierwszą produkcję studia Naughty Dog na PlayStation.</p>
                </div>
                <div id='goToFullArticleButton' onClick={() => navigate(`/artykuly/crashbandicoot`)}>Przejdź do Artykułu</div>
            </div>
        </div>
    )
}

export default CrashBandicootShort