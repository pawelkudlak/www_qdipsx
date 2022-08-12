import React from 'react'
import top10_Q1_1995 from '../../img/top10_Q1_1996.png'
import '../../style/pages/top10.css'

const Top10Q11995img = () => {
  return (
    <div className='imageContainer'>
        <img src={top10_Q1_1995} alt='topQ11996' title='Uruchom topkę w nowej karcie' id='top10miniatura' onClick={()=> {window.open('https://youtu.be/wAvOSG1U8PM', '_blank')}}></img>
      <div className='textContainer'>
        <p>Najlepsze gry na PS1 z pierwszego kwartału 1996 roku</p>
      </div>
    </div>
  )
}

export default Top10Q11995img