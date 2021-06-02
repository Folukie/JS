//Exercises: Level 1
//1. Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firstName', 'Foluke')
localStorage.setItem('lastName', 'Odus')
localStorage.setItem('age', 20)
localStorage.setItem('country', 'Nigeria')
localStorage.setItem('city', 'Lagos')

//Exercises: Level 2
/*2. Create a student object. The student object will have first name, last name, age, skills, 
country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
*/
const student = {
    firstName : 'Foluke',
    lastName : 'Odus',
    age: 20,
    skills: [ 'HTML, CSS, JavaScript'],
    country: 'Nigeria'

}
const studentText = JSON.stringify(student, undefined, 4)
localStorage.setItem('student', studentText)

//Exercises: Level 3
/*Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, 
totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/

const personAccount = {
    

}