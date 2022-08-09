import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchPS3Games } from './ps3GamesSlice';
import '../../style/components/ps1GamesList.css'
import Ps1GamesAlphabetic from './ps1GamesAlphabetic.component';

const Ps3GamesList = () => {
    const { isLoading } = useSelector((state) => state.ps3Games);
    const { ps3Games } = useSelector((state) => state.ps3Games);
    const dispatch = useDispatch();
    return (
        <div>
            <button id='buttonDoPobieraniaListyGier' onClick={() => dispatch(fetchPS3Games())}>Pobierz Listę</button>
            <div id="ps1GamesList">
                {isLoading ? <h2>Pobieranie listy gier...</h2> : null}
                <div><h2>0-9:</h2> 
                {ps3Games.length > 0
                    ? ps3Games.map((ps3Game) => {
                        const { Lp, Tytuł } = ps3Game;

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
                {Ps1GamesAlphabetic("A", ps3Games)} 
                </div>
                <div><h2>B:</h2> 
                {Ps1GamesAlphabetic("B", ps3Games)}
                </div>

                <div><h2>C:</h2> 
                {Ps1GamesAlphabetic("C", ps3Games)}
                </div>

                <div><h2>D:</h2> 
                {Ps1GamesAlphabetic("D", ps3Games)}
                </div>

                <div><h2>E:</h2> 
                {Ps1GamesAlphabetic("E", ps3Games)}
                </div>

                <div><h2>F:</h2> 
                {Ps1GamesAlphabetic("F", ps3Games)}
                </div>

                <div><h2>G:</h2> 
                {Ps1GamesAlphabetic("G", ps3Games)}
                </div>

                <div><h2>H:</h2> 
                {Ps1GamesAlphabetic("H", ps3Games)}
                </div>

                <div><h2>I:</h2> 
                {Ps1GamesAlphabetic("I", ps3Games)}
                </div>

                <div><h2>J:</h2> 
                {Ps1GamesAlphabetic("J", ps3Games)}
                </div>

                <div><h2>K:</h2> 
                {Ps1GamesAlphabetic("K", ps3Games)}
                </div>

                <div><h2>L:</h2> 
                {Ps1GamesAlphabetic("L", ps3Games)}
                </div>

                <div><h2>M:</h2> 
                {Ps1GamesAlphabetic("M", ps3Games)}
                </div>

                <div><h2>N:</h2> 
                {Ps1GamesAlphabetic("N", ps3Games)}
                </div>

                <div><h2>O:</h2> 
                {Ps1GamesAlphabetic("O", ps3Games)}
                </div>

                <div><h2>Q:</h2> 
                {Ps1GamesAlphabetic("Q", ps3Games)}
                </div>

                <div><h2>P:</h2> 
                {Ps1GamesAlphabetic("P", ps3Games)}
                </div>

                <div><h2>R:</h2> 
                {Ps1GamesAlphabetic("R", ps3Games)}
                </div>

                <div><h2>S:</h2> 
                {Ps1GamesAlphabetic("S", ps3Games)}
                </div>

                <div><h2>T:</h2> 
                {Ps1GamesAlphabetic("T", ps3Games)}
                </div>

                <div><h2>U:</h2> 
                {Ps1GamesAlphabetic("U", ps3Games)}
                </div>

                <div><h2>V:</h2> 
                {Ps1GamesAlphabetic("V", ps3Games)}
                </div>

                <div><h2>W:</h2> 
                {Ps1GamesAlphabetic("W", ps3Games)}
                </div>

                <div><h2>X:</h2> 
                {Ps1GamesAlphabetic("X", ps3Games)}
                </div>

                <div><h2>Y:</h2> 
                {Ps1GamesAlphabetic("Y", ps3Games)}
                </div>

                <div><h2>Z:</h2> 
                {Ps1GamesAlphabetic("Z", ps3Games)}
                </div>

            </div>
        </div>
    )
}

export default Ps3GamesList