import React from 'react'
import GameInforForYouTubeV2 from '../../components/youtube/GameInforForYouTubeV2.component'
import "../../style/components/youTubePS11996.css"

const YouTubePS11996 = () => {
  return (
    <div className='reviewsListFromYouTube'>
        {GameInforForYouTubeV2("NHL FaceOff", "SCES-00220", "1 stycznia 1995" , "Sony", "Sony", "https://www.youtube.com/embed/8fVjT6-8gHI")}
        {GameInforForYouTubeV2("Krazy Ivan", "SLES-00084", "1 stycznia 1995", "DEV", "PUB", "")}
        {GameInforForYouTubeV2("Alien Trilogy", "SLES-00101", "3 stycznia 1995", "DEV", "PUB", "")}
        {GameInforForYouTubeV2("Twisted Metal", "SCES-000061", "10 stycznia 1995", "DEV", "PUB", "")}
        {GameInforForYouTubeV2("NBA JAM T.E.", "SLES-00068", "10 stycznia 1995", "DEV", "PUB", "")}
        {GameInforForYouTubeV2("Command & Conquer", "SLES-00530/10530", "12 stycznia 1995", "DEV", "PUB", "")}
        {GameInforForYouTubeV2("Goal Storm", "SLES-00069", "15 stycznia 1995", "DEV", "PUB", "")}
        {GameInforForYouTubeV2("World Cub Golf", "SLES-00088", "15 stycznia 1995", "DEV", "PUB", "")}
        {GameInforForYouTubeV2("Johnny Bazookatone", "SLES-00112", "15 stycznia 1995", "DEV", "PUB", "")}
        {GameInforForYouTubeV2("Cyberia", "SLES-00233", "15 stycznia 1995", "DEV", "PUB", "")}
        {GameInforForYouTubeV2("Break Point", "SLES-00258", "18 stycznia 1995", "DEV", "PUB", "")}
        {GameInforForYouTubeV2("Assault Rigs", "SLES-00093", "1 lutego 1995", "DEV", "PUB", "")}
    </div>
  )
}

export default YouTubePS11996