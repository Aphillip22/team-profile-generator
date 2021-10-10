//import employee prototype
const employee = require('./Employee');

//create intern constructor which adds to employee prototype
class Intern extends employee {
    constructor(name, id, email, role, school) {
        //retrieve prototype input from Employee.js
        super(name, id, email);
        //add role and school
        this.role = role;
        this.school = school;
    }
//return input for role
getRole() {
    return "Intern";
}
//return input for intern's school
getSchool() {
    return this.school;
}
};
module.exports = Intern;