import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../../style/components/kolekcjeMenu.css"

const KolekcjeMenuComponent = () => {

  const navigate = useNavigate();

  return (
    <div className='container'>
      <h1>Gry</h1>
      <hr></hr>
      <div className='sonyContainer'>
        <div className='PS1GameCollectionButton' onClick={() => navigate(`/kolekcje/ps1gameslist`)}></div>
        <div className='PS2GameCollectionButton'></div>
        <div className='PS3GameCollectionButton'></div>
        <div className='PS4GameCollectionButton'></div>
        <div className='PSPGameCollectionButton'></div>
      </div>
      <hr></hr>
      <div className='sonyContainer'>
        <div className='XBCGameCollectionButton'></div>
        <div className='X360GameCollectionButton'></div>
        <div className='XOneGameCollectionButton'></div>
        <div className='XSSGameCollectionButton'></div>
      </div>
      <hr></hr>
      <div className='sonyContainer'>
        <div className='GBAGameCollectionButton'></div>
        <div className='SNESGameCollectionButton'></div>
        <div className='DSGameCollectionButton'></div>
        <div className='GCGameCollectionButton'></div>
        <div className='WiiGameCollectionButton'></div>
      </div>
      <hr></hr>
      <div className='sonyContainer'>
        <div className='PCGameCollectionButton'></div>
      </div>
      <h1>Czasopisma Growe</h1>
      <div className='gazetyContainer'>
        <div className='CDAGazetaCollectionButton'></div>
        <div className='PSXEGazetaCollectionButton'></div>
        <div className='NeoPlusGazetaCollectionButton'></div>
      </div>
    </div>
  )
}

export default KolekcjeMenuComponent