import {configureStore } from '@reduxjs/toolkit' ;
import WishReducer from './wishSlice';
export const Store = configureStore({
    reducer:{
        wish : WishReducer ,
    }
})

