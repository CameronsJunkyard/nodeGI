const data = require('./diff.json')
function getEmployeeData(index) {
      return data[index]
}
console.log(getEmployeeData(4))