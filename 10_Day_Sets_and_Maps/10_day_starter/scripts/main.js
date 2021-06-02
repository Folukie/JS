//Exercises
//Exercises:Level 1


//1. create an empty set
const empty = new Set()
console.log(empty)

//2. Create a set containing 0 to 10 using loop
const numbers =  []
for(let i = 0; i <= 10; i++){
  numbers.push(i)
}
setOfNumbers = new Set(numbers)
 console.log(setOfNumbers)

//3. Remove an element from a set
console.log(setOfNumbers.delete(5))
console.log(setOfNumbers.size)

//4. Clear a set
setOfNumbers.clear()
console.log(setOfNumbers)

//5. Create a set of 5 string elements from array

const elements = [
  'boy',
  'girl',
  'man',
  'woman',
  'brother'
]
const setOfElements = new Set(elements)
for (const element of setOfElements) {
  console.log(element)
}

//6. Create a map of countries and number of characters of a country
const countries = [['Finland'],[ 'Sweden'], ['Norway']]
const countriesMap = new Map(countries)

for (const [country, city] of countriesMap){
  const city = country.length
console.log(country, city)
}
//Exercises:Level 2
//1. Find a union b
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

let union = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let aUnionB = new Set(union)

console.log(aUnionB)

//2. Find a intersection b

let intersection = a.filter((num) => B.has(num))
let aIntersectionB = new Set(intersection)

console.log(aIntersectionB)

//3. Find a difference b
let difference = a.filter((num) => !B.has(num))
let aDifferenceB = new Set(difference)

console.log(aDifferenceB)

//Exercises:Level 3
//1. How many languages are there in the countries object file.

/*2. Use the countries data to find the 10 most spoken languages:

Your output should look like this
console.log(mostSpokenLanguages(countries, 10))[
  ({ English: 91 },
  { French: 45 },
  { Arabic: 25 },
  { Spanish: 24 },
  { Russian: 9 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 })
]

Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[ {'English':91}, {'French':45}, {'Arabic':25} ]
*/