import React from 'react'
import Header from './components/layout/Header'
// import Sidebar from './components/layout/Sidebar'
import SidebarOpt1 from './components/layout/SidebarOpt1';

import {BrowserRouter,Route, Switch} from 'react-router-dom';

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

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import {paths} from './utils/config';

const App = () => {

    return(
        <BrowserRouter basename={paths().folder}> 
            <div className="container-main">

                <Header />

               
                <Container className="content-rr" fluid> 

                <SidebarOpt1 />

                <Row className="main">

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
        

                </Row>
            
                </Container>
                    
            </div>
        </BrowserRouter>
    )
}

export default App;

