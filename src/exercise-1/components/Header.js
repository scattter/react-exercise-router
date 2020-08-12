import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Link to='/'>Home</Link>
                <Link className='inthis' to='/products'>Products</Link>
                <Link className='inthis' to='/my-profile'>My Profile</Link>
                <Link className='inthis' to='/about-us'>About Us</Link>
            </div>
        );
    }
}
export default Header;