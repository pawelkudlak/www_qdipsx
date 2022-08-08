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
                {/* {Ps1GamesAlphabetic("A", ps1Games)} */} 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "A") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>
                <div><h2>B:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "B") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>C:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "C") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>D:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "D") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>E:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "E") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>F:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "F") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>G:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "G") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>H:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "H") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>I:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "I") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>J:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "J") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>K:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "K") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>L:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "L") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>M:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "M") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>N:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "N") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>O:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "O") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>Q:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "Q") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>P:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "P") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>R:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "R") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>S:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "S") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>T:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "T") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>U:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "U") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>V:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "V") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>W:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "W") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>X:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "X") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>Y:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "Y") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

                <div><h2>Z:</h2> 
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;

                       if (Tytuł[0] === "Z") {
                        return (
                            <div key={Lp}>
                                <div id='letter0_9'>
                                    <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                                </div>
                            </div>
                        )}
                    }) : null}
                </div>

            </div>
        </div>
    )
}

export default Ps1GamesList