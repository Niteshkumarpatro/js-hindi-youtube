// array - storing a collection of multiple items under a single variable name

// []=square bracket,{}=curly braces,()=parenthesis

const myArr=[0,1,2,3,4,5,true,"nitesh"]
const myHeroes=["shaktiman","bheem"]
const myArr2=new Array(1,2,3,4,4)

//console.log(myArr[3]);

// Array methods

// myArr.push(6) used for adding element in array
// myArr.push(23) remove the last element in an array
// myArr.pop()

// myArr.unshift(9) add element in the first  of the array
//myArr.shift() remove the first element of an array

//console.log(myArr)


// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr=myArr.join()

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

// slice,splice

console.log("A",myArr);

const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr);


const myn2=myArr.splice(1,3)
console.log(myn2)
console.log("C",myArr);

