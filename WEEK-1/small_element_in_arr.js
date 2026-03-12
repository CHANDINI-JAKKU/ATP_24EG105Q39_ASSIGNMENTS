let arr = [98,78,65,98];
let smallest = arr[0];   
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
console.log(smallest);