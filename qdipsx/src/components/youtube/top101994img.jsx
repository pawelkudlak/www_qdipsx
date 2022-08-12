import React from 'react'
import top10_1994 from '../../img/top10_1994.png'
import '../../style/pages/top10.css'

const Top101994img = () => {
  return (
    <div className='imageContainer'>
        <img src={top10_1994} alt='top1994' title='Uruchom topkę w nowej karcie' id='top10miniatura' onClick={()=> {window.open('https://youtu.be/5JaKXBb5c6I', '_blank')}}></img>
      <div className='textContainer'>
        <p>Najlepsze gry na PS1 z 1994 roku</p>
      </div>
    </div>
  )
}

export default Top101994img