import React, { Component } from 'react';
import '../styles/App.css';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import MyProfile from './MyProfile';
import About from './About';
import Products from './Products';
import Product from './Product';

class App extends Component {



  render() {
    return (
      <div className='app'>
        < BrowserRouter >

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/goods' component={Products} />
            <Route exact path='/product/:id' component={Product} />
            <Route exact path='/my-profile' component={MyProfile} />
            <Route exact path='/about-us' component={About} />
            <Route component={Home} />
          </Switch>
        </BrowserRouter >
      </div>
    );
  }
}

export default App;
