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
