import React from 'react'
import Top101994img from '../../components/youtube/top101994img'
import Top101995img from '../../components/youtube/top101995img'
import Top10Q11995img from '../../components/youtube/top101996Q1img'
import '../../style/pages/top10.css'


const Top10Page = () => {
    return (
        <div className='top10Conteiner'>
            <div className='top10'>{Top101994img()}</div>
            <div className='top10'>{Top101995img()}</div>
            <div className='top10'>{Top10Q11995img()}</div>
        </div>
    )
}

export default Top10Page