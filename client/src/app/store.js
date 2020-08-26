import { configureStore } from '@reduxjs/toolkit';
import shoppingReducer from '../redux/shoppingSlice';
import errorReducer from '../redux/errorSlice';
import authReducer from '../redux/authSlice';

const rootReducer = {
    items: shoppingReducer,
    errors: errorReducer,
    auth: authReducer
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;