import React, { useState } from 'react'

const HideAndShowButton = (section) => {

    const [showMonth, setShowMonth] = useState();

    const toggleShowMonth = () => {
        setShowMonth(!showMonth);
    }

    const buttonText = showMonth ? "Ukryj miesiąc" : "Pokaż miesiąc";

    const show = () => {
        let month = document.getElementById(section);

        if (month.style.display === "inline") {
            month.style.display = "none";
            toggleShowMonth()
        } else {
            month.style.display = "inline";
            toggleShowMonth()
        }
    }

    return (
        <div>
            <div onClick={toggleShowMonth && show} id={`showHide${section}`}>{buttonText}</div>
        </div>
    )
}

export default HideAndShowButton