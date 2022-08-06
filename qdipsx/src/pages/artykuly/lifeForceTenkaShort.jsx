import React from 'react'
import logo from './img_LifeForceTenka/LifeforceTenkaLogo.png'
import "../../style/pages/lifeForceShort.css"

const LifeForceTenkaShort = () => {
    return (
        <div className='shortArticle'>
            <div>
                <img className='shortImage' src={logo} alt={"źródło: samemu okroiłem z okładki"} title={"Tak wygląda logo gry"}></img>
            </div>
            <div>
                <div>
                <p lang='pl' id='wstep'>Strzelanka na PlayStation, którą pamiętałem z Dema i zawsze chciałem zagrać w jej pełną wersję. Po jej zakupie po 20-tu latach, stwierdziłem że niepotrzebnie tyle zwlekałem, tak jakby...</p>
                </div>
                <div id='goToFullArticleButton'>Przejdź do Artykułu</div>
            </div>
        </div>
    )
}

export default LifeForceTenkaShort