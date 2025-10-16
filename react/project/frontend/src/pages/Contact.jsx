import React from 'react'
import {useState} from "react";
const Contact = () => {
  const[form,setForm] = useState({
  name : '',
  age:'',
  gender:'',
  email:'',
  password:''
  })
  
const handleChange = (e) =>{
   const {name,value} = e.target;    //destructuring target value stored
   setForm((prev)=>({
    ...prev,
    [name]:value
   }))
}


const handleSubmit = (e) => {
      e.preventDefault();
      console.log(form);
}


  return (
    <div>
      <h1>form</h1>
       <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" value={form.name} placeholder="Enter your name" onChange={handleChange}/>
        <br /><br />
        <label htmlFor="">Age:</label>
        <input type="number" name="age"value={form.age} placeholder="Enter your age" onChange={handleChange} />
        <br /> <br />
        <label htmlFor="">Gender:</label>
        <input type="radio" name="gender" id="gender" />Male
        <input type="radio" name="gender" id="gender" />Female
        <br /> <br />
        <label htmlFor="">Email:</label>
        <input type="email" name="email" id="email" value={form.email} placeholder="Enter your email"  onChange={handleChange}/>
        <br /> <br />
        <label htmlFor="">Password:</label>
        <input type="password" name ="password" id = "password" value={form.password} placeholder="Enter your password"  onChange={handleChange}/>
        <br /><br />
        <button>Submit</button>
       </form>

    </div>
    

  )
}

export default Contact;