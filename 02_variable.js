const accountId=144553
let accountEmail="nitesh@gmail.com"
var accountPassword="12345678"
accountCity="west Bengal"
let accountState;

// accountId=112 not allowed

accountEmail="hgj.com"
accountPassword="6725476"
accountCity="orissa"

console.log(accountEmail)

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table({accountId,accountEmail,accountPassword,accountCity,accountState})