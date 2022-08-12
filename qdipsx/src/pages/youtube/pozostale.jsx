import React from 'react'
import ShowYTVideoInBlocks from '../../components/youtube/showYTVideosInBlocks'
import forzaH3 from '../../img/forzah3.png'
import nMS from '../../img/nms.png'
import nfs2015 from '../../img/nfs2015.png'
import codbo3 from '../../img/codbo3.png'
import tew from '../../img/tew.png'

const Pozostale = () => {
    return (
        <div className='top10Conteiner'>
            {ShowYTVideoInBlocks(forzaH3, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/vrq9JDEXuAs", "Forza Horizon 3 - Recenzja [Xbox One]")}
            {ShowYTVideoInBlocks(nMS, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/g8r5Hem1faE", "No Man's Sky - Recenzja [PS4]")}
            {ShowYTVideoInBlocks(nfs2015, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/2La00Lj-KYk", "Need for Speed (2015) - Recenzja [PS4]")}
            {ShowYTVideoInBlocks(codbo3, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/93KnoJoHTp4", "Call of Duty: Black Ops III - Recenzja [PS4]")}
            {ShowYTVideoInBlocks(tew, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/93KnoJoHTp4", "The Evil Within - Recenzja [PS4]")}
        </div>
    )
}

export default Pozostale