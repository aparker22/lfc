import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItemToCart} from './actions';

let mapStateToProps = (state) => {
    return {categoryList: state.categoryList, productList: state.productList}
};  

let mapDispatchToProps = (dispatch) => {
  return {dispatch: dispatch}
};

//props.match.params.username

class CategoryNameDumb extends Component {

    render() {
        let { categoryList, productList } = this.props;

        let findCategoryID = (categoryList) => {
            let categoryID= '';
            categoryList.map( (category) => {
                if (category.name === this.props.match.params.categoryname)
                    categoryID= category.id;
                    return categoryID;
                })
            return categoryID;
        }

        let categoryID = findCategoryID(categoryList);

        let findProductList = (categoryID, productList) => {
            let specificProductList = [];
            productList.map( (product) => {
                if (product.categoryId === categoryID) 
                    specificProductList.push(product);
                    return specificProductList;
            })
            return specificProductList;
        }

        let specificProductList = findProductList(categoryID, productList);

        let addtoCart = (event) => {
            return this.props.dispatch(addItemToCart({id:event.target.value}));
        }

        return <div className="productList">{
                specificProductList.map((product) => <ul key={product.id}>
                    <li>{product.name}</li>
                    <li>${product.price}</li>
                    <li><button onClick={addtoCart} className="cartButton" value={product.id}>Add To Cart</button></li>
                </ul>)
            }</div>
    }
}

let CategoryName = connect(mapStateToProps, mapDispatchToProps)(CategoryNameDumb)
export default CategoryName;