import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchCategoryList, fetchProductList, displayUsersCart } from './helper';
import {updateCategories, updateProducts, addItemToCart} from './actions';

let mapStateToProps = (state) => {
    return {productList: state.productList, categoryList: state.categoryList, jwt: state.jwt}
}

let mapDispatchToProps = (dispatch) => {
    return {dispatch: dispatch}
}

class HomepageScreen extends Component {

    componentDidMount() {
        fetchProductList()
        .then( (res) => {
            this.props.dispatch(updateProducts(res))})
        fetchCategoryList()
        .then( (res) => {
            this.props.dispatch(updateCategories(res))})
    }

    render() {
        return <div className="homepage">
        
        </div>
    }
}

let Homepage = connect(mapStateToProps, mapDispatchToProps)(HomepageScreen);

export default Homepage;