function findsum(...a){
let sum=0
    for(let i of a){
sum=sum+i;
    }
    console.log(sum)
  //let sum=a.reduce((acc,Element)=>acc+Element)
  //console.log(sum)
}
findsum(1,2,3,4,5)