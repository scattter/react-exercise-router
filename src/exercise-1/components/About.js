import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import Header from './Header';

class About extends Component {


    render() {
        return (
            <div className='about'>
                <Header></Header>
                <p>Company:ThoughtWorks Local</p>
                <p>Location:Xi'an</p>
                <br></br>
                <p>For more information,please</p>
                <p>view our <a href='#' onClick={() => { this.props.history.push('/') }} >website.</a></p>
            </div>
        )
    }
}
export default About;
