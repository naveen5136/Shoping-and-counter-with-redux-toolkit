import { configureStore } from "@reduxjs/toolkit";
import shopReducer from '../ShoppingCart/ShoppingSlice'

import counterReducer from './counterSlice'

 const store = configureStore({
    reducer:{
        counter:counterReducer,
        shop: shopReducer,
    }
})
export default store 