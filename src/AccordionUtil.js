import React, { useState } from 'react'
import { Accordion,AccordionButton } from 'react-bootstrap'

function AccordionUtil({title,content},{handleDelete}) {
    const[isActive,setIsActive]=useState(false)
    
  return (
    <div>
    
    <Accordion >
    <AccordionButton onClick={()=>setIsActive(!isActive)}>
     
       <div>{title}</div>
       
      <div> {isActive ? '-' : '+'}</div> </AccordionButton>
      <button onClick={handleDelete}>delete</button>
      <div>
       {isActive && <div>{content}</div>} </div>
       
     </Accordion>
    
    </div>
  )
}

export default AccordionUtil