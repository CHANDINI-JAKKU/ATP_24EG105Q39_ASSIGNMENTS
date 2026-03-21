function fun_arrsearch(arr,k){
for(let i=0;i<arr.length;i++){
    if(arr[i]==k){
       return i;
    }
}
return "not found";
}
let arr=[1,2,3,4,5]
console.log(fun_arrsearch(arr,2))
console.log(fun_arrsearch(arr,10)) 