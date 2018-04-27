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

        let findProduct = () => {
            let thisProduct = {};
            this.props.productList.map( (product) => {
                if (product.title === this.props.match.params.productname) {
                    thisProduct = product;
                }
                return thisProduct;
            })
            return thisProduct;
        }

        let addtoCart = (event) => {
            return this.props.dispatch(addItemToCart({id:event.target.value}));
        }

        let DisplayProducts = () => {
            let product = findProduct();
            return <div className="displayProduct">
                    <ul key={product.id}>
                        <li>{product.title}</li>
                        <li>{product.description}</li>
                        <li>${product.price}</li>
                    </ul>
                    <ul>
                        <li><img src={product.images[0].url} alt={product.images[0].name}></img></li>
                        <li><button onClick={addtoCart} className="displayProductButton" value={product.id}>Add To Cart</button></li>
                    </ul>
            </div>
        }

        return <DisplayProducts />
    }
}

let ProductName = connect(mapStateToProps, mapDispatchToProps)(ProductNameDumb)
export default ProductName;