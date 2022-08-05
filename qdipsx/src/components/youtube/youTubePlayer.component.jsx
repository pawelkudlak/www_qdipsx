import { useState } from "react";
import ReactPlayer from "react-player";
import "../../style/components/youTubePlayer.css"

const YouTubePlayer = (link) => {

    const [showVideo, setShowVideo] = useState();

    const toggleShowVideo = () => {
        setShowVideo(!showVideo);
    }

    const buttonText = showVideo ? "Ukryj film" : "Wyświetl Recenzję na YouTube";

    return (
        <div>
            <div id="youTubeShowerButton" onClick={toggleShowVideo}>{buttonText}</div>
            {showVideo && <ReactPlayer url={link} />}
        </div>
    )

}

export default YouTubePlayer;