import { useState } from "react";
import ReactPlayer from "react-player";
import "../../style/components/youTubePlayer.css"

const YouTubePlayer = (link) => {

    const [showVideo, setShowVideo] = useState();

    const toggleShowVideo = () => {
        setShowVideo(!showVideo);
    }

    const windowResolutionX = window.screen.width*0.95;
    const windowResolutionY = windowResolutionX*0.5625;

    const buttonText = showVideo ? "Ukryj film" : "Wyświetl Recenzję na YouTube";

    return (
        <div>
            <div id="youTubeShowerButton" onClick={toggleShowVideo}>{buttonText}</div>
            {showVideo && <ReactPlayer url={link} width={windowResolutionX} height={windowResolutionY}/>}
        </div>
    )

}

export default YouTubePlayer;