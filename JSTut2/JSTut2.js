// Declare and initialize:
// -previousValue, newValue, resultValue, mathOperator, numDecimalClicked, memoryStoredValue

// Stores previously provided value if any.
let preVal = ''

// Stores the value of the expression being built.  
let newVal = ''

// Stores the value displayed within the calculator input display window.
let resultVal = ''

// Stores the value of the selected math operator for the expression being built.
let mathOperator = ''

// Stores the boolean value indicating if the decimal button has been clicked.  Built to only allow selection once per expression built.
let decimalClicked = ''

// Stores values we want stored within the app.
let memoryStoredValue = ''

// Create functions to handle button onclick(s): mathBtn


// Called when a numBtn is clicked.
function numBtnPress(num) {
  if(resultVal){
    newVal = num
    resultVal = ''
  } else {
    // Limits the selection of the decimal button to once per expression.
    if(num === '.'){
      if(decimalClicked != true){
        newVal += num
        decimalClicked = true
      }
    } else {
      newVal += num
    }
  }
  document.getElementById('calcInputWindow').value = newVal
}

// Called when a mathBtn is clicked.
function mathBtnPress(operator) {
  // Check to see if there is a previously stored value by checking if resultValue has a value.
    // If not, than store the currentValue(userInput) as the previousValue for the next part of the calculation.
  
  if(!resultVal){
    preVal = newVal
  } else {
    // If yes, than store the resultValue as the previousValue.
    preVal = resultVal
  }
  // Begin building a new expression by resetting all the default variables.
  newVal = ''
  decimalClicked = false

  // Store selected math operator.
  mathOperator = operator

  // Reset to empty to prepare for a new value(s).
  resultVal = ''
  document.getElementById('calcInputWindow').value = ''
}

// Called when the equalBtn is pressed
function equalBtnPress(num) {
  decimalClicked = false

  // Convert string values to floats
  preVal = parseFloat(preVal)
  newVal = parseFloat(newVal)

  switch (mathOperator) {
    case '+':
      resultVal = preVal + newVal
      break;

    case '-':
      resultVal = preVal - newVal
      break;

    case '*':
      resultVal = preVal * newVal
      break;
    
    case '/':
      resultVal = preVal / newVal
      break;

    // If equals is selected without a value return newValue.
    default:
      resultVal = newVal;

  }
  // Store the currentValue(resultValue) as the previousValue
  preVal = resultVal
  // Display resultValue to calcInputWindow for display.
  document.getElementById('calcInputWindow').value = resultVal
}

// Clear all variables and reset to default.
function clearBtnPress() {
  // Reset back to defaults
  preVal = ''
  newVal = ''
  resultVal = ''
  mathOperator = ''
  decimalClicked = 'false'
  document.getElementById('calcInputWindow').value = 0
}

// Store the currentValue seen in the calcInputWindow.
function copyBtnPress(num) {
  memoryStoredValue = document.getElementById('calcInputWindow').value
}



function pasteBtnPress(params) {
  if(memoryStoredValue) {
    document.getElementById('calcInputWindow').value = memoryStoredValue
    newVal = memoryStoredValue
  }
}
