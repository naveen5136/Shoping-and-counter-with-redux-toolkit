import { AppBar, Typography } from '@mui/material'
import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { deleteFromCart } from './ShoppingSlice'

const Navbar = () => {
    const productNumber = useSelector((state)=>state.shop)
    const dispatch=useDispatch()
    
    console.log("productNum",productNumber)

    function handleDele(pro){
      dispatch(deleteFromCart(pro))
    }
    
  return ( 
    <AppBar height="220px">
    <Container position="static"> 
   
    {productNumber.map((productNum)=>(  
     
        <Typography key={productNum.id}>{productNum.title} </Typography> 
        
  ))}
    <Typography>{productNumber.length}</Typography>
    
    </Container>
    </AppBar>
  )
}

export default Navbar