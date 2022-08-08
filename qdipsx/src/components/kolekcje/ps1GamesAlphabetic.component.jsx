import React from 'react'

const Ps1GamesAlphabetic = (litera, array) => {

    console.log(typeof(litera));
    console.log(array);
    

    array.map((ps1Game) => {
        const { Lp, Tytuł } = ps1Game;

        console.log(ps1Game);
        console.log(Tytuł);
        console.log(Tytuł[0]);
        console.log(typeof(Tytuł[0]));

        if (Tytuł[0] == litera) {
            return (
                <div key={Lp}>
                    <div id='letter'>
                        <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                    </div>
                </div>
            )
        } else {
            console.log("Nie znaleziono takiej gry")
        }
    })
}

export default Ps1GamesAlphabetic