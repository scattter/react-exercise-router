import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import Header from './Header';

class Home extends Component {
    render() {
        console.log(this.props);
        return (
            <div className='home'>
                <Header></Header>
                <p>This is a beaytiful Home Page</p>
                <p>And url is '{this.props.location.pathname}'</p>

            </div>
        );
    }
}
export default Home;