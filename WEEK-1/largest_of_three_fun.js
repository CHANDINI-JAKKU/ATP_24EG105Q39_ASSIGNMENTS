function big(a,b,c){
    let bigger=(a>b)?(a>c?a:c):(b>c)?b:c
    return bigger;
}

console.log(big(10,23,56))