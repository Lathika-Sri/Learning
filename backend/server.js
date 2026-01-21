const express = require('express');
const { connect } = require('http2');
const app = express()
const mongoose=require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
app.use(express.json());
mongoose.connect(
  process.env.MONGO_URI
)
.then(()=>{console.log("mongoose connected successfully")})
.catch((err)=>{console.log(err)})

app.use('/auth',require('./routes/authRoutes'))
app.use('/create',require('./routes/taskRoutes'))
//request,response :- parameter type
app.get('/api',(req, res) => {
  res.send('Hi from express');
})
app.post('/api',(req,res)=>{
  const temp=req.body;
  res.send(temp);
})
app.listen(4000, () => {
    console.log('server running on 4000');
    
})