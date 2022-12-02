import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

export const ShoppingCart = createSlice({
    name:"shop",
    initialState,
    reducers:{
        addToCart(state,action){
            state.push(action.payload)
            console.log(action)
        },
        deleteFromCart(state,action){
           return state.filter((item)=> item.id !== action.payload) 
          
        }
    }

})

export const{addToCart,deleteFromCart} = ShoppingCart.actions

export default ShoppingCart.reducer