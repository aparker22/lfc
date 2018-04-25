import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {loggedInUser: state.loggedInUser}
}

let mapDispatchToProps = (dispatch) => {
    return {dispatch: dispatch}
}

let FindLoggedInUser = (user) => {
    console.log(user.user)
    if (user.user === undefined) {
        return <Link to="/Login">Login</Link>
    } else {
        return <p>Hi, {user.user}</p>
    }
}


class HeaderDumb extends Component {

    render() {

        return <div className="header">
        <div></div>
        <ul>
            <li><Link to="/Profile">Profile</Link></li>
            <li><Link to="/Cart"><i className="fas fa-shopping-cart"></i>Cart</Link></li>
            <li><FindLoggedInUser user={this.props.loggedInUser.username}/></li>
        </ul>
        </div>
    }
}

let Header = connect(mapStateToProps, mapDispatchToProps)(HeaderDumb);
export default Header;