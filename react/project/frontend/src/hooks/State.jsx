import React from 'react'
import {useState,useEffect} from "react"
//Hooks :
 const State = () => {
    const[count,setCount] = useState(0) //first parameter-intial, second parameter - modify that first parameter
    const[like,setLike]= useState(0)
    useEffect(()=>{
      console.log(" from useEffect")
    },[like])
    const[dislike,setDisLike]= useState(0) //use usestate for each and every states
  return (               
    <div>
        <h1>UseState examples</h1>
        <h2>Count:{count}</h2>   
        <button onClick={()=>setCount(count+1)}>Increase</button> 
        <button onClick={()=>setCount(count-1)}>Decrease</button> 
        {/* /**multiple rendering */}
        <button onClick={()=>setCount(prev=>prev+1)}>add</button>
        <hr />
        <br />
        <h3>Like : {like}</h3>
        <button onClick={()=>setLike(l=>l+1)}>👍{like}</button>     
        <button onClick={()=>setDisLike(d=>d+1)}>👎{dislike}</button>     
    </div>
  )
}

export default State;