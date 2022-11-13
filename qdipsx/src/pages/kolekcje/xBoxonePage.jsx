import React from 'react'
import '../../style/components/GamesList.css'

const XBoxOnePage = () => {
  return (
    <div id="NoneAPIGamesListLess">
      <ol>
        <h2 className='collectionGamesLatters'>C:</h2>
        <li><p id='GameListParagraph'>Crew</p></li>

        <h2 className='collectionGamesLatters'>D:</h2>
        <li><p id='GameListParagraph'>Dark Souls: Remastered</p></li>
        <li><p id='GameListParagraph'>Dark Souls 2: Scholar of the First Sin</p></li>
        <li><p id='GameListParagraph'>Dark Souls 3</p></li>

        <h2 className='collectionGamesLatters'>G:</h2>
        <li><p id='GameListParagraph'>Gears of War: Ultimate Edition</p></li>

        <h2 className='collectionGamesLatters'>T:</h2>
        <li><p id='GameListParagraph'>Titanfall</p></li>
        </ol>
    </div>
  )
}

export default XBoxOnePage