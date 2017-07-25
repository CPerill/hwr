import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, useRouterHistory, Switch, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import Detail from './pages/Detail';
import List from './pages/List';

const Main = () => (
	<main>
	<Switch>
			<Route exact path='/' component={List}/>
			<Route path='/react' component={Detail}/>
	</Switch>
	</main>
)

const Header = () => (
	<header>
		<nav>
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/react'>React</Link></li>
			</ul>
		</nav>
	</header>
)

//component to be rendered by router
const App = () => (
	<div>
		<Header />
		<Main />
	</div>
)

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('app')
);