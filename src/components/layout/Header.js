import React from 'react';
import { Image } from 'react-bootstrap';
import  image1 from '../../../assets/Retro_Pluralsight_White.png'; 
import {paths} from '../../utils/config';

const Header = () => {
    return(
        <header className='header'>
        <a href={paths().publicPath}>
        <Image  src={image1} className='header__logo'/>
         </a>
            <div className='header__title'>
                React Router 
            </div>
        </header>
    )
}

export default Header;