//map: pointing to element with normal function also with arrow function

const { blob } = require("stream/consumers");

function double(num){
    return num*2;
}
let arr = [1,2,3,4,5];
let DoubleArr = arr.map(double);
// console.log(DoubleArr);

let triplearr = arr.map((n) => n*3);
// console.log(triplearr);

//odd or even

// function ToFindOddOrEven(num){
//     if(num%2==0){
//         console.log("even");
//     }
//     else{
//         console.log("odd");
//     }
// }
// ToFindOddOrEven(2);


//filter method in function

function iseven(num){
    return num%2==0;
}
let evenno = arr.filter(iseven);
// console.log(evenno);
function isodd(num){
    return num%2!=0;
}
let oddno = arr.filter(isodd);
// console.log(oddno);


// mul of 5: arrow function

let num = [13,15,20,35,27];
let ans = num.filter((n)=>n%5===0);
// console.log(ans);


//reduce method

let array1 = [1,2,3,4,5];
let sum = array1.reduce((product,current) => {
    return product*current;
},1);
// console.log(sum);

//using three methods
//1. map: triple
//2. filter: evem
//3. reduce: sum

let array2 = [1,2,3,4,5,6];
let triplearray = array2.map((n)=> n*3); //map
// console.log(triplearray);
function isevenno(num){
    return num%2==0;
}
let filter1 = triplearray.filter(iseven);
// console.log(filter1);

let reduce = filter1.reduce((product,current)=>{
    return product+current;
},0)
// console.log(reduce);

//destructing:

let b = [1,2,3,4,5];
const [one,,,,two] = b;
console.log(two);

//rest of the elements :

const[one1,...two1] = b;
console.log(two1);

//spread: 

let num1 = [0,...b,6,7];
console.log(num1);
//spread:merge
let obj1 = {x:3,y:5};
let obj2 = {y:6,z:7};//y overwrites
const spread = {...obj1,...obj2};
console.log(spread);


