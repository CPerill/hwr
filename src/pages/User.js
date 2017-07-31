import React from 'react';
import ajax from 'superagent';
import {Link, NavLink} from 'react-router-dom';

const baseURL = 'https://api.github.com/users/';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            detail: []
        };
    }

    fetchFeed(user) {
    //ajax.get(`${baseURL}/${user}/events`)
    ajax.get(`${baseURL}${user}/events`)
    .end((error, response) => {
            if (!error && response) {
                    console.dir(response.body);
                    this.setState({ detail: response.body });
            } else {
                console.log(`Error fetching ${user}'s activity from github`, error);
            }
        }
    )};
    
    componentWillMount() {
        this.fetchFeed(`${this.props.match.params.user}`);
    };

   renderUserActivity() {
        return this.state.detail.map((userInfo, index) => {
            const repo = userInfo.repo ? userInfo.repo.name : 'Unkn Repo';
            const commitMessage = userInfo.payload.commits ? userInfo.payload.commits.message : 'User left no message';
            const creationDate = userInfo.created_at;
            return (<li key={index}>
                <strong>{repo}</strong>: at {creationDate}
            </li>);
        });
    };

    render() {
        let content;
        content = this.renderUserActivity();
        return (<div>
            <p>You are here: <NavLink to="/" activeClassName="active">Home</NavLink> > {this.props.match.params.user}</p>
            {content}
        </div>)
    }
}

export default User;
