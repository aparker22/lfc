import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItemToCart} from './actions';

let mapStateToProps = (state) => {
    return {productList: state.productList}
};  

let mapDispatchToProps = (dispatch) => {
  return {dispatch: dispatch}
};

class ProductNameDumb extends Component {

    render() {
        let { productList } = this.props;

        let findProduct = (productList) => {
            let thisProduct = {};
            productList.map( (product) => {
                if (product.name === this.props.match.params.productname) {
                    thisProduct = product;
                }
                return thisProduct;
            })
            return thisProduct;
        }

        let product = findProduct(productList);

        let addtoCart = (event) => {
            return this.props.dispatch(addItemToCart({id:event.target.value}));
        }

        return <div className="displayProduct">
                    <ul key={product.id}>
                        <li>{product.name}</li>
                        <li>${product.price}</li>
                    </ul>
                    <ul>
                        <li><button onClick={addtoCart} className="displayProductButton" value={product.id}>Add To Cart</button></li>
                    </ul>
            </div>
    }
}

let ProductName = connect(mapStateToProps, mapDispatchToProps)(ProductNameDumb)
export default ProductName;