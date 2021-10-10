const inquirer = require('inquirer');
const employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, role, office) {
        //retrieve prototype input from Employee.js
        super(name, id, email, role);
        //add office number details
        this.office = office;
    }
//return input for office number
getOffice() {
    return this.office;
}
};
module.exports = Manager;