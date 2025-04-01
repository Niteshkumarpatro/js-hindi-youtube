// singleton
// object.create


//object literals

const mysym=Symbol("key1")
const jsUser={
    name:"nitesh",
    "full name":"niteshkumar",
    [mysym]:"mykey1",
    age:20,
    location:"kolkata",
    email:"nitesh@gmail.com",
    isloggedIn:true,
    lastLogindays:["monday","sunday"]

}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mysym])

jsUser.email="hitesh@gmail.com"
 //Object.freeze(jsUser)
 jsUser.email="nitesh@yaahoo.com"
//console.log(jsUser)

jsUser.greeting=function(){
    console.log("hello JS user");

}
console.log(jsUser.greeting());

jsUser.greeting2=function() {
    console.log(`hello JS user,${this.name}`);
}
console.log(jsUser.greeting2());

