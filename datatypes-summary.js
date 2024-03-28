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

console.log(typeof heros)