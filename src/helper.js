import React from 'react';
import {Link} from 'react-router-dom';
export let fetchCategoryList = () => {
    return fetch('https://etsetera.herokuapp.com/category', 
    {method: 'GET'})
    .then(res=> res.json())
}

export let fetchProductList = () => {
    return fetch('https://etsetera.herokuapp.com/product', 
    {method: 'GET', 
    })
    .then(res=> res.json())
}

export let fetchProductListFromCategory = (categoryId) => {
    return fetch(`https://etsetera.herokuapp.com/product?categoryId=${categoryId}`, 
    {method: 'GET', 
    })
    .then(res=> res.json())
}

let setLoginToLocalStorage = (userInfo) => {
    let jwt = JSON.stringify(userInfo);
    localStorage.setItem('jwt', jwt);
}

export let loginWithUserData = (loginInformation) => {
    return(fetch('https://etsetera.herokuapp.com/auth/local', 
    {method: 'POST',
    body: loginInformation,
    headers: new Headers ({
        'Content-Type': 'application/json'
    })
    })
    .then(res => res.json())
    .then(res => setLoginToLocalStorage(res)))
}

export let updateUsersCart = (event, jwt) => {
    let quantity = event.target.parentElement.quantity.value;
    let productId = event.target.value;
    let body = {"quantity": quantity,
	    "productId": productId,
        "userId": jwt.user['_id'],
        };

    fetch('https://etsetera.herokuapp.com/cartItem',
    {method: 'POST', 
    body: JSON.stringify(body),
    headers: new Headers ({
        'Authorization':   `Bearer ${jwt.jwt}`,
        'Content-Type': 'application/json'
    })
    })
    .then(res => res.json())
}

export let displayUsersCart = (jwt) => {
    return (fetch(`https://etsetera.herokuapp.com/cartItem?userId=${jwt.user['_id']}`,
    {method: 'GET', 
    headers: new Headers ({
        'Authorization':   `Bearer ${jwt.jwt}`,
    })
    })
    .then(res => res.json()))
}


export let DisplayProduct = ({product, addtoCart}) => <form className="productListing">
                        <ul>
                        <li><Link to={`/product/${product.title}`}>{product.title}</Link></li>
                        <li>{product.description}</li>
                        <li>${product.price}</li>
                        </ul>
                        <select name="quantity">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <button onClick={addtoCart} className="cartButton" value={product.id}>Add To Cart</button>
                    </form>
