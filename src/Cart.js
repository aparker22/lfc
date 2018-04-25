import React, {Component} from 'react';
import {connect} from 'react-redux';
import { deleteItemFromCart } from './actions';
import { Link } from 'react-router-dom';

let mapStateToProps = (state) => {
    return {productList: state.productList, cartList: state.cartList}
};  

let mapDispatchToProps = (dispatch) => {
  return {dispatch: dispatch}
};

class CartDumb extends Component {
    render() {
    let {productList, cartList} = this.props;

    let findCartProducts = (cartList, productList) => {
        let displayList = [];
        let total = 0;
        cartList.forEach((item) => {
            productList.map((product) => {
                if (product.id === Number(item.id)) {
                    displayList.push(product);
                    total += product.price;
                    return total;
                }
                return total;
            })
        })
        return {displayList: displayList, total: total};
    }
    
    let deleteFromCart = (event) => {
        return this.props.dispatch(deleteItemFromCart({id:event.target.value}));
    }

    let displayCartProducts = findCartProducts(cartList, productList);

        return <div className="cartList">
            <div>{
            displayCartProducts.displayList.map((product) => <ul key={product.id}>
                <li><Link to={`/product/${product.name}`}>{product.name}</Link></li>
                <li>${product.price}</li>
                <li><button onClick={deleteFromCart} className="cartButton" value={product.id}>Delete from Cart</button></li>
            </ul>)
        }</div>
        <p>Total: ${displayCartProducts.total}</p>
        </div>
    }
}

let Cart = connect(mapStateToProps, mapDispatchToProps)(CartDumb)
export default Cart;