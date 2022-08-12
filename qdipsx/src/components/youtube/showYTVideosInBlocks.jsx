import React from 'react'
import '../../style/pages/top10.css'

const ShowYTVideoInBlocks = (miniatura, opisPoNajechaniu, link, opisPodFilmem) => {
  return (
    <div className='imageContainer'>
        <img src={miniatura} alt='topQ11996' title={opisPoNajechaniu} id='top10miniatura' onClick={()=> {window.open(`${link}`, '_blank')}}></img>
      <div className='textContainer'>
        <p>{opisPodFilmem}</p>
      </div>
    </div>
  )
}

export default ShowYTVideoInBlocks