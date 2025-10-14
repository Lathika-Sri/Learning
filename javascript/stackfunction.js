const mul = (a,b) => {
    return a * b;
}
const square = (n) => {            
    return mul(n,n);
}
const print = (n) => {
    let s = square(n);
    console.log(s);
}
// // print(4);                          /**1.mul
//                                       2.square
//                                       3.print
//                                       4.main  */ //stack storage


//event looping: javascript -> asynchronous
console.log("first");
Promise.resolve().then(console.log('From promises'))
setTimeout(() => {
    console.log('Inside timeout');
})
console.log("Last"); 
