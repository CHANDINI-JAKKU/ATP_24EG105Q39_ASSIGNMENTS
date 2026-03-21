
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
const itEmployees=employees.filter(element=>element.department==="IT")
console.log(itEmployees)
const e2=employees.map(element=>({
  id: element.id,
  name: element.name,
  salary: element.salary,
  department: element.department,
  netSalary: element.salary + element.salary * 0.1
}))
console.log(e2)
const e3=employees.reduce((accumulator,elements)=>accumulator+elements.salary,0)
console.log(e3)
let e4=employees.find(element=>element.salary===30000)
console.log(e4)
let e5=employees.findIndex(element=>element.name==="Neha")
console.log(e5)