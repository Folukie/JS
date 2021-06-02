//Exercises: Level 1
/*1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.

Enter your age: 30
You are old enough to drive.
Enter your age:15
You are left with 3 years to drive.
*/

let age = prompt('Enter your age')
let wait = 18 - age

if (age >= 18){
  console.log('You are old enough to drive')
} else {
  console.log('You are left with ' + wait + 'years to drive.')
}


/*Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me.
*/
let myAge = prompt('Enter your age:')
let yourAge = prompt('Enter your age:')
let difference = myAge - yourAge

if (myAge > yourAge){
  console.log('I am ' + difference + 'older than you')
} else {
   console.log('You are ' + difference + 'older than me')
}

/*If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.
  let a=  4
  let b = 3
  4 is greater than 3
*/
//if else
  let a = 4
  let b = 3
  if (a > b){
    console.log(a + 'is greater than ' + b)
  } else {
    console.log( b + 'is greater than ' + a)
  }

//ternary
let a = 4
let b = 3
let greater = a > b

greater
?  console.log(a + 'is greater than ' + b)
:  console.log( b + 'is greater than ' + a)

/*Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.
*/
let number = prompt('Enter a number')

if (number % 2 == 0){
  console.log(number + 'is an even number')
} else {
  console.log(number + 'is an odd number')
}


//Exercises: Level 2
/*Write a code which can give grades to students according to theirs scores:
90-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
let score
if (score >=90){
  console.log('A')
} else (score >= 70 && score <=89) {
  console.log('B')
} else  (score >= 60 && score <=69) {
  console.log('C')
} else (score >= 50 && score <=59) {
  console.log('D'){
} else (score <= 49){
  console.log('F')
}

/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/
let season
if (season == 'september' || season == 'october' || season == 'november'){
  console.log('the season is Autumn')
} else (season == 'december' || season == 'january' || season == 'february'){
  console.log('the season is Winter')
} else (season == 'september' || season == 'october' || season == 'november'){
  console.log('the season is Autumn')
} else (season == 'june' || season == 'july' || season == 'august'){
  console.log('the season is Summer')


/*Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
    */
    let day = prompt('What is the day today?')
    if (day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday' ){
        console.log(day + 'is a working day')
      } else (day == 'Saturday' || day == 'Sunday') {
        console.log(day + 'is a weekend')
      }



//Exercises: Level 3
/*Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
Write a program which tells the number of days in a month, now consider leap year.
*/
