import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import 'normalize.css/normalize.css';
// import './styles/styles.scss'
// import './styles/index.css'
 import './styles1/main.scss'

import App from './App'

const node1 = document.getElementById('app');

if(node1){
    ReactDOM.render(<App />,node1);

}


