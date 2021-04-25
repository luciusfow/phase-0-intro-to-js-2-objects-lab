// Write your solution in this file!
const employee = {name:'james', streetAdress: '169 kelly rd'}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee}
    newObj[key] = value
    return newObj
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
   const newEmployee = Object.assign({}, employee, key)
   delete newEmployee[key]
   return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    Object.assign({}, employee, key)
    delete employee[key]
    return employee
}