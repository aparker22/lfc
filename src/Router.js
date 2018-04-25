import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Categories from './Categories';
import CategoryName from './CategoryName';
import Product from './Product';
import Cart from './Cart';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Profile from './Profile';

let Router = () => 
  <div className="App">
    <HashRouter>
        <div className="Router">
            <Sidebar />
            <div className="MiddleContent">
                <Header />
                <Route path="/" exact component={Homepage} />
                <Route path = "/categories" exact component={Categories} />
                <Route path = "/categories/:categoryname" component={CategoryName} />
                <Route path = "/product" component={Product} />
                <Route path = "/cart" component={Cart} />
                <Route path = "/login" component={Login} />
                <Route path = "/profile" component={Profile} />
                <Footer />
                </div>
        </div>
    </HashRouter>
  </div>

export default Router;