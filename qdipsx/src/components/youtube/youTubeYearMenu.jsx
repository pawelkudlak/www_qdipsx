import { useNavigate } from 'react-router-dom';
import "../../style/components/youTubeYearMenu.css"

const YouTubeYearMenu = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h3>Recenzje gier na PlayStation 1</h3>
            <hr></hr>
            <div className='ps1YouTubeBoxes'>
                    <div onClick={() => navigate(`/youtube/ps1year1994`)} id='ps11994YouTubeBox'></div>
                    <div onClick={() => navigate(`/youtube/ps1year1995`)} id='ps11995YouTubeBox'></div>
                    <div onClick={() => navigate(`/youtube/ps1year1996`)} id='ps11996YouTubeBox'></div>
            </div>
        </div>
    )
}

export default YouTubeYearMenu