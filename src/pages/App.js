import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1><Link to='/'>Unofficial GitHub Browser v0.1</Link></h1>
            </div>
        );
    }
}

export default App;