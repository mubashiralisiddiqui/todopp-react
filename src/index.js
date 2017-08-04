import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './index.css';

import 'bootstrap/dist/css/bootstrap.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
ReactDOM.render(
   
  <MuiThemeProvider>

    <div>

        <App />
    </div>
    </MuiThemeProvider>
  
    ,

    document.getElementById('root')
);
