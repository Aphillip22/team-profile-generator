//import employee prototype
const employee = require('./Employee');

//create manager constructor which adds to employee prototype
class Manager extends employee {
    constructor(name, id, email, role, office) {
        //retrieve prototype input from Employee.js
        super(name, id, email);
        //add office number details
        this.role = role;
        this.office = office;
    }
//return input for role
getManagerRole() {
    return "Manager";
}
//return input for office number
getOffice() {
    return this.office;
}
};
module.exports = Manager;