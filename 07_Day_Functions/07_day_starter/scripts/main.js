//Exercises
//Exercises: Level 1
//1. Declare a function fullName and it print out your full name.
function fullName() {
    let firstName = 'Foluke'
    let lastName = 'Odus'
    let fullName = firstName + ' ' + lastName
    return fullName
  }
  console.log(fullName())
  
  /*2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
  */
  function fulllName(firstName, lastName) {
    return firstName + ' ' + lastName
  }
  fulllName('Foluke', 'Odus')
  
  /*3. Declare a function addNumbers and it takes two two parameters and it returns sum.
  */
  function addNumbers(numOne, numTwo) {
    return numOne + numTwo
  }
  //  if your function just does a one line operation, simply return the statement. No need to declare a new variable.
  addNumbers(30, 59)
  
  /*4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
  */
  function areaOfRectangle(length, width) {
    area = length * width // where did you declare area?
    return (area)
  }
  areaOfRectangle(5, 4)
  
  /*5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
  */
  function perimeterOfRectangle(length, width) {
    perimeter = 2 * (length + width) // where did you declare perimeter
    return (perimeter) // don't add spaces before the bracket
  }
  perimeterOfRectangle(12, 4)
  
  /*6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
  */
  function volumeOfRectPrism(length, width, height) {
    volume = length * width * height // where did you declare volume?
    return (volume)
  }
  volumeOfRectPrism(2, 4, 6)
  
  /*7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
  */
  function areaOfCircle(r) {
    const PI = 3.14
    circleArea = PI * r * r
    return (circleArea)
  }
  areaOfCircle(5)
  
  /*8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
  */
  function circumOfCircle(r) {
    const PI = 3.14
    circumference = 2 * PI * r
    return (circumference)
  }
  circumOfCircle(2)
  
  /*9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
  */
  function dens(mass, volume) {
    density = mass / volume
    return (density)
  }
  dens(15, 2)
  
  /*10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
  */
  function speedMoving(distance, time) {
    speed = distance / time
    return (speed)
  }
  speedMoving(18, 2)
  
  
  /*11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
  */
  function weightOfSubstance(mass, gravity) {
    weight = mass * gravity
    console.log(weight)
  }
  weightOfSubstance(50, 4)
  
  /*12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
  */
  function convertCelciusToFahrenheit(oC) {
    oF = (oC * 9 / 5) + 32
    console.log(oF)
  }
  convertCelciusToFahrenheit(8)
  
  /*13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
  
  The same groups apply to both men and women.
  Underweight: BMI is less than 18.5
  Normal weight: BMI is 18.5 to 24.9
  Overweight: BMI is 25 to 29.9
  Obese: BMI is 30 or more
  */
  function bmiCalc(weight, height) {
    bmi = weight / (height * height)
    if (bmi < 18.5) {
      console.log('Person is underweight')
    } else if ((bmi >= 18.5) && (bmi <= 24.9)) {
      console.log('Person is of normal weight')
    } else if ((bmi >= 25) && (bmi <= 29.9)) {
      console.log('Person is overweight')
    } else if (bmi >= 30) {
      console.log('Person is obese')
    }
  }
  bmiCalc(200, 2)
  
  
  /*14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
  */
  function checkSeason(month) {
    const now = new Date()
    month = now.getMonth()
    if ((month.length >= 0) && (month.length <= 2)) {
      console.log('Autumn')
    }
  
  }
  checkSeason(1)
  
  /*15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
  
  console.log(findMax(0, 10, 5))
  10
  console.log(findMax(0, -10, -2))
  0
  */
  function findMax(a, b, c) {
    if ((a > b) && (a > c)) {
      console.log(a)
    } else if ((b > a) && (b > c)) {
      console.log(b)
    } else {
      console.log(c)
    }
  }
  findMax(0, 10, 5)
  findMax(0, -10, -2)
  
  /*16. Math.max returns its largest argument. Write a function findMax that takes hundred arguments and returns their maximum with out using Math.max method.
  */
  function findMax() {
    let largestNum
    for (let i = 0; i < arguments.length; i++) {
      if ((i == 0) || (arguments[i] > largestNum)) {
        largestNum = arguments[i]
      }
    }
    return largestNum
  }
  console.log(findMax(9,5,8,5,6))
  
  
  // function anything() {
  //   for (let i = 0; i < arguments.length; i++) {
  //     console.log('Param ' + (i + 1) + ' = ' + arguments[i])
  //   }
  //   console.log("Param 1 = 1")
  //   console.log("Param 2 = 3")
  //   console.log("Param 3 = 24")
  // }
  
  // anything(1, 3, 24, 3, 1, 3, 1, 3, 1, 3)
  
  //Exercises: Level 2
  /*1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
  */
  function solveLinEquation(a, b, c, x, y) {
    linFormular = (a * x) + (b * y) + c
    console.log(linFormular)
  }
  solveLinEquation(2, 5, 6, 3, 5)
  
  /*2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
  
  console.log(solveQuadratic()) // {0}
  console.log(solveQuadratic(1, 4, 4)) // {-2}
  console.log(solveQuadratic(1, -1, -2)) // {2, -1}
  console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
  console.log(solveQuadratic(1, 0, -4)) //{2, -2}
  console.log(solveQuadratic(1, -1, 0)) //{1, 0}
  */
  function solveQuadEquation(a, b, c, x) {
    quadFormular = (a * x * 2) + (b * x) + c
    console.log(quadFormular)
  }
  solveQuadEquation(4, 5, 6, 7)
  
  /*3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
  */
  function printArray(array) {
  
    for (i = 0; i < array.length; i++) {
      console.log(array[i])
    }
  
  }
  printArray(['boy', 'girl', 'man', 'woman'])
  // ?? I'm wondering why you passed a number
  const newArray = ['school', 'church', 'house']
  console.log(newArray[1])
  
  /*4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
  
  showDateTime()
  08/01/2020 04:08
  */
  function showDateTime() {
    const now = new Date()
    const year = now.getFullYear() // return year
    const month = now.getMonth() + 1 // return month(0 - 11)
    const date = now.getDate() // return date (1 - 31)
    const hours = now.getHours() // return number (0 - 23)
    const minutes = now.getMinutes() // return number (0 -59)
  
    console.log(date + '/' + month + '/' + year + ' ' + hours + ':' + minutes)
  }
  showDateTime()
  
  /*5. Declare a function name swapValues. This function swaps value of x to y.
  
  swapValues(3, 4) // x => 4, y=>3
  swapValues(4, 5) // x = 5, y = 4
  */
  function swapValues(x, y) {
    [x, y] = [y, x] // please use a const
    console.log(x, y)
  
  }
  swapValues(56, 90)
  
  /*6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
  
  console.log(reverseArray([1, 2, 3, 4, 5]))
  //[5, 4, 3, 2, 1]
  console.log(reverseArray(['A', 'B', 'C']))
  //['C', 'B', 'A']
  */
  function reverseArray(array) { //why is the parameter name "words"?
    let reversedArray = []
    for (let i = array.length - 1; i >= 0; i--) {
      reversedArray.push(array[i]);
    }
    return reversedArray
  }
  console.log(reverseArray([1, 2, 3, 4, 5]))
  
  
  /*7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
  */
  function capitalizeArray(array) {
  
    return (array.toUpperCase())
  }
  console.log(capitalizeArray('foluke'))
  
  /*8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
  */
  function addItem(item) {
    addedItem = []
    addedItem.push(item)
    return (addedItem)
  }
  console.log(addItem('foluke'))
  
  /*9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
  */
  function removeItem(item) {
    removedItem = []
    removedItem.pop(item)
    return (removedItem)
  }
  console.log(removeItem('foluke', 'odus', 'java', 'css'))
  
  /*10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
  */
  function sumOfNumbers(number) {
    sum = 0
    sum = sum + number
    return (sum)
  }
  console.log(sumOfNumbers(5))
  
  /*11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
  */
  function sumOfOdds(num) {
    sumOfOdd = 0
    if (num % 2 == 1) {
      sumOfOdd = sumOfOdd + num
  
    }
    return sumOfOdd
  }
  console.log(sumOfOdds(9))
  
  /*12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
  */
  function sumOfEven(num) {
    sumEven = 0
    if (num % 2 == 0) {
      sumEven = sumEven + num
  
    }
    return sumEven
  }
  console.log(sumOfEven(10))
  
  /*13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
  
  evensAndOdds(100);
  The number of odds are 50.
  The number of evens are 51.
  */
  function evensAndOdds(integer) {
    for (i = 0; i >= 100; i++) {
      if (odd) {
        const odds = integer(i) % 2 == 1
  
        console.log('The number of odds are' + odds)
      } else {
        if (even) {
          const evens = integer(i) % 2 == 0
  
          console.log('The number of evens are' + evens)
        }
      }
    }
  }
  
  
  /*14. Write a function which takes any number of arguments and return the sum of the arguments
  
  sum(1, 2, 3) // -> 6
  sum(1, 2, 3, 4) // -> 10
  */
  function sumArg(a, b, c) {
    return a + b + c;
  }
  console.log(sumArg(1, 2, 3))
  
  //15. Write a function which generates a randomUserIp.
  function randomUserIp() {
    ip = (Math.floor(Math.random() * 255) + 1) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255));
    return (ip)
  }
  console.log(randomUserIp())
  
  //16. Write a function which generates a randomMacAddress
  
  /*17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
  
  console.log(randomHexaNumberGenerator());
  '#ee33df'
  */
  
  /*18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
  
  console.log(userIdGenerator());
  41XTDbE
  */
  
  //Exercises: Level 3
  /*1. Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
  
  userIdGeneratedByUser()
  'kcsy2
  SMFYb
  bWmeq
  ZXOYh
  2Rgxf
  '
  userIdGeneratedByUser()
  '1GCSgPLMaBAVQZ26
  YD7eFwNQKNs7qXaT
  ycArC5yrRupyG00S
  UbGxOFI7UXSWAyKN
  dIV0SSUTgAdKwStr
  '
  */
  
  /*2. Write a function name rgbColorGenerator and it generates rgb colors.
  
  rgbColorGenerator()
  rgb(125,244,255)
  */
  function rgbColorGenerator() {
    colors = 'rgb(' + (Math.floor(Math.random() * 255) + 1) + "," + (Math.floor(Math.random() * 255)) + "," + (Math.floor(Math.random() * 255)) + ')';
    return (colors)
  }
  console.log(rgbColorGenerator())
  /*3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
  */
  
  /*4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
  */
  function arrayOfRgbColors() {
    let arrOfColors = []
    arrColors = 'rgb(' + (Math.floor(Math.random() * 255) + 1) + "," + (Math.floor(Math.random() * 255)) + "," + (Math.floor(Math.random() * 255)) + ')';
    arrOfColors.push(arrColors)
    return (arrOfColors)
  
  }
  console.log(arrayOfRgbColors())
  
  /*5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
  */
  
  /*6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
  */
  
  /*7. Write a function generateColors which can generate any number of hexa or rgb colors.
  
  console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
  console.log(generateColors('hexa', 1)) // '#b334ef'
  console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
  console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
  */
  
  /*8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
  */
  function shuffleArray(array) {
  
  }
  
  /*9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
  */
  function factorial() {
  
  }
  
  /*10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
  */
  function isEmpty() {
  
  }
  
  /*11. Call your function sum, it takes any number of arguments and it returns the sum.
  */
  function sum() {
  
  }
  
  /*12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
  */
  function sumOfArrayItems() {
  
  }
  
  /*13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
  */
  
  /*14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
  
  console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
  ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
  console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
  ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
  console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
    'Not Found'
  */
  function modifyArray(array) {
    if (array.length >= 5) {
      let modifiedArr = array[5].capitalize
      return modifiedArr
  
    } else {
      console.log('item not found')
    }
  }
  console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']))
  
  /*15. Write a function called isPrime, which checks if a number is prime number.
  */
  function isPrime() {
  
  }
  
  /*16. Write a functions which checks if all items are unique in the array.,0+
  */
  
  /*17. Write a function which checks if all the items of the array are the same data type.
  */
  
  /*18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
  */
  function isValidVariable() {
  
  }
  
  /*19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
  
  sevenRandomNumbers()
  [(1, 4, 5, 7, 9, 8, 0)]
  */
  function ranNum() {
    sevenRanNum = []
    sevenNum = (Math.floor(Math.random() * 10)) + "," + (Math.floor(Math.random() * 10)) + "," + (Math.floor(Math.random() * 10)) + "," + (Math.floor(Math.random() * 10)) + "," + (Math.floor(Math.random() * 10)) + "," + (Math.floor(Math.random() * 10)) + "," + (Math.floor(Math.random() * 10));
    sevenRanNum.push(sevenNum)
    return sevenRanNum
  }
  console.log(ranNum())
  
  
  /*20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
  */