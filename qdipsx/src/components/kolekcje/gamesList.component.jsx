import React from 'react'
import { useSelector } from "react-redux"
import '../../style/components/GamesList.css'
import GamesAlphabetic from './GamesAlphabetic.component';

const GamesList = () => {
    const { isLoading } = useSelector((state) => state.games);
    const { games } = useSelector((state) => state.games);

    return (
        <div>
            <div id="GamesList">
                {isLoading ? <h2>Pobieranie listy gier...</h2> : null }
                <div><h2>0-9:</h2> 
                {games.length > 0
                    ? games.map((game) => {
                        const { Lp, Tytuł } = game;

                       if (Tytuł[0] === "0" || Tytuł[0] === "1" || Tytuł[0] === "2" || Tytuł[0] === "3" || Tytuł[0] === "4" || Tytuł[0] === "5" || Tytuł[0] === "6" || Tytuł[0] === "7" || Tytuł[0] === "8" || Tytuł[0] === "9") {
                        return (
                            <div key={Lp}>
                                <div>
                                    <p id='GameListParagraph'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>A:</h2> 
                {GamesAlphabetic("A", games)} 
                </div>
                <div><h2>B:</h2> 
                {GamesAlphabetic("B", games)}
                </div>

                <div><h2>C:</h2> 
                {GamesAlphabetic("C", games)}
                </div>

                <div><h2>D:</h2> 
                {GamesAlphabetic("D", games)}
                </div>

                <div><h2>E:</h2> 
                {GamesAlphabetic("E", games)}
                </div>

                <div><h2>F:</h2> 
                {GamesAlphabetic("F", games)}
                </div>

                <div><h2>G:</h2> 
                {GamesAlphabetic("G", games)}
                </div>

                <div><h2>H:</h2> 
                {GamesAlphabetic("H", games)}
                </div>

                <div><h2>I:</h2> 
                {GamesAlphabetic("I", games)}
                </div>

                <div><h2>J:</h2> 
                {GamesAlphabetic("J", games)}
                </div>

                <div><h2>K:</h2> 
                {GamesAlphabetic("K", games)}
                </div>

                <div><h2>L:</h2> 
                {GamesAlphabetic("L", games)}
                </div>

                <div><h2>M:</h2> 
                {GamesAlphabetic("M", games)}
                </div>

                <div><h2>N:</h2> 
                {GamesAlphabetic("N", games)}
                </div>

                <div><h2>O:</h2> 
                {GamesAlphabetic("O", games)}
                </div>

                <div><h2>Q:</h2> 
                {GamesAlphabetic("Q", games)}
                </div>

                <div><h2>P:</h2> 
                {GamesAlphabetic("P", games)}
                </div>

                <div><h2>R:</h2> 
                {GamesAlphabetic("R", games)}
                </div>

                <div><h2>S:</h2> 
                {GamesAlphabetic("S", games)}
                </div>

                <div><h2>T:</h2> 
                {GamesAlphabetic("T", games)}
                </div>

                <div><h2>U:</h2> 
                {GamesAlphabetic("U", games)}
                </div>

                <div><h2>V:</h2> 
                {GamesAlphabetic("V", games)}
                </div>

                <div><h2>W:</h2> 
                {GamesAlphabetic("W", games)}
                </div>

                <div><h2>X:</h2> 
                {GamesAlphabetic("X", games)}
                </div>

                <div><h2>Y:</h2> 
                {GamesAlphabetic("Y", games)}
                </div>

                <div><h2>Z:</h2> 
                {GamesAlphabetic("Z", games)}
                </div>
            </div>
        </div>
    )
}

export default GamesList