import React from 'react'
import "../../style/components/gameInfoForYouTube.css"

export const GameInfoForYoutube = (title, sces, premier, developer, publisher, youtubelink) => {
    return (
        <div className='gameInfoBlock'>
            <div className='gameInfoDescription'>
                <div>{title}</div>
                <div>{sces}</div>
                <div>Data Premiery: {premier}</div>
                <div>Deweloper: {developer}</div>
                <div>Wydawca: {publisher}</div>
            </div>
            <div id='youTubeMiniature'>
                <iframe width="560" height="315" src={youtubelink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}
