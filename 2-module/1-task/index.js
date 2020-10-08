 /**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  for(let key in salaries){
    if(typeof salaries[key] == 'number'){
      let sum = 0;
      sum += salaries[key];
    }else if (typeof salaries[key] !== 'number'){
      return 0;
    }
  }
}
