// this is your main.js script
//Day 3: Exercises
//Exercises: Level 1
//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Foluke'
let lastName = 'Odus'
let country = 'Nigeria'
let city = 'Lagos'
let age = 24
let isMarried = false
let year = 1997

console.log(typeof firstName)  // string
console.log(typeof lastName)   // string
console.log(typeof country)    // string
console.log(typeof city)    // string
console.log(typeof age)    // number
console.log(typeof isMarried)    // boolean
console.log(typeof year)    // number



//2. Check if type of '10' is equal to 10

console.log('10' == 10) //true
console.log('10' === 10) //false

//3. Check if parseInt('9.8') is equal to 10

/*4. Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.
*/
console.log(undefined == null) //true
console.log(2 > 1) //true
console.log(2 >= 2) //true

console.log(2 != 2) //false


/*5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
*/

4 > 3 //true
4 >= 3 //true
4 < 3 //false
4 <= 3 //false
4 == 4 //true
4 === 4 //true
4 != 4 //false
4 !== 4 //false
4 != '4' //false
4 == '4' //true
4 === '4' //false

//6. Find the length of python and jargon and make a falsy comparison statement.
let python = 'python'
let jargon = 'jargon'
console.log(python.length === jargon.length)



/* Figure out the result of the following expressions first without using console.log(). 
After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12 //true
4 > 3 && 10 > 12 //false
4 > 3 || 10 < 12 //true
4 > 3 || 10 > 12 //true
!(4 > 3) //false
!(4 < 3) //true
!(false) //true
!(4 > 3 && 10 < 12) //false
!(4 > 3 && 10 > 12) //true
!(4 === '4') //true
There is no 'on' in both dragon and python //false
*/

//7. Use the Date object to do the following activities

//What is the year today? 
const now = new Date()
console.log(now.getFullYear()) // 2020

//What is the month today as a number?
const now = new Date()
console.log(now.getMonth()+ 1) // March

//What is the date today?
const now = new Date()
console.log(now.getDate()) //3

//What is the day today as a number?
const now = new Date()
console.log(now.getDay()) //6

//What is the hours now?
const now = new Date()
console.log(now.getHours()) //18

//What is the minutes now?
const now = new Date()
console.log(now.getMinutes())

//Find out the numbers of seconds elapsed from January 1, 1970 to now.
const now = new Date() //
console.log(now.getTime())

//Exercises: Level 2
/*Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
Enter base: 20
Enter height: 10
The area of the triangle is 50
*/
let base = prompt('Enter base', 'base number')
let height = prompt('Enter height', 'height number')
let area = (0.5 * base * height)
console.log('The area of a triangle is' + area)


/*Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
*/
let sideA = prompt('Enter side a')
let sideB = prompt('Enter side b')
let sideC = prompt('Enter side c')
let perimeter = sideA + sideB + sideC
console.log('The perimter of the triangle is ' + perimeter) 

/*Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
*/
let length = prompt('Enter length of rectangle')
let width = prompt('Enter width of rectangle')
let area = (length * width)
let perimeter = (2 * (length + width))

/*Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
*/
const PI = 3.14
let radius = prompt('Enter radius of the circle')
let area = PI * radius * radius
let circumference = 2 * PI * radius

//Calculate the slope, x-intercept and y-intercept of y = 2x -2
let firstSlope =


/*Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
*/
let secondSlope =

//Compare the slope of above two questions.
console.log(firstslope === secondSlope)

/*Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
*/

/*Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
*/
let hours = prompt('Enter hour')
let ratePerHour = prompt('Enter rate per hour')
let earning = hours * ratePerHour
console.log('Your weekly earning is ' + earning)


/*If the length of your name is greater than 7 say, your name is long else say your name is short.
*/
if (name.length > 7) {
 console.log('Your name is long')
} else {
  console.log('Your name is short')
}

/*Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh
*/
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'

if (firstName.length > lastName.lenght){
console.log{'Your first name, ' + firstName + 'is longer than your family name, ' +  lastName} 
} else {
  console.log{'Your family name, ' + firstName + 'is longer than your first name, ' +  firstName} 
}

/*Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you.
*/

/*Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
*/
let birthYear = prompt('Enter birth year')

const now = new Date()
let age = (now.getFullYear() - birthYear)
let youngUser = 18 - age

if (age >= 18){
console.log('You are ' + age + '. You are old enough')
} else {
  console.log('You are ' + age + '. You will be allowed to drive after' + youngUser + 'years')
}

/*Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of years you live: 100
You lived 3153600000 seconds.
*/
const now = new Date()

let numberOfYears = prompt('Enter number of years')
let yearToSecond = numberOfYears * 365 * 2*60

console.log('You lived' + yearToSecond + 'seconds')


/*Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/
const now = new Date()
const year = now.getFullYear()
const month = now.getMonth() + 1 
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()  

console.log('${year}-${month}-${date} ${hours}:${minutes}') //YYYY-MM-DD HH:mm

console.log('${date}-${month}-${year} ${hours}:${minutes}') //DD-MM-YYYY HH:mm

console.log('${date}/${month}/${year} ${hours}:${minutes}') 
//DD/MM/YYYY HH:mm

//Exercises: Level 3
/*Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/
console.log('${year}-${month}-${date} ${hours}:${minutes}') //YYYY-MM-DD HH:mm

