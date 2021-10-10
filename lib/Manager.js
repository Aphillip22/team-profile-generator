const employee = require('./Employee');
const engineer = require('./Engineer');
const intern = require('./Intern');

class Manager extends employee {
    constructor(name, id, email, role, office) {
        //retrieve prototype input from Employee.js
        super(name, id, email);
        //add office number details
        this.role = role;
        this.office = office;
    }
//return input for office number
getManagerRole() {
    return "Manager";
}
getOffice() {
    return this.office;
}
};
module.exports = Manager;