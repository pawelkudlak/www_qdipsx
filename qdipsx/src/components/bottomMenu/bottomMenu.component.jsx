import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../style/components/bottomMenu.css"

const BottomMenuComponent = () => {
  return (
    <div className='bottomMenuContainer'>
      <nav>
        <NavLink className={'bottomMenuButton'} to={"/"}>Strona Główna</NavLink>
      </nav>
      <nav>
        <NavLink className={'bottomMenuButton'} to={"/youtube"}>YouTube</NavLink>
      </nav>
      <nav>
        <NavLink className={'bottomMenuButton'} to={"/artykuly"}>Artykuły</NavLink>
      </nav>
      <nav>
        <NavLink className={'bottomMenuButton'} to={"/kolekcje"}>Kolekcje</NavLink>
      </nav>
      <nav>
        <NavLink className={'bottomMenuButton'} to={"/omnie"}>O mnie</NavLink>
      </nav>
    </div>
  )
}

export default BottomMenuComponent