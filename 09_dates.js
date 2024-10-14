// dates

 let myDate = new Date()
 // console.log(myDate.toString());
 // console.log(myDate.toDateString());
 // console.log(myDate.toJSON());
 // console.log(myDate.toLocaleDateString());
 // console.log(myDate.toLocaleTimeString());
 // console.log(myDate.toUTCString());

 // console.log(typeof myDate);

  // let mycreatedDate = new Date(2024,09,03);
  //  let mycreatedDate = new Date(2024,3, 2, 5, 3);
  // let mycreatedDate = new Date("2024-12-03"); // yy/mm/dd
     let mycreatedDate = new Date("01-14-2024"); // mm/dd/yy

 // console.log(mycreatedDate.toLocaleString());

 let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(newDate.getTime());
// console.log(newDate.getDate());
// console.log(newDate.getHours());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getSeconds());
// console.log(newDate.getDay());


// `${newDate.getDate()} and the time `

newDate.toLocaleString('default',{
   weekday:"long",


})


















