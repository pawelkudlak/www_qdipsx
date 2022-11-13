import React from 'react'
import '../../style/components/GamesList.css'

const WiiPage = () => {
  return (
    <div id="NoneAPIGamesListLess">
      <ol>
        <h2 className='collectionGamesLatters'>L:</h2>
        <li><p id='GameListParagraph'>Legend of Spyro: Dawn of the Dragon</p></li>
        <li><p id='GameListParagraph'>Legend of Zelda: Twilight Princess</p></li>

        <h2 className='collectionGamesLatters'>M:</h2>
        <li><p id='GameListParagraph'>Mad World</p></li>

        <h2 className='collectionGamesLatters'>N:</h2>
        <li><p id='GameListParagraph'>Need for Speed: Most Wanted</p></li>
        <li><p id='GameListParagraph'>Need for Speed: Pro Street</p></li>

        <h2 className='collectionGamesLatters'>R:</h2>
        <li><p id='GameListParagraph'>Resident Evil: The Umbrella Chronicles</p></li>

        <h2 className='collectionGamesLatters'>T:</h2>
        <li><p id='GameListParagraph'>Tomb Raider: Anniversary</p></li>
      </ol>
    </div>
  )
}

export default WiiPage