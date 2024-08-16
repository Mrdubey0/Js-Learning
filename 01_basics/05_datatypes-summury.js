//Primitive

// 7 types : String, Number, Boolean, Null , Undefined, Symbol ,BigInt

const score =1000
const scoreValue=100.6
const isLoggedin=false
const temperature=null //type of Object
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);

const bigNumber=5456467578575n  //Type of undefined

// Non-Primitive or Reference Type

//Array, Objects, Functions

let myArr = ["ravi","akky","yadav"];

const myObj = {
    name:"ravi",
    age:"23",
}
const myFuntion = function() {
    console.log("Heelo World!");
    
}
myFuntion()
