import { useNavigate } from 'react-router-dom';
import "../../style/components/youTubeYearMenu.css"

const YouTubeYearMenu = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h3 id='hThree'>Recenzje gier na PlayStation 1</h3>
            <hr></hr>
            <div className='ps1YouTubeBoxes'>
                {/* <div onClick={() => navigate(`/youtube/ps1year1994`)} id='ps11994YouTubeBox'></div> */}
                <div onClick={() => navigate(`/youtube/ps1year1995`)} id='ps11995YouTubeBox'></div>
                <div onClick={() => navigate(`/youtube/ps1year1996`)} id='ps11996YouTubeBox'></div>
            </div>
            <h3 id='hThree'>Serie filmów</h3>
            <hr></hr>
            <div className='ps1YouTubeBoxes'>
                <div onClick={() => navigate(`/youtube/top10`)} id='top10YouTubeBox'></div>
                <div onClick={() => navigate(`/youtube/shoty`)} id='shotyYouTubeBox'></div>
                <div onClick={() => navigate(`/youtube/zgpg`)} id='zgpgYouTubeBox'></div>
                <div onClick={() => navigate(`/youtube/pozostale`)} id='pozostaleYouTubeBox'></div>
            </div>
        </div>
    )
}

export default YouTubeYearMenu