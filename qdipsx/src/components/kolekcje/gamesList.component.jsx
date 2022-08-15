import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchGames } from './gamesSlice';
import '../../style/components/ps1GamesList.css'
import Ps1GamesAlphabetic from './ps1GamesAlphabetic.component';

const gamesList = () => {
    const { isLoading } = useSelector((state) => state.games);
    const { games } = useSelector((state) => state.games);
    const dispatch = useDispatch();
    return (
        <div>
            <button id='buttonDoPobieraniaListyGier' onClick={() => dispatch(fetchGames())}>Pobierz Listę</button>
            <div id="ps1GamesList">
                {isLoading ? <h2>Pobieranie listy gier...</h2> : null}
                <div><h2>0-9:</h2> 
                {games.length > 0
                    ? games.map((game) => {
                        const { Lp, Tytuł } = game;

                       if (Tytuł[0] === "0" || Tytuł[0] === "1" || Tytuł[0] === "2" || Tytuł[0] === "3" || Tytuł[0] === "4" || Tytuł[0] === "5" || Tytuł[0] === "6" || Tytuł[0] === "7" || Tytuł[0] === "8" || Tytuł[0] === "9") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>A:</h2> 
                {Ps1GamesAlphabetic("A", games)} 
                </div>
                <div><h2>B:</h2> 
                {Ps1GamesAlphabetic("B", games)}
                </div>

                <div><h2>C:</h2> 
                {Ps1GamesAlphabetic("C", games)}
                </div>

                <div><h2>D:</h2> 
                {Ps1GamesAlphabetic("D", games)}
                </div>

                <div><h2>E:</h2> 
                {Ps1GamesAlphabetic("E", games)}
                </div>

                <div><h2>F:</h2> 
                {Ps1GamesAlphabetic("F", games)}
                </div>

                <div><h2>G:</h2> 
                {Ps1GamesAlphabetic("G", games)}
                </div>

                <div><h2>H:</h2> 
                {Ps1GamesAlphabetic("H", games)}
                </div>

                <div><h2>I:</h2> 
                {Ps1GamesAlphabetic("I", games)}
                </div>

                <div><h2>J:</h2> 
                {Ps1GamesAlphabetic("J", games)}
                </div>

                <div><h2>K:</h2> 
                {Ps1GamesAlphabetic("K", games)}
                </div>

                <div><h2>L:</h2> 
                {Ps1GamesAlphabetic("L", games)}
                </div>

                <div><h2>M:</h2> 
                {Ps1GamesAlphabetic("M", games)}
                </div>

                <div><h2>N:</h2> 
                {Ps1GamesAlphabetic("N", games)}
                </div>

                <div><h2>O:</h2> 
                {Ps1GamesAlphabetic("O", games)}
                </div>

                <div><h2>Q:</h2> 
                {Ps1GamesAlphabetic("Q", games)}
                </div>

                <div><h2>P:</h2> 
                {Ps1GamesAlphabetic("P", games)}
                </div>

                <div><h2>R:</h2> 
                {Ps1GamesAlphabetic("R", games)}
                </div>

                <div><h2>S:</h2> 
                {Ps1GamesAlphabetic("S", games)}
                </div>

                <div><h2>T:</h2> 
                {Ps1GamesAlphabetic("T", games)}
                </div>

                <div><h2>U:</h2> 
                {Ps1GamesAlphabetic("U", games)}
                </div>

                <div><h2>V:</h2> 
                {Ps1GamesAlphabetic("V", games)}
                </div>

                <div><h2>W:</h2> 
                {Ps1GamesAlphabetic("W", games)}
                </div>

                <div><h2>X:</h2> 
                {Ps1GamesAlphabetic("X", games)}
                </div>

                <div><h2>Y:</h2> 
                {Ps1GamesAlphabetic("Y", games)}
                </div>

                <div><h2>Z:</h2> 
                {Ps1GamesAlphabetic("Z", games)}
                </div>

            </div>
        </div>
    )
}

export default gamesList