const courses=["javascript","react","node","mongodb","express"];
const c1=courses.filter(element=>element.length>5);
console.log(c1)
const c2=courses.map(element=>element.toUpperCase())
console.log(c2)
const c3=courses.reduce((acc,course)=>acc+(acc ? " | " : "") +course.toUpperCase(),"")
console.log(c3)
const c4=courses.find(element=>element==="react")
console.log(c4)
const c5=courses.findIndex(element=>element==="node")
console.log(c5)