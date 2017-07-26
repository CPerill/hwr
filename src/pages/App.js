import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<header>
		<nav>
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/detail/:repo'>React</Link></li>
			</ul>
		</nav>
	</header>
)

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Unofficial GitHub Browser v0.1</h1>
                <Header />
                
            </div>
        );
    }
}

export default App;