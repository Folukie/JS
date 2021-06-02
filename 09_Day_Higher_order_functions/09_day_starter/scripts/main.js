//Exercises: Level 1
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

/*1. Explain the difference between forEach, map, filter, and reduce.
    forEach - Iterates an array element and used for only arrays
    map- Iterates and modifies the array element. It retunrs arnew array
    filter - It filters out item and returns a new array
    reduce - it takes a callback function which takes an accumukator, current as a parameter and returns a single value
*/

/*2. Define a callback function before you them in forEach, map, filter or reduce.

A callback is a function which can be passed as parameter to other function.
*/

//3. Use forEach to console.log each country in the countries array.
countries.forEach(function(country){
  console.log(country)
})

//4. Use forEach to console.log each name in the names array.
names.forEach(function(name){
  console.log(name)
})
//5. Use forEach to console.log each number in the numbers array.
numbers.forEach(num => console.log(numbers))

/*6. Use map to create a new array by changing each country to uppercase in the countries array.
*/
const countriesUpperCase = countries.map(function(country){
  return country.toUpperCase()
})
console.log(countriesUpperCase) 

/*7. Use map to create an array of countries length from countries array.
*/
const countriesLength = countries.map(function(country){
  return country.length
})
console.log(countriesLength)

/*8. Use map to create a new array by changing each number to square in the numbers array
*/
const numberSquares = numbers.map(function(num){
  return num * num
})
console.log(numberSquares)

//9. Use map to change to each name to uppercase in the names array
const namesToUpperCase = names.map(function(name){
  return name.toUpperCase()
})
console.log(namesToUpperCase)

//10. Use map to map the products array to its corresponding prices.
const productsToPrices = products.map(function(product, price){
return product
})
console.log(productsToPrices)

//11. Use filter to filter out countries containing land.
const countriesContLand = countries.filter(function(country){
  return country.includes('land')
})
console.log(countriesContLand)

//12. Use filter to filter out countries having six character.
const countriesWSixChar = countries.filter(function(country){
  return country.length == 6 
})
console.log(countriesWSixChar)

/*13. Use filter to filter out countries containing six letters and more in the country array.
*/
const countriesWSixOrMore = countries.filter(function(country){
  return country.length >= 6
})
console.log(countriesWSixOrMore)

//14. Use filter to filter out country start with 'E';
const countriesStartsWithE = countries.filter(function(country){
  return country.startsWith('E')
})
console.log(countriesStartsWithE)

//15. Use filter to filter out only prices with values.
const pricesWValues = products.filter(function(price){
  return price.price !=0
})
console.log(pricesWValues)

/*16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
*/
function getStringLists(array){
  return [array].push(array)
}
console.log('foluke')

//17. Use reduce to sum all the numbers in the numbers array.

const sumAllNum = numbers.reduce(function(acc, cur){
  return acc += cur
})
console.log(sumAllNum)

/*18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
*/
const sentence = countries.reduce((country) => 'Estonia ' + countries + ' are north European countries')
console.log(sentence)

/*19. Explain the difference between some and every
Some is used to check if some of the elements are similar in one aspect
Every checks if all the elements are similar in one aspect
*/

/* 20. Use some to check if some names' length greater than seven in names array
*/
const namesThanSeven = names.some(function(name){
  return name.length > 7
})
console.log(namesThanSeven)

//21. Use every to check if all the countries contain the word land
const countriesIncludingLand = countries.every(function(country){
  return country.includes('land')
})
console.log(countriesIncludingLand)

/*22. Explain the difference between find and findIndex.
find returns the first element which satisfies the condition
findIndex returns the position of the first element which satisfies the condition
*/

/*23. Use find to find the first country containing only six letters in the countries array
*/
const sixLettersCountry = countries.find(function(country){
  return country.length == 6
})
console.log(sixLettersCountry)

/*24. Use findIndex to find the position of the first country containing only six letters in the countries array
*/
const sixLettersCountryPosition = countries.findIndex(function(country){
  return country.length == 6
})
console.log(sixLettersCountryPosition)

/*25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
*/
const norwayPosition = countries.findIndex(function(country){
  return country.includes('Norway')
})
console.log(norwayPosition)

/*26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
*/
const russiaPosition = countries.findIndex(function(country){
  return country.includes('Russia')
})
console.log(russiaPosition)

//Exercises: Level 2
/*1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
*/
const pricesSum = products.filter(function(price){
  return price += price
})
console.log(pricesSum)

/*2. Find the sum of price of products using only reduce(callback))
*/
const priceSum = products.reduce(function(price){
  return price.price += price
})
console.log(priceSum)

/*3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
*/
function categorizeCountries(array){
  let arrayOfCountries = []
  countries.js 
}

/*4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
*/
function objectArray(){
  return arguments[0]
}

/*5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
*/
function getFirstTenCountries(){
  let tenCountries = countries.js
  return tenCountries.length == 10
}
console.log(getFirstTenCountries)

/*6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
*/

/*7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
*/

//Exercises: Level 3
/*1. Use the countries information, in the data folder. Sort countries by name, by capital, by population
*/

//2. Find the 10 most spoken languages:

/* Your output should look like this
console.log(mostSpokenLanguages(countries, 10))
[
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country:'Swahili',count:4}
]

// Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[
{country: 'English',count: 91},
{country: 'French',count: 45},
{country: 'Arabic',count: 25},
]
*/

/*3. Use countries_data.js file create a function which create the ten most populated countries

console.log(mostPopulatedCountries(countries, 10))

[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000},
{country: 'Indonesia', population: 258705000},
{country: 'Brazil', population: 206135893},
{country: 'Pakistan', population: 194125062},
{country: 'Nigeria', population: 186988000},
{country: 'Bangladesh', population: 161006790},
{country: 'Russian Federation', population: 146599183},
{country: 'Japan', population: 126960000}
]

console.log(mostPopulatedCountries(countries, 3))
[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000}
]
*/

/*4. Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
*/