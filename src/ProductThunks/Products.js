import React,{useEffect, useState} from 'react'
import {fetchProducts} from './ProductThunk'
import { useDispatch,useSelector } from 'react-redux'
import { Box,Card, CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material'
import {CONSTANT} from './ProductThunk'
import { Button } from 'react-bootstrap'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Products = () => {
const dispatch = useDispatch()
const {data:product,status}= useSelector((state)=>state.getProducts)
console.log("products",product)


useEffect(()=>{
 dispatch(fetchProducts())
},[])

if(status===CONSTANT.LOADING){
    return <h1>Loading...</h1>
}
  return (
    <Box boxShadow="5px 5px 5px red" display="flex" flexDirection="row" flexWrap="wrap"  justifyContent="space-between" alignContent="space-around" alignItems="space-around">
    
     
     {product&& product.map((item)=>(
        <Card >
        <CardActionArea>
        <CardMedia component="img" src={item.image} sx={{height:"200px", width:"200px"}}/>
        <CardContent>
        {item.title}
        </CardContent>
        <CardActions alignItems="center" justifyContent="center" translateX='5px'>
        <Button >Add To Cart <ShoppingCartIcon/></Button>
        </CardActions>
        
        
        </CardActionArea>
        </Card> 
     ))}
     
    
    </Box>
  )
}

export default Products