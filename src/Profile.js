import React, {Component} from 'react';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {loggedInUser: state.loggedInUser, jwt: state.jwt}
};  

let mapDispatchToProps = (dispatch) => {
  return {dispatch: dispatch}
};

class ProfileScreenDumb extends Component {

    render() {
        return <div className="profileScreen">
            <h1>Welcome to {this.props.jwt.user.username}'s Profile Page!!!</h1>
        </div>
    }
}

let Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileScreenDumb)
export default Profile;