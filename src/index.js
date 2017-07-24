import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, useRouterHistory } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import Detail from './pages/Detail';

const customHistory = createBrowserHistory()

ReactDOM.render(
	<BrowserRouter>
		<Route history={ customHistory } path="/" component={ Detail } />
	</BrowserRouter>,
	document.getElementById('app')
);