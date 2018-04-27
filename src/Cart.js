import React, {Component} from 'react';
import {connect} from 'react-redux';
import { deleteItemFromCart, addItemToCart, updateProducts } from './actions';
import { Link } from 'react-router-dom';
import {displayUsersCart, fetchProductList} from './helper'

let mapStateToProps = (state) => {
    return {cartList: state.cartList, productList: state.productList, jwt: state.jwt}
};  

let mapDispatchToProps = (dispatch) => {
  return {dispatch: dispatch}
};

class CartDumb extends Component {

    componentDidMount() {
        displayUsersCart(this.props.jwt)
        .then((res) => this.props.dispatch(addItemToCart(res)))
        fetchProductList()
        .then( (res) => {
            this.props.dispatch(updateProducts(res))})
    }

    render() {
    let {cartList, productList} = this.props;

    let deleteFromCart = (event) => {
        return this.props.dispatch(deleteItemFromCart({id:event.target.value}));
    }

    let findProductsInCartList = (cartList, productList) => {
        let cartListToDisplay = [];
        let total = 0;
        let cartListToMap = cartList[0];
        if (cartListToMap !== undefined) {
            cartListToMap.map((item) => {
                productList.map((product) => {
                if (product.id === item.productId) {
                    total += product.price;
                    cartListToDisplay.push({"product": product, "quantity": item.quantity});
                    return cartListToDisplay;
                }
                return cartListToDisplay;
            })
            return cartListToDisplay;
        }) 
    }
    return {"cartListToDisplay": cartListToDisplay, "total": total};
    }


    let DisplayCartItems = () => {
        let updatedCartList = findProductsInCartList(cartList, productList);
        let keyCounter = 0;
        if (updatedCartList.cartListToDisplay) {
        return <div className="cartList">
                <div>{
                    updatedCartList.cartListToDisplay.map((product) => <ul key={keyCounter++}>
                        <li><Link to={`/product/${product.product.title}`}>{product.product.title}</Link></li>
                        <li>${product.product.price}</li>
                        <li>Quantity:{product.quantity}</li>
                        <li><button onClick={deleteFromCart} className="cartButton" value={product.product.id}>Delete from Cart</button></li>
                    </ul>)
                }</div>
        <p>Total: ${updatedCartList.total}</p>
            </div>
        } else {
            return null
        }
    }

        return <DisplayCartItems />
}
}

let Cart = connect(mapStateToProps, mapDispatchToProps)(CartDumb)
export default Cart;