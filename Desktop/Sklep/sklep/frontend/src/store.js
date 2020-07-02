import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer} from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';

import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {userSigninReducer, userSiginReducer, userUpdateReducer} from './reducers/userReducers';
const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { cart: { cartItems, shipping: {}, payment: {} }, userSignin: { userInfo } };

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    userSignin: userSigninReducer,
    userSigin:userSiginReducer,
    productSave:productSaveReducer,
    productDelete:productDeleteReducer,
    cart: cartReducer,
   
    userUpdate:userUpdateReducer
    
    
    
 
   
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;