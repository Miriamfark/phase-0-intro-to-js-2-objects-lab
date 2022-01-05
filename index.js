const employee = {
    name: "Miriam",
    streetAddress: "12 Ofira"
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    const newEmployee = {...employee}
    newEmployee.name = "Sam"
    newEmployee.streetAddress = "11 Broadway"
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam"
    employee.streetAddress = "12 Broadway"
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const deletedEmployee ={...employee}
    delete deletedEmployee.name
    return deletedEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
}
