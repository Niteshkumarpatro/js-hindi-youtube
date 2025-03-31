// Dates

let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreatedDate=new Date(2025,0,31)
//console.log(myCreatedDate.toDateString());

//let myCreatedDate=new Date(2025,0,31,5,3,46)
//console.log(myCreatedDate.toLocaleString());

// let myCreatedDate=new Date("2025-01-31")(yy-mm--dd)
// console.log(myCreatedDate.toLocaleString())

let myCreatedDate=new Date("04-02-2025")//(mm-dd-yy)
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
//console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);

//`${newDate.getDay()} and the time'

new Date.toLocaleString('default',{
    weekday: "long",
    timezone:''
})











