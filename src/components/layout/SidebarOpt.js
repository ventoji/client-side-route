import React from 'react';
import {NavLink} from 'react-router-dom';

const SidebarOpt = () => {
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
            <li key={index} className={'side-nav__item'}>
                <NavLink className={'side-nav__link'} activeClassName={'activeNavLink'}
                        to={link.url}>
                        {link.name}
                </NavLink>
            </li>
        )
    })
    return(
        <nav className={'sidebar'}>
            <ul className='side-nav'>
                <li className='side-nav__item'>
                <NavLink className={'side-nav__link'} activeClassName={'side-nav__item--active'} to={'/'} exact> Home</NavLink>
                </li>
                {LinksComponents}
            </ul>

            <div className="legal">
            &copy; <a href="https://github.com/search?p=1&q=David+Starr&type=Repositories"> David Starr </a>
        </div>

        </nav>
            
    )
}

export default SidebarOpt;