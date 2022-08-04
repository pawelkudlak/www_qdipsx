import React from 'react'
import YouTubePlayer from './youTubePlayer.component'

const GameInforForYouTubeV2 = (tytuł, sces, premiera, developer, wydawca, link) => {
    return (
        <div>
            <div>Tytuł: {tytuł}</div>
            <div>{sces}</div>
            <div>Data premiery: {premiera}</div>
            <div>Deweloper: {developer}</div>
            <div>Wydawca: {wydawca}</div>
            <div>
                <div>Recenzja na Youtube: </div>
                <div>{YouTubePlayer(link)}</div>
            </div>
        </div>
    )
}

export default GameInforForYouTubeV2