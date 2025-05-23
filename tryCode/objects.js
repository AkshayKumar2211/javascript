const user={
    name:"Akshay",
    age:50,
    location:"kangra",
    email:"akshay1234@gmail.com"
}

console.log(user.name);

console.log(user["location"]);


const mySum=Symbol("key1"); //this is a symbol

const user1={
    name:"Akshay",
    age:50,
    [mySum]:"keyChange",  //this how a symbol is added in object
    location:"kangra",
    email:"akshay1234@gmail.com"
}

console.log(user1[mySum]);