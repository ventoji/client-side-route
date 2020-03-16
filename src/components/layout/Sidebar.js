import React from "react";
//import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const SideBar = () => {
    return(
        <div className={'leftNavContainer'}>
        <NavLink to="/" activeClassName="is-active"  exact={true}>Home </NavLink> <br/>
        <NavLink to="/prompt" activeClassName="is-active"  >Prompt </NavLink> <br/>
        <NavLink to="/props" activeClassName="is-active"  >Props </NavLink>

        </div>
    )
}

export default SideBar;