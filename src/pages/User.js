import React from 'react';
import ajax from 'superagent';

const baseURL = 'https://api.github.com/users/';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        };
    }

    fetchFeed(user) {
    //ajax.get(`${baseURL}/${user}/events`)
    ajax.get(`${baseURL}cperill/events`)
    .end((error, response) => {
            if (!error && response) {
                    console.dir(response.body);
                    this.setState({ [user]: response.body });
            } else {
                console.log(`Error fetching ${user}'s activity from github`, error);
            }
        }
    )};
    
    componentWillMount() {
        this.fetchFeed(`${this.props.match.params.user}`);
    };

    renderUserActivity() {
        return this.state.events.map((event, index) => {
            const repoName = event.repo.name;
            return (<p> key={index}>
                <h1>{actor}</h1>
            </p>);
        });
    }

    render() {

        return <div>
            <p>Test1</p>
            {this.state.events.map((event, index) => {
            
            const eventType = event.type;
            const repoName = event.repo.name;
            const creationDate = event.created_at;

            return (<li key={index}>
                <strong>{repoName}</strong>: {eventType} at {creationDate}.
            </li>);
        })}
        <p>Test2</p>
        </div>;
    }
}

export default User;