import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './store/store'
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
ReactDOM.render(
    <Provider store={store}>
  <MuiThemeProvider>

    <div>

        <App />
    </div>
    </MuiThemeProvider>
    </Provider>
    ,

    document.getElementById('root')
);
