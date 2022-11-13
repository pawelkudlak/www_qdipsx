import React from 'react'

const ButtonGoToTop = () => {

    return (

        <div>
            <button id='buttomToTop' onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
            }}>Wróć na górę</button>
        </div>

    )

}
export default ButtonGoToTop