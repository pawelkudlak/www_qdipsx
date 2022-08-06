import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchPS1Games } from './ps1GamesSlice';
import '../../style/components/ps1GamesList.css'

const Ps1GamesList = () => {
    const { isLoading } = useSelector((state) => state.ps1Games);
    const { ps1Games } = useSelector((state) => state.ps1Games);
    const dispatch = useDispatch();
    return (
        <div>
            <button id='buttonDoPobieraniaListyGier' onClick={() => dispatch(fetchPS1Games())}>Pobierz Listę</button>
            <div id="ps1GamesList">
                {isLoading ? <h2>Pobieranie listy gier...</h2> : null}
                {ps1Games.length > 0
                    ? ps1Games.map((ps1Game) => {
                        const { Lp, Tytuł } = ps1Game;
                        return (
                            <div key={Lp}>
                                <p id='ps1GamePosition'>{Lp}: {Tytuł}</p>
                            </div>
                        )
                    }) : null}
            </div>
        </div>
    )
}

export default Ps1GamesList