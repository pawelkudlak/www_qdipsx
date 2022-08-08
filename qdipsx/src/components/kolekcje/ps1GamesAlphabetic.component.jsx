import React from 'react'

const Ps1GamesAlphabetic = (litera, array) => {

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
                        <div id='letter'>
                            <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Ps1GamesAlphabetic