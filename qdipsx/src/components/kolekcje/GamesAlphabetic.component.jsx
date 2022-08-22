import React from 'react'
import '../../style/components/GamesList.css'

const GamesAlphabetic = (litera, array) => {

    const filteredPS1Games = array.filter((ps1Game) => {
        const { Lp, Tytuł } = ps1Game;

        if (Tytuł[0] == litera) {

            return true
        }

        return false

    })

    return (
        <div>
            {filteredPS1Games.map((ps1Game) => {
                const { Lp, Tytuł } = ps1Game;
                return (
                    <div key={Lp}>
                        <div>
                            <p id='GameListParagraph'>{Lp}: {Tytuł}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default GamesAlphabetic