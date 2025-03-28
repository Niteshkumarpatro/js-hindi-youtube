// Primitive

// 7 types :String,Number,Boolean,null,undefined,symbol,BingInt

const score=100
const scorevalue=100.3

const isloggedIn=false
const outsidetemp=null
let userEmail;
const id=Symbol('123')
const anotherId =Symbol('123')

console.log(id===anotherId);

const bigNumber=234546475547n


// Reference(non primitive)

// Array,objects,Functions


const heros =["shaktiman","naagraj","doga"];
let myObj={
    name:"nitesh",
    age:20,
}

const myFunction=function() {
    console.log("hello world");
}

console.log(typeof bigNumber)
onsole.log(typeof outsidetemp)

// typeof datatype

//  Primitive
// Number => number
// String => string
// Boolean => boolean
// null => object
// undefined => undefined
// symbol => symbol
// bigint => bigint
//
// Non-Primitive
// array => object
// object => object
// function => function


// ******************************************************

// Stack(primitive), Heap(Non-primitive)

let myYoutubename="niteshkumar.com"

let anothername=myYoutubename
anothername="chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userone={
    email:"nitesh.com",
    upi:"123@kotak"
}

let usertwo=userone

usertwo.email="hitesh.com"

console.log(userone.email);
console.log(usertwo.email);
