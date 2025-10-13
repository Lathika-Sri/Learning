const { log } = require("console");
const { response } = require("express");

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//          const success = true;
//          if(success){
//             resolve('resolved successfully');
//          }
//          else{
//             reject('rejected');
//          }
//     })
// },2000); //macrotasks
// // console.log('Before execution'); //microtasks
// promise.then((result)=>console.log(result))
//         .catch(err=>console.log(err)
//     )
// .finally(()=>{console.log('promises completed')})
// console.log('After promises execution');


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{return response.json()})
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{return response.json()})
// .then((data)=>data.map((user)=>{console.log(user.name)}))
// .catch((err)=>console.log(err))


let obj3 = {name:"lathika",age:19,country:"India"};
console.log(obj3.name);