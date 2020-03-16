import React from 'react';
import { Image } from 'react-bootstrap';
import  image1 from '../../../assets/Retro_Pluralsight_White.png'; 

const Header = () => {
    return(
        <header className='header'>
        <a href={`${process.env.PUBLIC_URL}`}>
        <Image  src={image1} className='header__logo'/>
         </a>
            <div className='header__title'>
                React Router 4
            </div>
        </header>
    )
}

export default Header;