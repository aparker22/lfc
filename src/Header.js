import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {jwt: state.jwt}
}

let mapDispatchToProps = (dispatch) => {
    return {dispatch: dispatch}
}


class HeaderDumb extends Component {

    render() {
        let FindLoggedInUser = () => {
            if (this.props.jwt === null || this.props.jwt === undefined) {
                return <Link to="/Login">Login</Link>
            } else {
                return <p>Hi, {this.props.jwt.user['username']}</p>
            }
        }

        return <div className="header">
        <div></div>
        <ul>
            <li><Link to="/Profile">Profile</Link></li>
            <li><Link to="/Cart"><i className="fas fa-shopping-cart"></i>Cart</Link></li>
            <li><FindLoggedInUser /></li>
        </ul>
        </div>
    }
}

let Header = connect(mapStateToProps, mapDispatchToProps)(HeaderDumb);
export default Header;