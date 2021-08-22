const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const employee = new Engineer("Test Employee", 1000, "test@test.com", "username");

describe("Engineer class", () => {
    
  it("Extendends employe constructor", () => {    
      expect(employee).toBeInstanceOf(Employee);
  });
  
  describe("getRole() to select correct class ", () => {
      it("should return Engineer", () => {
          expect(employee.getRole()).toBe("Engineer");
      });
  });

  describe("getGithub() to add username ", () => {
      it("returns username if is correct", () => {
          expect(employee.getGithub()).toBe("username");
      });
  });
});