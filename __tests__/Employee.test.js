const Employee = require("../lib/Employee");

describe("Employee class", () => {

  it("getRole method should return the type of role", () => {
    expect(new Employee("Test Employee",1000,"test@test.com").getRole()).toBe("Employee");
  });
    
  it("getName method should return a string", () => {
    expect(new Employee("Test Employee",1000,"test@test.com").getName()).toBe("Test Employee");
  });
    
  it("getId method should a positive number", () => {
    expect(new Employee("Test Employee",1000,"test@test.com").getId()).toBe(1000);
  });
    
  it("getEmail method should an email address", () => {
    expect(new Employee("Test Employee",1000,"test@test.com").getEmail()).toBe("test@test.com");
  });
});
