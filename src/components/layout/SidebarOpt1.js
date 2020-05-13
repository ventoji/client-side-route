import React from 'react';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const SidebarOpt1 = () => {
    const Links = [
        {name: 'Prop Viewer', url: '/propview' },
        {name: 'Color', url: '/color'},
        {name: 'Logging', url: '/logging'},
        {name: 'Private', url: '/private'},
        {name: 'People', url: '/people'},
        {name: 'Prompt', url: '/prompt'},
        {name: 'Smart Color', url: '/color/Green/00ff00'},
        {name: '404 error', url: '/404Error'}
    ]
    let LinksComponents = Links.map((link, index) => {
        return(
            <Navbar.Text key={index}>
            <NavLink  className="link-rr"
                 to={link.url}> {link.name}
            </NavLink>
            </Navbar.Text>

        )
    })
    return(
        <Navbar  expand="lg" bg="dark" variant="dark" >
          
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Navbar.Text>
                <NavLink className="link-rr" to="/"> Home
               </NavLink>
               </Navbar.Text>
              
               {LinksComponents}
                </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
             <a href="https://github.com/search?p=1&q=David+Starr&type=Repositories" target="_blank">David Starr</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>
            
    )
}

export default SidebarOpt1;