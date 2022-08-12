import React from 'react'
import ShowYTVideoInBlocks from '../../components/youtube/showYTVideosInBlocks'
import nfs1 from '../../img/nfs1.jpg'
import nfs2 from '../../img/nfs2.png'
import nfs3 from '../../img/nfs3.png'
import nfs4 from '../../img/nfs4.png'
import nfs5 from '../../img/nfs5.png'
import nfs6 from '../../img/nfs6.png'
import nfs7 from '../../img/nfs7.png'
import nfs8 from '../../img/nfs8.png'

const Zgpg = () => {
  return (
    <div className='top10Conteiner'>
        {ShowYTVideoInBlocks(nfs1, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/uLySfMXsV6U", "Road and Track Presents: The Need for Speed")}
        {ShowYTVideoInBlocks(nfs2, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/pZNgAyRVjCk", "Need for Speed 2")}
        {ShowYTVideoInBlocks(nfs3, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/LbC7A0hEbv8", "Need for Speed III Hot Pursuit")}
        {ShowYTVideoInBlocks(nfs4, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/bsVCf1_K-ds", "Need for Speed IV: High Stakes / Road Challenge")}
        {ShowYTVideoInBlocks(nfs5, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/iKi7AmfO-eY", "Need for Speed V: Porsche 2000 / Unleashed")}
        {ShowYTVideoInBlocks(nfs6, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/aJCHTD5GzU0", "Need for Speed: Hot Pursuit 2")}
        {ShowYTVideoInBlocks(nfs7, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/AzU8SqT-soo", "Need for Speed: Underground")}
        {ShowYTVideoInBlocks(nfs8, "Zostaniesz przeniesiony na stronę YouTube", "https://youtu.be/-4p-oYy2YzE", "Need for Speed: Underground 2")}
    </div>
  )
}

export default Zgpg