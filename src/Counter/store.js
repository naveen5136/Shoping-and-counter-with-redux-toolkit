import { configureStore } from "@reduxjs/toolkit";
import shopReducer from '../ShoppingCart/ShoppingSlice'
import getProductsReducer from '../ProductThunks/ProductThunk'

import counterReducer from './counterSlice'

 const store = configureStore({
    reducer:{
        counter:counterReducer,
        shop: shopReducer,
        getProducts:getProductsReducer,
    }
})
export default store 