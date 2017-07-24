import React from 'react';
import ReactDOM from 'react-dom';

import Detail from './pages/Detail';

import FunctionalTest from './pages/FunctionalTest';

ReactDOM.render(
	<div>
		<Detail message='This is a prop message!'/>
	</div>,
	document.getElementById('app')
);