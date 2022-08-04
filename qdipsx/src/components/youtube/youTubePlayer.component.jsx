import { useState } from "react";
import ReactPlayer from "react-player";

const YouTubePlayer = (link) => {

    const [showVideo, setShowVideo] = useState();

    const toggleShowVideo = () => {
        setShowVideo(!showVideo);
    }

    const buttonText = showVideo ? "Ukryj film" : "Wyświetl film";

    return (
        <div>
            <button onClick={toggleShowVideo}>{buttonText}</button>
            {showVideo && <ReactPlayer url={link} />}
        </div>
    )

}

export default YouTubePlayer;