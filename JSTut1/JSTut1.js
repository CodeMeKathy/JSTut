// Calculate PI
// Pi = 4/1 - 4/3 + 4/5 - 4/7...
// JS only has a precision of accuracy up to 16 digits.

function calcPI(iterations) {
  let pi = 0, divisor = 1
  for(i=0; i <= iterations; i++) {
    pi = pi +  (4/divisor) - (4/(divisor + 2))
    divisor += 4
  }
  document.getElementById('output1')
  .value = pi.toFixed(10)

}


// Calculate Fibonacci

// Starter Value + Preceding Value

// Ex. startingVal = 1
// (1 + 1) //2 ; (1 + 2) //3; (2 + 3) //5; 8; 13; 21; 24; 34; 55 ..etc.

let fibList = [] 
 
function getFibList(howMany) {
  for(i = 0; i < howMany; i++) {
    fibList[i] = fib(i)
  }
  fibList.shift()// Used to remove first output in the array zero in this case.
  document.getElementById('output1').value = fibList.join(', ')
}

function fib(whichNum) {
  let num1 = 1, num2 = 0, temp,
  i = 0
  while (i < whichNum) {
    temp = num1
    num1 = num1 + num2
    num2 = temp
    i++
  }

  return num2
  
}

// MadLib Generator

  // Create a string with separator to serve as placeholder for user input.
 
let madLibText = "My dear old ~ sat me down to hear some words of wisdom \n 1. Give a man a ~ and you ~ him for a day, but ~ a man to ~ and he'll ~ forever \n 2. He who ~ at the right time can do it again \n 3. Always wear ~ ~ in case you're in a ~ \n 4. Don't use your ~ to wipe your ~ Always have a clean ~ with you"

  // Convert string into an array.

let madLibArray = madLibText.split(' ')



  // Create array for user input.

let inputArray = []

function madLibGen() {
    createInputArray()
    if(checkForMissingInput()) {
      document.getElementById('output1').value = "Enter all values above."
    } else {
      createMadLibSent()
    }
}

function createInputArray() {
  for(i=0; i<= 12; i++){
    inputArray[i] = document.getElementById('i' + i).value
  }
  
}
  // Returns true if user failed to provide and input
function checkForMissingInput() {
  let defaultArrayVals = ['Person', 'Noun', 'Verb', 'Adjective', 'Plural Verb', 'Body Part', 'Event' ]

  for (i=0; i < inputArray.length; i++){
    // Check to see if inputs === defaultArrayVals
     if(defaultArrayVals.indexOf(inputArray[i]) > -1){
       return true 
     }
  }
  return false
}

  // Search for separator === `~` and replace with user input stored in an array.

function createMadLibSent() {
  let arrIndex = 0
  for(i=0; i< madLibArray.length; i++){
    let matchIndex = madLibArray.indexOf('~')
    madLibArray[matchIndex] = inputArray[arrIndex]
    arrIndex++
  }
  // Join all elements within madLibArray and return to output.

  document.getElementById('output1').value = madLibArray.join(' ')
}


