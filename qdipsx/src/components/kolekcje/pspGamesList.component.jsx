import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchPSPGames } from './pspGamesSlice';
import '../../style/components/ps1GamesList.css'
import Ps1GamesAlphabetic from './ps1GamesAlphabetic.component';

const PspGamesList = () => {
    const { isLoading } = useSelector((state) => state.pspGames);
    const { pspGames } = useSelector((state) => state.pspGames);
    const dispatch = useDispatch();
    return (
        <div>
            <button id='buttonDoPobieraniaListyGier' onClick={() => dispatch(fetchPSPGames())}>Pobierz Listę</button>
            <div id="ps1GamesList">
                {isLoading ? <h2>Pobieranie listy gier...</h2> : null}
                <div><h2>0-9:</h2> 
                {pspGames.length > 0
                    ? pspGames.map((pspGame) => {
                        const { Lp, Tytuł } = pspGame;

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
                {Ps1GamesAlphabetic("A", pspGames)} 
                </div>
                <div><h2>B:</h2> 
                {Ps1GamesAlphabetic("B", pspGames)}
                </div>

                <div><h2>C:</h2> 
                {Ps1GamesAlphabetic("C", pspGames)}
                </div>

                <div><h2>D:</h2> 
                {Ps1GamesAlphabetic("D", pspGames)}
                </div>

                <div><h2>E:</h2> 
                {Ps1GamesAlphabetic("E", pspGames)}
                </div>

                <div><h2>F:</h2> 
                {Ps1GamesAlphabetic("F", pspGames)}
                </div>

                <div><h2>G:</h2> 
                {Ps1GamesAlphabetic("G", pspGames)}
                </div>

                <div><h2>H:</h2> 
                {Ps1GamesAlphabetic("H", pspGames)}
                </div>

                <div><h2>I:</h2> 
                {Ps1GamesAlphabetic("I", pspGames)}
                </div>

                <div><h2>J:</h2> 
                {Ps1GamesAlphabetic("J", pspGames)}
                </div>

                <div><h2>K:</h2> 
                {Ps1GamesAlphabetic("K", pspGames)}
                </div>

                <div><h2>L:</h2> 
                {Ps1GamesAlphabetic("L", pspGames)}
                </div>

                <div><h2>M:</h2> 
                {Ps1GamesAlphabetic("M", pspGames)}
                </div>

                <div><h2>N:</h2> 
                {Ps1GamesAlphabetic("N", pspGames)}
                </div>

                <div><h2>O:</h2> 
                {Ps1GamesAlphabetic("O", pspGames)}
                </div>

                <div><h2>Q:</h2> 
                {Ps1GamesAlphabetic("Q", pspGames)}
                </div>

                <div><h2>P:</h2> 
                {Ps1GamesAlphabetic("P", pspGames)}
                </div>

                <div><h2>R:</h2> 
                {Ps1GamesAlphabetic("R", pspGames)}
                </div>

                <div><h2>S:</h2> 
                {Ps1GamesAlphabetic("S", pspGames)}
                </div>

                <div><h2>T:</h2> 
                {Ps1GamesAlphabetic("T", pspGames)}
                </div>

                <div><h2>U:</h2> 
                {Ps1GamesAlphabetic("U", pspGames)}
                </div>

                <div><h2>V:</h2> 
                {Ps1GamesAlphabetic("V", pspGames)}
                </div>

                <div><h2>W:</h2> 
                {Ps1GamesAlphabetic("W", pspGames)}
                </div>

                <div><h2>X:</h2> 
                {Ps1GamesAlphabetic("X", pspGames)}
                </div>

                <div><h2>Y:</h2> 
                {Ps1GamesAlphabetic("Y", pspGames)}
                </div>

                <div><h2>Z:</h2> 
                {Ps1GamesAlphabetic("Z", pspGames)}
                </div>

            </div>
        </div>
    )
}

export default PspGamesList