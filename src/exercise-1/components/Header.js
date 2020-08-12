import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link inthis' to='/my-profile'>My Profile</Link>
                <Link className='link inthis' to='/about-us'>About Us</Link>
            </div>
        );
    }
}
export default Header;