let score =  "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueNumber = Number(score)
console.log(typeof valueNumber);
console.log(valueNumber);

//  "33" => 33       converts
//"33abc" => NaN
// true => 1; false => 0


let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


// 1 => true ; 0=> false
// "" => false
//"satyam" = true 


let someNumber = 33

let stringNumber = String (someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)



//   operators ................................


// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%3)

let str1 = "hello"
let str2 =  " Satyam"

let str3 = str1 + str2 ;


console.log("1" + 2);       //12
console.log(1 + "2");       //12
console.log("1" + 2 + 2);   //122
console.log(1 + 2 + "2");   //32


console.log(true);      //true
console.log(+true);    // 1
console.log(true+);   // error


 console.log(+"") 
 
 


 let num1 , num2 , num3

 num1 = num2 = num3 = 2 + 2

 let gameCounter = 100
 gameCounter++;

console.log(gameCounter)


// Postfix increment.................
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n


// Prefix increment....................
let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n