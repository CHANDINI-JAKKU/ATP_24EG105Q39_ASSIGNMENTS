/*
1. Insert new Emp at 2nd position
2. Remove an emp with name "Kiran"
3.Change the last mark 95 to 75 of emp  "Sneha"
*/
const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];
employees.splice(1,0,{eno:110,name:"chandini",marks:[90,98,87]})
console.log("Inserted element in second position")
console.log(employees)
let index;
for (let v of employees) {
  if (v.name === "Kiran") {
    index = employees.indexOf(v);
  }
}
employees.splice(index, 1);
console.log("Kiran employee is removed")
console.log(employees)
for (let v of employees) {
  if (v.name === "Sneha") {
    v.marks[2] = 75;   
  }
}
console.log("Sneha marks is changed")
console.log(employees);
