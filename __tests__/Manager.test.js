const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

const employee = new Manager("Test Employee", 1000, "test@test.com", 5554444333);

describe("Manager class", () => {
    
  it("Extendends employe constructor", () => {    
      expect(employee).toBeInstanceOf(Employee);
  });
  
  describe("getRole() to select correct class ", () => {
      it("should return Manager", () => {
          expect(employee.getRole()).toBe("Manager");
      });
  });

  describe("getOfficeNumber() to add office number ", () => {
      it("returns 5554444333 if is correct", () => {
          expect(employee.getOfficeNumber()).toBe(5554444333);
      });
  });
});


