import React from 'react';
import ReactDOM from 'react-dom';
import App from './Layouts/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Router, Route, IndexRoute, hasHistory } from 'react-router';

const app = document.getElementById('root');

ReactDOM.render(<App />, app);

registerServiceWorker();
