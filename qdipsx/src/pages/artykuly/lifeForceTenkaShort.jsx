import React from 'react'
import logo from './img_LifeForceTenka/LifeforceTenkaLogo.png'
import { useNavigate } from 'react-router-dom'

const LifeForceTenkaShort = () => {

    const navigate = useNavigate();

    return (
        <div className='shortArticle'>
            <div className='logoContainer'>
                <img id='logo' src={logo} alt={"źródło: samemu okroiłem z okładki"} title={"Tak wygląda logo gry"}></img>
            </div>
            <div>
                <div>
                    <p lang='pl' id='wstep'>Strzelanka na PlayStation, którą pamiętałem z Dema i zawsze chciałem zagrać w jej pełną wersję. Po jej zakupie po 20-tu latach, stwierdziłem że niepotrzebnie tyle zwlekałem, tak jakby...</p>
                </div>
                <div id='goToFullArticleButton' onClick={() => navigate(`/artykuly/lifeforcetenka`)}>Przejdź do Artykułu</div>
            </div>
        </div>
    )
}

export default LifeForceTenkaShort