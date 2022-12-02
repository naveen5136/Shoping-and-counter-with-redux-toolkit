import {useState} from 'react'
import { Box,Button,Grid,TextField } from '@mui/material'
import { useDispatch,useSelector } from "react-redux"
import { decrement,increment,incrementByAmount,increAsync } from "./counterSlice"

export default function Counter(){
    const[increAmount,setIncreAmount]=useState('2')
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counter.value)

    return (
        <Box 
        display="flex"
        height={200}
        justifyContent="center"
        alignItems="center"
        borderRadius={3}
        boxShadow={"10px 10px 10px #ccc"}
        sx={{
            ":hover":{
                boxShadow: "20px 20px 20px #ccc"
            }
        }}
        >
        <Grid columns={16}>
        
        <Grid item xs={8}>
        <Button size="small" variant="contained" onClick={() => dispatch(increment())}>+</Button>
        <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>{count} </Box>
        <Button size="small" variant="contained" onClick={()=>dispatch(decrement())}> -</Button> <br/>
        </Grid>      
        <Grid>
        <TextField size="small" disply ="flex"  width="20px" value={increAmount} onChange={(e)=>setIncreAmount(e.target.value)}/> 
        </Grid>
        
        <Button onClick={()=>dispatch(incrementByAmount(Number(increAmount)||0))}>ADD By Amount</Button>
        <Button onClick={()=>dispatch(increAsync(Number(increAmount)||0))}>Add Sync</Button>
        </Grid>
        </Box>
    )
}