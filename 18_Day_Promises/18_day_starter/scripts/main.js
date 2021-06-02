
//Exercises: Level 1
//1. Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = 'https://restcountries.eu/rest/v2/all'
fetch(countriesAPI)
  .then(response => response.json()) 
  .then(data => { 
      
    console.log(data)
  })
  .catch(error => console.log(error)) 
//Exercises: Level 2
//2. Print out all the cat names in to catNames variable.
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(catsAPI)
  .then(response => response.json()) 
  .then(data => { 
      
    console.log(data)
  })
  .catch(error => console.log(error)) 
//Exercises: Level 3
//1. Read the cats api and find the average weight of cat in metric unit.
//2. Read the countries api and find out the 10 largest countries
//3. Read the countries api and count total number of languages in the world used as officials.