import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import "../../style/components/kolekcjeMenu.css"
import { fetchGames } from './gamesSlice';

const KolekcjeMenuComponent = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <div className='container'>
      <h1>Gry</h1>
      <hr></hr>
      <div className='sonyContainer'>
        <div className='PS1GameCollectionButton' onClick={() => {
          dispatch(fetchGames('PS1'))
          navigate(`/kolekcje/ps1gameslist`)
        }}></div>
        <div className='PS2GameCollectionButton' onClick={() => {
          dispatch(fetchGames('PS2'))
          navigate(`/kolekcje/ps2gameslist`)
        }}></div>
        <div className='PS3GameCollectionButton' onClick={() => {
          dispatch(fetchGames('PS3'))
          navigate(`/kolekcje/ps3gameslist`)
        }}></div>
        <div className='PS4GameCollectionButton' onClick={() => {
          dispatch(fetchGames('PS4'))
          navigate(`/kolekcje/ps4gameslist`)
          }}></div>
        <div className='PSPGameCollectionButton' onClick={() => {
          dispatch(fetchGames('PSP'))
          navigate(`/kolekcje/pspgameslist`)
          }}></div>
      </div>
      <hr></hr>
      <div className='sonyContainer'>
        <div className='XBCGameCollectionButton' onClick={() => navigate(`/kolekcje/xboxgameslist`)}></div>
        <div className='X360GameCollectionButton' onClick={() => navigate(`/kolekcje/xbox360gameslist`)}></div>
        <div className='XOneGameCollectionButton' onClick={() => navigate(`/kolekcje/xboxonegameslist`)}></div>
        {/* <div className='XSSGameCollectionButton'></div> */}
      </div>
      <hr></hr>
      <div className='sonyContainer'>
        <div className='GBAGameCollectionButton' onClick={() => navigate(`/kolekcje/gbagameslist`)}></div>
        {/* <div className='SNESGameCollectionButton'></div> */}
        <div className='DSGameCollectionButton' onClick={() => navigate(`/kolekcje/dsgameslist`)}></div>
        <div className='GCGameCollectionButton' onClick={() => navigate(`/kolekcje/gcgameslist`)}></div>
        <div className='WiiGameCollectionButton' onClick={() => navigate(`/kolekcje/wiigameslist`)}></div>
      </div>
      <hr></hr>
      <div className='sonyContainer'>
        <div className='PCGameCollectionButton' onClick={() => {
          dispatch(fetchGames('PC'))
          navigate(`/kolekcje/pcgameslist`)
          }}></div>
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