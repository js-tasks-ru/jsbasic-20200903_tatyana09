/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let str1 = str.charAt(0).toUpperCase();
  str = str1 + str.slice(1);
  return str;
}
