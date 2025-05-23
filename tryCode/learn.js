"use strict"; //this code will strictly follow the newer version of javascript
let nu=null;
console.log(typeof nu);

//typeof is used to find the datatype of the variable
let conversion="333";

let Convert=Number(conversion);

console.log(typeof Convert);

Convert=String(Convert);

console.log(typeof Convert);


//in javascript non primitive are assigned memory in the heap that it can change permantly if reference to another variable

let user={
    name:"Akshay",
    class: 10,

};

console.log(user);
let user2=user;
user2.name="Anaya";
console.log(user);
console.log(user2);

