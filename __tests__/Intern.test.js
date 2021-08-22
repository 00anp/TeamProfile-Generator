const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

const employee = new Intern("Test Employee", 1000, "test@test.com", "School");

describe("Intern class", () => {
    
  it("Extendends employe constructor", () => {    
      expect(employee).toBeInstanceOf(Employee);
  });
  
  describe("getRole() to select correct class ", () => {
      it("should return Intern", () => {
          expect(employee.getRole()).toBe("Intern");
      });
  });

  describe("getSchool() to add school ", () => {
      it("returns School if is correct", () => {
          expect(employee.getSchool()).toBe("School");
      });
  });
});
