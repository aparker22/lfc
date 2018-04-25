import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {

    render() {
        return <div className="header">
        <div></div>
        <ul>
            <li><Link to="/Profile">Profile</Link></li>
            <li><Link to="/Cart"><i className="fas fa-shopping-cart"></i>Cart</Link></li>
            <li><Link to="/Login">Login</Link></li>
        </ul>
        </div>
    }
}

export default Header;