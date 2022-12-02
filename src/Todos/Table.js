import { useState } from "react";
import classes from "./Table.module.css";

export default function Table({issues}) {
    const[numCheckboxSelect,setNumCheckboxSelect]=useState(0)
    return (
        <>
         <table className={classes.Table}>
            <thead>
             <tr>
              <th>
              <input type="checkbox"/> {numCheckboxSelect || 'none'}
              </th>
             
             </tr>
              <tr>
                <th>Name</th>
                <th>Message</th>
                <th>Status</th>
              </tr>
            </thead>
             <tbody>
               {issues.map(({name,message,status},index)=>{
                let issueIsOpen = status === "open";
                return ( 
                <tr key={index}>
                   <td><input type="checkbox"/>{name}</td>
                   <td>{message}</td> 
                   <td >
                {issueIsOpen ? (
                  <span className={classes.greenCircle} />
                ) : (
                  <span className={classes.redCircle} />
                )} 
              </td>
                </tr> )
               })}
             </tbody>
            

         </table>
        </>
    )
 }
        
