import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchPS4Games } from './ps4GamesSlice';
import '../../style/components/ps1GamesList.css'
import Ps1GamesAlphabetic from './ps1GamesAlphabetic.component';

const Ps4GamesList = () => {
    const { isLoading } = useSelector((state) => state.ps4Games);
    const { ps4Games } = useSelector((state) => state.ps4Games);
    const dispatch = useDispatch();
    return (
        <div>
            <button id='buttonDoPobieraniaListyGier' onClick={() => dispatch(fetchPS4Games())}>Pobierz Listę</button>
            <div id="ps1GamesList">
                {isLoading ? <h2>Pobieranie listy gier...</h2> : null}
                <div><h2>0-9:</h2> 
                {ps4Games.length > 0
                    ? ps4Games.map((ps4Game) => {
                        const { Lp, Tytuł } = ps4Game;

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
                {Ps1GamesAlphabetic("A", ps4Games)} 
                </div>
                <div><h2>B:</h2> 
                {Ps1GamesAlphabetic("B", ps4Games)}
                </div>

                <div><h2>C:</h2> 
                {Ps1GamesAlphabetic("C", ps4Games)}
                </div>

                <div><h2>D:</h2> 
                {Ps1GamesAlphabetic("D", ps4Games)}
                </div>

                <div><h2>E:</h2> 
                {Ps1GamesAlphabetic("E", ps4Games)}
                </div>

                <div><h2>F:</h2> 
                {Ps1GamesAlphabetic("F", ps4Games)}
                </div>

                <div><h2>G:</h2> 
                {Ps1GamesAlphabetic("G", ps4Games)}
                </div>

                <div><h2>H:</h2> 
                {Ps1GamesAlphabetic("H", ps4Games)}
                </div>

                <div><h2>I:</h2> 
                {Ps1GamesAlphabetic("I", ps4Games)}
                </div>

                <div><h2>J:</h2> 
                {Ps1GamesAlphabetic("J", ps4Games)}
                </div>

                <div><h2>K:</h2> 
                {Ps1GamesAlphabetic("K", ps4Games)}
                </div>

                <div><h2>L:</h2> 
                {Ps1GamesAlphabetic("L", ps4Games)}
                </div>

                <div><h2>M:</h2> 
                {Ps1GamesAlphabetic("M", ps4Games)}
                </div>

                <div><h2>N:</h2> 
                {Ps1GamesAlphabetic("N", ps4Games)}
                </div>

                <div><h2>O:</h2> 
                {Ps1GamesAlphabetic("O", ps4Games)}
                </div>

                <div><h2>Q:</h2> 
                {Ps1GamesAlphabetic("Q", ps4Games)}
                </div>

                <div><h2>P:</h2> 
                {Ps1GamesAlphabetic("P", ps4Games)}
                </div>

                <div><h2>R:</h2> 
                {Ps1GamesAlphabetic("R", ps4Games)}
                </div>

                <div><h2>S:</h2> 
                {Ps1GamesAlphabetic("S", ps4Games)}
                </div>

                <div><h2>T:</h2> 
                {Ps1GamesAlphabetic("T", ps4Games)}
                </div>

                <div><h2>U:</h2> 
                {Ps1GamesAlphabetic("U", ps4Games)}
                </div>

                <div><h2>V:</h2> 
                {Ps1GamesAlphabetic("V", ps4Games)}
                </div>

                <div><h2>W:</h2> 
                {Ps1GamesAlphabetic("W", ps4Games)}
                </div>

                <div><h2>X:</h2> 
                {Ps1GamesAlphabetic("X", ps4Games)}
                </div>

                <div><h2>Y:</h2> 
                {Ps1GamesAlphabetic("Y", ps4Games)}
                </div>

                <div><h2>Z:</h2> 
                {Ps1GamesAlphabetic("Z", ps4Games)}
                </div>

            </div>
        </div>
    )
}

export default Ps4GamesList