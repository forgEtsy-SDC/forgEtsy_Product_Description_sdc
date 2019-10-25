import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';

class RouterDOM extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Router>
                <Route
                    path='/:productId'
                    render={(routeProps) => {
                        return <App {...routeProps} />
                    }}
                />
            </Router>
        );
    }
}

export default RouterDOM;