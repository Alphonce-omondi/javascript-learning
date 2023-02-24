console.log("hello world")
console.log("javascript is fun")

let firstname = "Alphonce";
firstname="best";
console.log(firstname)
 
//  RULES FOR NAMING VARIABLES

// NO space between variable names eg first name...
// it should not be a keyword eg let const....
// no special character apart from underscore eg first_name..
// they should not start with numbers eg let 123name...
// variable names should be descriptive...

let sales_of_month = "20,000";
console.log(sales_of_month)

// DATA TYPES IN JAVASCRIPT (7 IN NUMBER)

// 1.string>>sequence of characters enclosed in single or double quotes

const surname ='Otwoma';
console.log(surname)
// 2.number
let scorePoint = 800;
console.log(scorePoint)
console.log(typeof(scorePoint))

// 3.boolean
const isMale=true;
console.log(isMale)
console.log(typeof(isMale))

let currentLevel;
console.log(currentLevel)
console.log(typeof(currentLevel))

// 4.null
let playerStrength = null;
console.log(playerStrength)
console.log(typeof(playerStrength))

// string literals
let superHeroWeakness ="speed";
let superHeroName = "Hulk";
let superHeroStrength ="super strength";
console.log(`The strenght of ${superHeroName} is ${superHeroStrength} and his weakness is ${superHeroWeakness}`)

let name1 ="Alphonce";
let school ="Kiringaya university";
let age = 22;
let course = "computer science";
console.log(`My name is ${name1} i am a student at ${school} i am ${age}years and i do ${course}`)

// OPERATORS
console.log(3*3)
console.log(5>4)
console.log(4 > 5)
console.log(5>=5)
console.log(5<=5)

// negation operator(!)
// if a ststement was to return true, negation opereator makes it to return false and if it was to return false then the negation operator makes it to return true

console.log(!(5 > 3))
console.log(!(5 < 8))
console.log(!(5 > 9))

// LOGICAL and (&&)
// it returns true iff both the operants on both the left and right is true otherwise it returns false
console.log(true && true)
console.log(true && false)
console.log(false && false)
console.log(5 > 3 && 9 > 8)
console.log(5 > 3 && 9 > 18)

// LOGICAL or (||)
// returns true if either of the operand is true , it also returns true if both of the operand is true, the only time it returns false is when both operand are false

console.log(true || false)
console.log(false || true)
console.log(true || false)



