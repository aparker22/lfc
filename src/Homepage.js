import React, {Component} from 'react';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {productList: state.productList, categoryList: state.categoryList}
}

let mapDispatchToProps = (dispatch) => {
    return {dispatch: dispatch}
}

class HomepageScreen extends Component {

    render() {
        return <div className="homepage">
        
        </div>
    }
}

let Homepage = connect(mapStateToProps, mapDispatchToProps)(HomepageScreen);

export default Homepage;