// Functions

// console.log("Hello user")
// console.log("Welcome back")
// console.log("How do you do")
// console.log("Remember to explore marketplace")
// console.log("Phones are going at a discount of 15%")
// console.log("And also remember to expand your buyers network")

function addNumbers(){
    let firstNumber = 5;
    let secondNumber = 6;
    console.log(firstNumber + secondNumber)
}
addNumbers()

function multiplyNumbers(){
    let firstNumber = 8;
    let secondNumber = 89;
    console.log(firstNumber * secondNumber)
}
multiplyNumbers()

function subtract(){
    let firstNumber = 15;
    let secondNumber = 3;
    console.log(firstNumber - secondNumber)
}
subtract()

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    console.log(result)
}
addTwoNumbers(12, 15)
addTwoNumbers(67, 345)
addTwoNumbers(45, 89)
addTwoNumbers(90, 90)

function multiplyTwoNumbers(number1, number2){
    // only multiply the numbers if the first number is greater than 100 and the second number is greater than 800
    if (number1 < 100){
        console.log("Cannot multiply when number 1 is less than 100")
    }else if (number2 < 800){
        console.log("Cannot multiply when number 2 is less than 800")
    }else{
        let result = number1 * number2
        console.log(result)
    }
}
multiplyTwoNumbers(90, 90)
multiplyTwoNumbers(200, 90)
multiplyTwoNumbers(9000, 9000)

if(0){
    let x = 'y';
}
let x = 'z';
console.log(x)


// Types of functions
const myFunction = function(){
    console.log("This is my function")
}
myFunction()

// function myFunction(){
//     console.log("This is my other function")
// }
// myFunction()

const myOtherFunction = () => {
    console.log("This is my arrow function")
}
myOtherFunction()

const helloWorld = () => {
    console.log("Hello world")
}

const addTwoNumbersArrow = (number1, number2) => {
    console.log(number1 + number2)
}

const sayHello = userName => {
    console.log(`Hello ${userName}`)
}
sayHello("Zaph")

const sayHello2 = userName => console.log(`Hello ${userName}`)
sayHello2("Paneah")

const areaRectangle = (length, width) => {
    return length * width
}
const factor = 2
const areaRect = areaRectangle(45, 56) + factor
console.log(areaRect)

console.log(areaRectangle(45, 56) + factor)

// Objects - revision
const student = {
    regNo: 'CT101/g/5645/20',
    fullName: "Jack Odoyo",
    course: "Computer Science",
    units: ["Software engineering", "Computer Architecture"]
}

console.log(student.regNo)
console.log(student['fullName'])

const sampleArray = [1,2,3,4]
const students = [
    {fullName: "Dennis Otwoma", age: 25},
    {fullName: "Humphrey Muriungi", age: 27},
    {fullName: "Ivy Njoki", age: 22},
    {fullName: "Munyiri Abdi", age: 24},
]
console.log(students[0])
for (let i = 0; i < students.length; i++){
    console.log(students[i].fullName, students[i].age)
}
