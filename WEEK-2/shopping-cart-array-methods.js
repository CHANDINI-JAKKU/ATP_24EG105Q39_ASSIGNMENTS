const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true}
];
const products=cart.filter(element=>element.inStock===true)
console.log(products)
const producttotal=cart.map(element=>({
  name:element.name,
  totalPrice:element.price*element.quantity
}))
console.log(producttotal)
const grandtotal=cart.reduce((accumulator,element)=>accumulator+element.price*element.quantity,0)
console.log(grandtotal)
const mousedetails=cart.find(element=>element.name==="Mouse")
console.log(mousedetails)
const keyboardindex=cart.findIndex(element=>element.name==="Keyboard")
console.log(keyboardindex)