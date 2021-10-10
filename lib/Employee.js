//super constructor for employee prototype
class Employee {
    constructor(name, id, email) {
        this.name=name;
        this.id=id;
        this.email=email;
    }

//return data for employee details input
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