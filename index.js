// Code your solutions in this file
const employee = {
    name: Sam,
    streecAddress:  '1Broadway'
};
function updateEmpolyeeWithkenyaandValue(employee, key, values) {
    return Object.assign({}, employee, {[key]: values});
};
function destructivelyUpdateEmployeewithkeyvalue(employee, key, values) {
    employee[key] = values
    return employee;
}
function deletedFromEmployeebykey(employee, key) {
    const newobj = {...employee}
    delete newobj[key];
    return newobj;
}
function destructivelyDeleteFromEmployeeBykey(employee, key, values){
    delete employee[key];
    return employee;
}