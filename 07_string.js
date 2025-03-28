const name="nitesh"
const repocount=2

//console.log(name + repocount + " value");

console.log(`hello my name is ${name} and my repocount is ${repocount}`);

const gameName= new String('hitesh-hc')
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
//console.log(gameName.indexOf('s'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringone="    nitesh    "
console.log(newStringone)
console.log(newStringone.trim())

const url="http://nitesh,com/nitesh%20patro"

console.log(url.replace('%20','-'));

console.log(url.includes('nitesh'))

console.log(gameName.split('-'))

