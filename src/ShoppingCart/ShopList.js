import { Card, CardActionArea, CardMedia, Box, CardContent, Typography,Button, CardActions} from '@mui/material'
import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux'
import { addToCart,deleteFromCart } from './ShoppingSlice'

const ShopList = () => {
    const dispatch=useDispatch()
    const[products,setProducts] = useState()
    
    useEffect(()=>{
       const getProducts = async()=>{
        const getProductsResp = await fetch('https://fakestoreapi.com/products')
        const getProductData = await getProductsResp.json()
        setProducts(getProductData)
       } 
       getProducts()
    },[])

    function handleAdd(product){
        dispatch(addToCart(product))
    }

    function deleteCart(productId){
        dispatch(deleteFromCart(productId))
    }

  return (
    <Box display="flex" flexDirection="row" justifyContent='space-around' flexWrap="wrap" alignContent="center" >
    
    {
       products && products.map((product)=> 
       ( 
        <Card sx={{ maxWidth: 345, m:"10px", p:"3px"}} key={product.id}> 
        <CardActionArea>
            <CardMedia height="340" component="img" src={product.image} />
            <CardContent>
            <Typography variant="h6" flexWrap="nowrap">{product.title}</Typography>
            <Typography >${product.price}</Typography>
            </CardContent>
            <CardActions>
            <Button variant="contained" onClick={()=>handleAdd(product)}>ADD</Button>
            <Button variant="outlined" onClick={()=>deleteCart(product.id)}>Remove</Button>
            </CardActions>
            </CardActionArea>
            </Card>
               
       ))
    } 
    
    </Box>
  )
}

export default ShopList