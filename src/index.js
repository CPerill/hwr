import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, useRouterHistory, Switch, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import App from './pages/App';
import routes from './routes';

ReactDOM.render(
	<BrowserRouter>
	<div>
		<App />
		{ routes }
	</div>
	</BrowserRouter>,
	document.getElementById('app')
);