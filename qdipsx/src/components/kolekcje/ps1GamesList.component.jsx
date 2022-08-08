import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchPS1Games } from './ps1GamesSlice';
import '../../style/components/ps1GamesList.css'
import Ps1GamesAlphabetic from './ps1GamesAlphabetic.component';

const Ps1GamesList = () => {
    const { isLoading } = useSelector((state) => state.ps1Games);
    const { ps1Games } = useSelector((state) => state.ps1Games);
    const dispatch = useDispatch();
    return (
        <div>
            <button id='buttonDoPobieraniaListyGier' onClick={() => dispatch(fetchPS1Games())}>Pobierz Listę</button>
            <div id="ps1GamesList">
                {isLoading ? <h2>Pobieranie listy gier...</h2> : null}
                <div><h2>0-9:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

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
                {Ps1GamesAlphabetic("A", ps1Games)} 
                </div>
                <div><h2>B:</h2> 
                {Ps1GamesAlphabetic("B", ps1Games)}
                </div>

                <div><h2>C:</h2> 
                {Ps1GamesAlphabetic("C", ps1Games)}
                </div>

                <div><h2>D:</h2> 
                {Ps1GamesAlphabetic("D", ps1Games)}
                </div>

                <div><h2>E:</h2> 
                {Ps1GamesAlphabetic("E", ps1Games)}
                </div>

                <div><h2>F:</h2> 
                {Ps1GamesAlphabetic("F", ps1Games)}
                </div>

                <div><h2>G:</h2> 
                {Ps1GamesAlphabetic("G", ps1Games)}
                </div>

                <div><h2>H:</h2> 
                {Ps1GamesAlphabetic("H", ps1Games)}
                </div>

                <div><h2>I:</h2> 
                {Ps1GamesAlphabetic("I", ps1Games)}
                </div>

                <div><h2>J:</h2> 
                {Ps1GamesAlphabetic("J", ps1Games)}
                </div>

                <div><h2>K:</h2> 
                {Ps1GamesAlphabetic("K", ps1Games)}
                </div>

                <div><h2>L:</h2> 
                {Ps1GamesAlphabetic("L", ps1Games)}
                </div>

                <div><h2>M:</h2> 
                {Ps1GamesAlphabetic("M", ps1Games)}
                </div>

                <div><h2>N:</h2> 
                {Ps1GamesAlphabetic("N", ps1Games)}
                </div>

                <div><h2>O:</h2> 
                {Ps1GamesAlphabetic("O", ps1Games)}
                </div>

                <div><h2>Q:</h2> 
                {Ps1GamesAlphabetic("Q", ps1Games)}
                </div>

                <div><h2>P:</h2> 
                {Ps1GamesAlphabetic("P", ps1Games)}
                </div>

                <div><h2>R:</h2> 
                {Ps1GamesAlphabetic("R", ps1Games)}
                </div>

                <div><h2>S:</h2> 
                {Ps1GamesAlphabetic("S", ps1Games)}
                </div>

                <div><h2>T:</h2> 
                {Ps1GamesAlphabetic("T", ps1Games)}
                </div>

                <div><h2>U:</h2> 
                {Ps1GamesAlphabetic("U", ps1Games)}
                </div>

                <div><h2>V:</h2> 
                {Ps1GamesAlphabetic("V", ps1Games)}
                </div>

                <div><h2>W:</h2> 
                {Ps1GamesAlphabetic("W", ps1Games)}
                </div>

                <div><h2>X:</h2> 
                {Ps1GamesAlphabetic("X", ps1Games)}
                </div>

                <div><h2>Y:</h2> 
                {Ps1GamesAlphabetic("Y", ps1Games)}
                </div>

                <div><h2>Z:</h2> 
                {Ps1GamesAlphabetic("Z", ps1Games)}
                </div>

            </div>
        </div>
    )
}

export default Ps1GamesList