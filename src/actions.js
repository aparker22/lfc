const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export let addItemToCart = (productId) => ({type: ADD_ITEM_TO_CART, payload: productId});
let addItemToCartAction = (state, action) => {
    let newCartList = state.cartList
    newCartList.push(action.payload);
    return ({...state, cartList: newCartList});
}
addItemToCart.toString = () => ADD_ITEM_TO_CART;

const DELETE_ITEM_FROM_CART = "DELETE_ITEM_FROM_CART";
export let deleteItemFromCart = (productId) => ({type: DELETE_ITEM_FROM_CART, payload: productId});
let deleteItemFromCartAction = (state, action) => {
    let newCartList = state.cartList;
    let deletedCartList = newCartList.filter(product => (product.id !== action.payload.id))
    return ({...state, cartList: deletedCartList});
}
deleteItemFromCart.toString = () => DELETE_ITEM_FROM_CART;

const LOGIN_USER = "LOGIN_USER";
export let loginUser = (user) => ({type: LOGIN_USER, payload: user});
let loginUserAction = (state, action) => {
    return ({...state, loggedInUser: action.payload});
}
loginUser.toString = () => LOGIN_USER;

let reducers = {
    [addItemToCart]:addItemToCartAction,
    [deleteItemFromCart]:deleteItemFromCartAction,
    [loginUser]:loginUserAction
}

export default reducers;
