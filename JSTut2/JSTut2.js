// Declare and initialize:
// -previousValue, newValue, resultValue, mathOperator, numDecimalClicked, memoryStoredValue

let preVal = ''
let newVal = ''
let resultVal = ''
let mathOperator = ''
let decimalClicked = ''
let memoryStoredValue = ''

// Create functions to handle button onclick(s): mathBtn


function copyBtnPress(num) {
  memoryStoredValue = document.getElementById('calcInputWindow').value
}

function pasteBtnPress(params) {
  if(memoryStoredValue) {
    document.getElementById('calcInputWindow').value
    newVal = memoryStoredValue
  }
}

function mathBtnPress(operator) {
  
}

function numBtnPress(num) {
  
}

function equalBtnPress(num) {
  
}

function clearBtnPress() {
  // Reset back to defaults
  let preVal = ''
  let newVal = ''
  let resultVal = ''
  let mathOperator = ''
  let decimalClicked = 'false'
  document.getElementById('calcInputWindow').value = 0
}
