const accountId = 121;
let accountEmail = "ravi@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 122; //not Allowed to change
console.log(accountId);

accountEmail = "weraaaaaa@gmail.com";
accountPassword="22@22"
accountCity="Banglore"

/*
Prefer not to use Var 
Becouse of issue in block scope and function scope
 */
console.table([accountId,accountEmail,accountCity,
    accountPassword,accountState]);
