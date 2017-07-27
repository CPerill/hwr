import React from 'react';
import {Link} from 'react-router-dom';

class List extends React.Component {
	render() {
        return (
            <div>
                <p>Please choose a repository from the list below.</p>
                <ul>
                    <li><Link to="/detail/react">cperill</Link></li>
                    <li><Link to="/detail/react-native">React Native</Link></li>
                    <li><Link to="/detail/jest">Jest</Link></li>
                    <li><Link to="/user/cperill">cperill</Link></li>
                </ul>
            </div>
        );
    }
}

export default List;
