import React from 'react';
import image2 from '../../assets/codelife.png';

const Home = () => {
    let imgStyle = {
        marginTop: 50,
        width: 500,
        marginLeft: 200,
        textAlign: 'center'
    }
    return(
        <img style={imgStyle} src={image2} />
    )
}

export default Home;