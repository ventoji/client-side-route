import React from 'react';
import image1 from '../../assets/Black_Hole_Orange.png'

const PageNotFound = () => {
    const style404 = {
        fontSize: 72,
        fontWeight: 'bold'
    }
    return(
            <div style={{texAlign:'center'}}>
                <h1> Page Not Found</h1>
                <div style={style404}> 404</div>
                <img src={image1} />
            </div>
    )
}

export default PageNotFound;