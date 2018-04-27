import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateCategories, updateProducts} from './actions';
import { fetchCategoryList, fetchProductList, DisplayProduct, updateUsersCart } from './helper';


let mapStateToProps = (state) => {
    return {categoryList: state.categoryList, productList: state.productList, jwt: state.jwt}
};  

let mapDispatchToProps = (dispatch) => {
  return {dispatch: dispatch}
};

class CategoryNameDumb extends Component {

    componentDidMount() {
        fetchCategoryList()
        .then( (res) => {
            this.props.dispatch(updateCategories(res))});
        fetchProductList()
        .then( (res) => {
            this.props.dispatch(updateProducts(res))})
    }

    render() {
        let { categoryList, productList } = this.props;

        let findCategoryID = (categoryList) => {
            let categoryID= '';
            categoryList.map( (category) => {
                if (category.title === this.props.match.params.categoryname)
                    categoryID= category.id;
                    return categoryID;
                })
            return categoryID;
        }

        let categoryID = findCategoryID(categoryList);

        let findProductList = (categoryID, productList) => {
            let specificProductList = [];
            productList.map( (product) => {
                if (product.category.id === categoryID) 
                    specificProductList.push(product);
                    return specificProductList;
            })
            return specificProductList;
        }

        let specificProductList = findProductList(categoryID, productList);

        let addtoCart = (event) => {
            event.preventDefault();
            updateUsersCart(event, this.props.jwt)
        }

        return <div className="productList">{
                specificProductList.map((product) => <DisplayProduct key={product.id} addtoCart={addtoCart} product={product} />)
            }</div>
    }
}

let CategoryName = connect(mapStateToProps, mapDispatchToProps)(CategoryNameDumb)
export default CategoryName;