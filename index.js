

// Write your solution in this file!
const employee = {
    name: "Sam",
    address: "11 Broadway" 
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = {...employee}
    newObject[key] = value
    return newObject
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee
}
    
function destructivelyDeleteFromEmployeeByKey(employee, key) {
   employee.address = "12 Broadway"
     delete employee.name
     return employee
}