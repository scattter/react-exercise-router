import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import Header from './Header';

class Product extends Component {

    render() {
        return (
            < div className='products' >
                <Header></Header>
                <p>All Products:</p>
                <Link className='link' to='/product/1'>Bicycle</Link>
                <Link className='link' to='/product/2'>TV</Link>
                <Link className='link' to='/product/3'>Pencil</Link>
            </div >
        )
    }
}
export default Product;