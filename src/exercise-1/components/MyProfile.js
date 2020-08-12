import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import Header from './Header';

class MyProfile extends Component {
    state = {}
    render() {
        return (
            <div className='my-profile'>
                <Header></Header>
                <p>Username:XXX</p>
                <p>Gender:Female</p>
                <p>Work:IT Industry</p>
                <p>Website:'{this.props.location.pathname}'</p>
            </div>
        );
    }
}
export default MyProfile;