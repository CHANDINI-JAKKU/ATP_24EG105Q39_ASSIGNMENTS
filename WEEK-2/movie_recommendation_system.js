const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
const m1=movies.filter(elements=>elements.genre==="Sci-Fi")
console.log(m1)
const m2=movies.map(element=>`${element.title}(${element.rating})`)
console.log(m2)
const m3=movies.reduce((accumulator,element)=>accumulator+element.rating,0)/movies.length
console.log(m3)
const m4=movies.find(element=>element.title==="Joker")
console.log(m4)
const m5=movies.findIndex(element=>element.title==="Avengers")
console.log(m5)