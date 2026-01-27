import React, { useEffect } from 'react'
import { useState } from 'react';
const Effect = () => {
    const[count,setCount] = useState(0);
    const[users,setUsers] = useState('');
    // useEffect(()=>{
    //     console.log('component mount');
    //     return () => {
    //         console.log('component unmount');
    //     }
    // },[]) //dependency array
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json()
        })
        .then((data)=>{
            setUsers(data);
        })
    },[]) 
  return (
    <div>
    <h1>Effect</h1>
    <h2>count:{count}</h2>
    <button onClick={()=>setCount(prev=>prev+1)}>+</button>
    <h1>Users</h1>
    <ol>
        {users.map((user)=>(
            <li>name:{user.name} email:{useo.email} <hr /></li>
        ))}
    </ol>
    </div>
    
  )
}

export default Effect;