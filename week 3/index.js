// Definition of the function EmployeeInfo
function EmployeeInfo(name, Salary) {
    console.log("Wellcome " + name + ", Your monthly Salary is " + Salary);
}

// Arrow Function for Skills
const EmpSkills = (skills) => {
    console.log("Expert in " + skills);
};

console.log("This is my first progame");

var EmpName = "John";
var EmpSalary = 50000;

// Calling the EmployeeInfo function
EmployeeInfo(EmpName, EmpSalary);
EmpSkills("java");

// Importing local modules StudentInfo.js and Person.js
const student = require('./StudentInfo');
const person = require('./Person');

// Using functions and variables from StudentInfo.js
console.log("Student Name: " + student.getName());
console.log(student.Location());
console.log(student.dob);
console.log("Grade: " + student.Studentgrade());
console.log("Grade is " + student.Studentgrade(55));

// Creating and using the Person class from Person.js
person1 = new person("Jim", "USA", "myemail@gmail.com");
console.log("Using Person Module", person1.getPersonInfo());

console.log("Programe ended");
