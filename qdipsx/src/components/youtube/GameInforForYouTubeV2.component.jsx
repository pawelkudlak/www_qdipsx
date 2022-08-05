import React from 'react'
import YouTubePlayer from './youTubePlayer.component'
import "../../style/components/gameInfoForYouTubeV2.css"

const GameInforForYouTubeV2 = (tytuł, sces, premiera, developer, wydawca, link) => {
    return (
        <div className='gameInfoBlock'>
            <div className='gameInfoDescription'>
                <div id='gameTitle'>Tytuł: {tytuł}</div>
                <div>{sces}</div>
                <div>Data premiery: {premiera}</div>
                <div>Deweloper: {developer}</div>
                <div>Wydawca: {wydawca}</div>
            </div>
            <div id='youTubeMiniature'>
                <div>{YouTubePlayer(link)}</div>
            </div>
        </div>
    )
}

export default GameInforForYouTubeV2