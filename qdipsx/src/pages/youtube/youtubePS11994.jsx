import React from 'react'
import { GameInfoForYoutube } from '../../components/youtube/gameInfoForYoutube.component'

const YouTubePS11994 = () => {
  console.log('wywołanie YouTubePS11994');
  return (
    <div>
        {GameInfoForYoutube("Ridge Racer", "SLPS-00001", "3 Grudnia 1994", "Namco", "Namco", "https://www.youtube.com/embed/yEn1GEfpn58")}
    </div>
  )

}


export default YouTubePS11994