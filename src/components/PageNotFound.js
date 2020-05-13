import React from 'react';
import image1 from '../../assets/Black_Hole_Orange.png'
import {Row, Col, Container} from 'react-bootstrap';

const PageNotFound = () => {
    const style404 = {
        fontSize: 72,
        fontWeight: 'bold'
    }
    return(
        <Container>
        <Row>
            <Col>
                <h1> Page Not Found</h1>
                <div style={style404}> 404</div>
                <img class="img404-rr" src={image1} />
            </Col>
        </Row>
        </Container>
    )
}

export default PageNotFound;