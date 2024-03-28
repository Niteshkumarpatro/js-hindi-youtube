// primitive

// 7 types : String,Number,Boolean,Null,Undefined,Symbol,BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')
// console.log(Id === anotherId);

const bigNumber = 123456778n

//reference (non primitive)

// Array,Object,Functions

const heros = ["shaktiman","bheem","doga"]
let myobj ={
    name:"nitesh",
    age :20,
}

const myfunction = function(){
    console.log("hello world");
}

// console.log(typeof heros)





//***********************************************************************************************************************

//stack (primitive) , Heap (non - primitive)

let myYoutubename = "nitesh"
  let anothername = myYoutubename

anothername="kumar"
console.log(myYoutubename);
 console.log(anothername);

 let userone ={
     email :"user@.com",
     upi:"nkp@h"
 }
 let usertwo = userone
usertwo.email ="user2@.com",
    usertwo.upi="kjl"

console.log(userone);
console.log(usertwo);
