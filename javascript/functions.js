console.log("Hello world");

// primitive: single value(pass by value) and non primitive:( passbyreference)
 let obj1 = {age:33};
 let obj2 = obj1;          
 obj1.age = 22;
 console.log(obj2.age);

sum(10,10);
 function sum(a,b){
    console.log(a+b);
 }

const sum2 = (a,b,c) =>{
    console.log(a+b+c);
}
sum2(5,5,5);
 
 
