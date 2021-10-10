const inquirer = require('inquirer');
const engineer = require('./Engineer');
const intern = require('./Intern');
const manager = require('./Manager');

class Employee {
    constructor(name, id, email) {
        this.name=name;
        this.id=id;
        this.email=email;
    }
//questions to obtain employee data

getName() {
    return this.name;
}
getId() {
    return this.id;
}
getEmail() {
    return this.email;
}
getRole() {
    return "Employee";
}
};
module.exports = Employee;