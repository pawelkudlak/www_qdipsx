import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../style/components/footerMenu.css"

const FooterMenuComponent = () => {
    return (
        <div className='footerMenu'>
            <nav>
                <NavLink id={'kontaktButton'} to={"/kontakt"}>Kontakt</NavLink>
                <NavLink id={'socialMediaButton'} to={"/socialmedia"}>Social Media</NavLink>
            </nav>
        </div>
    )
}

export default FooterMenuComponent