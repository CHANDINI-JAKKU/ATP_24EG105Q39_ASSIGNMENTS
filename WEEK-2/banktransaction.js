const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
const t1=transactions.filter(element=>element.type==="credit")
console.log(t1)
const t2=transactions.map(element=>element.amount)
console.log(t2)
const t3=transactions.reduce((accumulator,element)=>{
if(element.type==="credit"){
  return accumulator+element.amount
}
else{
  return accumulator-element.amount
}
},0)
console.log(t3)
const t4=transactions.find(element=>element.type==="debit")
console.log(t4)
const t5=transactions.findIndex(element=>element.amount===10000)
console.log(t5)