import React from 'react'
import top10_1995 from '../../img/top10_1995.png'
import '../../style/pages/top10.css'

const Top101995img = () => {
  return (
    <div className='imageContainer'>
        <img src={top10_1995} alt='top1995' title='Uruchom topkę w nowej karcie' id='top10miniatura' onClick={()=> {window.open('https://youtu.be/rX85kND_-ns', '_blank')}}></img>
      <div className='textContainer'>
        <p>Najlepsze gry na PS1 z 1995 roku</p>
      </div>
    </div>
  )
}

export default Top101995img