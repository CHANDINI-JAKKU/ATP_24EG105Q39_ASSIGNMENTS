const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
const passedstudents=students.filter(element=>element.marks>=40)
console.log("Passed Students: ",passedstudents)
const studentwithgrades=students.map(element=>{
    let grade;
    if(element.marks>=90)
        grade="A"
    else if(element.marks>=75&&element.marks<90)
        grade= "B"
    else if(element.marks>=60&&element.marks<75)
        grade= "C"
    else
        grade= "D"
    return {
    id: element.id,
    name: element.name,
    marks: element.marks,
    grade: grade
  };
})
console.log(studentwithgrades)
const averagemarks=students.reduce((accumulator,element)=>accumulator+element.marks,0)/students.length;
console.log("Average Marks:",averagemarks)
const studentScored92=students.find(element=>element.marks===92)
console.log("Student Scored 92: ",studentScored92)
const kiranIndex=students.findIndex(element=>element.name==="Kiran")
console.log("Index of kiran: ",kiranIndex) 