import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import PhotographyPage from './photography_page/PhotographyPage';
import * as serviceWorker from './serviceWorker';

let routing = (
  <Router>
    <Route exact path="/" component={App}/>
    <Route exact path="/photography" component={PhotographyPage}/>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
