//Requires Employee class constructor
const Employee = require('./Employee');

class Manager extends Employee {
    constructor (id, name, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber; 
    }

    getRole () {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

//Exports general from Employee and espescifics methods from Manager
module.exports = Manager; 