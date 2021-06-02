///Exercise
//Exercise: Level 1
/*const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
*/
//1. Declare an empty array;
const empty = []

//2.Declare an array with more than 5 number of elements
const subjects = ['Mathematics','English','Science','verbal','Drawing','Physics','Chemistry']

//3.Find the length of your array
console.log(subjects.length)

//4.Get the first item, the middle item and the last item of the array
let firstItem = subjects[0]
console.log(firstItem) //Mathematics

let middleItem = Math.floor(subjects.length/2)
console.log(middleItem)

let lastItem = subjects.length - 1
console.log(lastItem)

/*5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
*/
const mixedDataTypes = ['school', 'church', 50, 'hospital', 'programs', false, 'table']
console.log(mixedDataTypes.length)

/*Declare an array variable name it Companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
*/
const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//Print the array using console.log()
console.log(companies[0,10]) // from where?

//Print the number of companies in the array
console.log(companies.length)

//Print the first company, middle and last company
console.log(companies[0])
console.log(companies.length/2) // ???
console.log(companies.length-1) // ???

//Print out each company
console.log(companies) // ???

//Change each company name to uppercase one by one and print them out
console.log(companies[0].toUpperCase()) /// ????

/*Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
*/
const sentence = ['Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies. ']
console.log(sentence) // ???? Bruh!

/*Check if a certain company exists in the Companies array. If it exist return the company else return a company is not found
*/

let index = companies.indexOf('Microsoft')

if(index != -1){
   console.log('This company does exist')  
} else {
    console.log('This company is not found')
}

/*Filter out companies which have more than one 'o' without the filter method
/// where's the function?
*/
//Sort the array using sort() method

companies.sort()
console.log(companies)

//Reverse the array using reverse() method
companies.reverse()
console.log(companies)

//Slice out the first 3 companies from the array
console.log(companies.slice(0, 3))

//Slice out the last 3 companies from the array
console.log(companies.slice(companies.length-3)) // incorrect

//Slice out the middle IT company or companies from the array
console.log(companies.slice(companies.length/2, companies.length/2+1)) // incorrect


//Remove the first IT company from the array
companies.shift()
console.log(companies)

//Remove the middle IT company or companies from the array
companies.slice(companies.length/2) 
console.log(companies)

//Remove the last IT company from the array
companies.pop()
console.log(companies)

//Remove all IT companies
console.log(companies.splice()) // incorrect


//Exercise: Level 2
/*Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
*/


/*First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

13
*/
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(' ')
console.log(words)
console.log(words.length)

/*In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'
*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.shift('Meat') // incorrect
console.log(shoppingCart)

shoppingCart.push('Sugar')
console.log(shoppingCart)

shoppingCart.pop('Honey') // incorrect
console.log(shoppingCart)

// shoppingCart.replace('Tea', 'Green Tea')
// console.log(shoppingCart)


/*In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
*/
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]



let eth = countries.indexOf('Ethiopia')

if (eth != -1){
  console.log('ETHIOPIA')
} else {
  countries.push('ETHIOPIA')
  console.log('countries')
}

/* In the Web Techs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
*/

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
let lang = webTechs.indexof('Sass')

if (lang != -1){
  console.log('Sass is a CSS preprocess')
} else {
  webTechs.push('Sass')
  console.log('webTechs') // print the array dear, not a string
}

/*Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
*/
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//Exercise: Level 3
/*The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
*/

//Find the middle country(ies) in the countries array

/*Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
*/
