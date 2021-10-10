//import employee prototype
const employee = require('./Employee');

//create manager constructor which adds to employee prototype
class Engineer extends employee {
    constructor(name, id, email, role, github) {
        //retrieve prototype input from Employee.js
        super(name, id, email);
        //add role and github
        this.role = role;
        this.github = github;
    }
//return input for role
getRole() {
    return "Engineer";
}
//return input for github number
getGithub() {
    return this.github;
}
};
module.exports = Engineer;