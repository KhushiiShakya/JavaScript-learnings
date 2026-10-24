const accoundId = 144553
let accountEmail = "khushi@google.com"
var accountPassword = "Khushi123"
accountCity = "Delhi"

// accoundId = 2   // not allowed

accountEmail = "ks@gmail.com"
accountPassword = "15234"
accountCity = "Noida"

console.log(accoundId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accoundId, accountEmail, accountPassword, accountCity]);