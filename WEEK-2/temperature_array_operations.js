const temp=[32,35,28,40,38,30,42];
const t1=temp.filter(element=>element>35)
console.log("temperatures above 35",t1)//printing temperatures greater than 35
const t2=temp.map(element=>(element*1.8)+32)
console.log("converting all temperatures from celsius->fahrenheit")
console.log(t2)//converting temperatures celsius to fahrenheit
const avg=temp.reduce((accumulator,element)=>accumulator+element)/temp.length
console.log("calculating average temperature",avg)//calculating average temperatures
let t3=temp.find(element=>element>40)
console.log("finding first temperature above 40", t3)//temperatures greater than 40
let t4=temp.findIndex(element=>element===28)
console.log("finding index of temperature 28",t4)//finding index of temperature 28