import React from 'react';
import {Redirect} from "react-router-dom";
import authService from '../services/authService';

class Logout extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount = () => {  // Will
        authService.signOut(() => {});
    };

    render = () => {

        return (
            <Redirect to={'/login'}/>
        );
    }
}


export default Logout;