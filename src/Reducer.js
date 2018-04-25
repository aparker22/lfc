import reducers from './actions';
import categories from './json/categories.json';
import products from './json/products.json';
import users from './json/users.json';


const initialState = {categoryList: categories, userList: users, productList: products, cartList: []};  

let fallbackReducer = state => state; 

let reducer = (state = initialState, action) => {
    let babyReducer = reducers[action.type];
    babyReducer = babyReducer || fallbackReducer;
    let newState = babyReducer(state, action);
    return newState;
}

export default reducer;
