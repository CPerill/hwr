import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, useRouterHistory, Switch, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import App from './pages/App';
import Detail from './pages/Detail';
import List from './pages/List';

const MainListings = () => (
	<main>
	<Switch>
			<Route exact path='/' component={List}/>
			<Route path='/detail/:repo' component={Detail}/>
	</Switch>
	</main>
)

//component to be rendered by router
const Main = () => (
	<div>
		<MainListings />
	</div>
)

ReactDOM.render(
	<BrowserRouter>
	<div>
		<App />
		<MainListings />
	</div>
	</BrowserRouter>,
	document.getElementById('app')
);