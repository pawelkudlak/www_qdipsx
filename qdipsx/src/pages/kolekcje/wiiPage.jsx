import React from 'react'
import '../../style/components/GamesList.css'

const WiiPage = () => {
  return (
    <div id="NoneAPIGamesListLess">
      <ol>
        <h2>L:</h2>
        <li><p id='GameListParagraph'>Legend of Spyro: Dawn of the Dragon</p></li>
        <li><p id='GameListParagraph'>Legend of Zelda: Twilight Princess</p></li>

        <h2>M:</h2>
        <li><p id='GameListParagraph'>Mad World</p></li>

        <h2>N:</h2>
        <li><p id='GameListParagraph'>Need for Speed: Most Wanted</p></li>
        <li><p id='GameListParagraph'>Need for Speed: Pro Street</p></li>

        <h2>R:</h2>
        <li><p id='GameListParagraph'>Resident Evil: The Umbrella Chronicles</p></li>

        <h2>T:</h2>
        <li><p id='GameListParagraph'>Tomb Raider: Anniversary</p></li>
      </ol>
    </div>
  )
}

export default WiiPage