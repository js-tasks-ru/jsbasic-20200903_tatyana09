/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n){
  var result = 1;
  while(n){
      result =result*n--;
  }
  return result;
}
