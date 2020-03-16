import React from 'react'
import Header from './components/layout/Header'
// import Sidebar from './components/layout/Sidebar'
import SidebarOpt from './components/layout/SidebarOpt';

import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
// BrowserRouter
import Home from './components/Home'
//import NameForm from './components/prompt/NameForm'
import NameFormHooks from './components/prompt/NameFormHooks'
import PropViewer from './components/prompt/PropViewer'
import PageNotFound from './components/PageNotFound'
import ColorSwatch from './components/color/ColorSwatch'
import LoggingHome from './components/logging/LoggingHome'
import ProtectedHome from './components/secure/ProtectedHome'
import PrivateRoute from './components/secure/PrivateRoute'
import Login from './components/secure/Login'
import Logout from './components/secure/Logout'
import SmartColorSwatch from './components/color/SmartColorSwatch'
import People from './components/people/People';
import PersonProfileContainer from './components/containers/PersonProfileContainer';

export const history = createBrowserHistory();

const App = () => {
    return(
        <Router basename={`${process.env.SUBDIRECTORY}`} history={history}>
            <div className="container-main">

                <Header />

                <div class="content">

                <SidebarOpt />

                <div className={'main'}> 
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/prompt" component={NameFormHooks} />
                    <Route path="/propview" component={PropViewer} />
                    <Route path='/logging' component={LoggingHome}/>

                    <Route path='/people/:id' component={PersonProfileContainer}/>
                    <Route path='/people' component={People}/>

                    <Route path='/color/:text/:color' component={SmartColorSwatch}/>
                    <Route path='/color' render={()=>{
                        return <ColorSwatch text='foo' color='#ff0000'/>
                    }} />
                    <PrivateRoute path='/private' component={ProtectedHome} />
                    <Route path='/login' component={Login} />
                    <Route path='/logout' component={Logout} />
                    <Route  component={PageNotFound} />
                </Switch>
                </div>
                    </div>
            </div>
        </Router>
    )
}

export default App;

