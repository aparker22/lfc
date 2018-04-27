const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export let addItemToCart = (list) => ({type: ADD_ITEM_TO_CART, payload: list});
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

const UPDATE_JWT = "UPDATE_JWT";
export let updateJWT = (token) => ({type: UPDATE_JWT, payload: token});
let updateJWTAction = (state, action) => {
    return ({...state, jwt: action.payload});
}
updateJWT.toString = () => UPDATE_JWT;

const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export let updateCategories = (data) => ({type: UPDATE_CATEGORIES, payload: data});
let updateCategoriesAction = (state, action) => {
    return ({...state,  categoryList : action.payload});
}
updateCategories.toString = () => UPDATE_CATEGORIES;

const UPDATE_PRODUCTS= "UPDATE_PRODUCTS";
export let updateProducts= (data) => ({type: UPDATE_PRODUCTS, payload: data});
let updateProductsAction = (state, action) => {
    return ({...state,  productList : action.payload});
}
updateProducts.toString = () => UPDATE_PRODUCTS;

let reducers = {
    [addItemToCart]:addItemToCartAction,
    [deleteItemFromCart]:deleteItemFromCartAction,
    [loginUser]:loginUserAction,
    [updateCategories]: updateCategoriesAction,
    [updateProducts]: updateProductsAction,
    [updateJWT]: updateJWTAction,
}

export default reducers;
