import { createSlice } from "@reduxjs/toolkit";

export const CONSTANT = {
     IDLE:'idle',
     LOADING:"loading",
     ERROR:"error"
}

const initialState={
    data:[],
    status:CONSTANT.IDLE
}

const productThunks = createSlice({
    name:"getProducts",
    initialState,
    reducers:{
        setProducts(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
           state.status = action.payload
        }
    }
})
export const {setProducts,setStatus} = productThunks.actions
export default productThunks.reducer

export function fetchProducts(){
      return async function fetchProductsThunk(dispatch,getState){
        dispatch(setStatus(CONSTANT.LOADING))
           try 
           {
                  const getRes= await fetch('https://fakestoreapi.com/products')
                  const getproData = await getRes.json()
                  console.log("thunk",getproData)
                  dispatch(setProducts(getproData))
                  dispatch(setStatus(CONSTANT.IDLE))
           }
           catch(err) {
                 dispatch(setStatus(CONSTANT.ERROR))
           }
      }
}

