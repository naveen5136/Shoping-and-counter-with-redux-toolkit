import React,{useState} from 'react'
import AccordionUtil from './AccordionUtil';


function NAveen() {
    const[title,setTitle] = useState('')
    const[accordionData,setAccordionData]=useState([])

    function handleText(e){
        setTitle(e.target.value)
    }
    function handleSubmit(){
          setTitle('');
          setAccordionData([ 
            ...accordionData,
          {title:title,content:title}
          ])
    }

    function handleDelete(){
        alert('clicked')
       
    } 

  return (
    
    <div>
    {accordionData.map(({title,content},index)=>(
        <AccordionUtil key={index} title={title} content={title} handleDelete={handleDelete}/>
    ))} 
    <input value={title} onChange={handleText}/>
    <button onClick={()=>handleSubmit()}>title</button> 
    </div>
    
  )
}

export default NAveen