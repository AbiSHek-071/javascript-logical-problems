const arr = [2, 3, 4, 5, 51, 57, 52, 53, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const newarr = [];
for (let i = 0; i < arr.length; i++) {
    let isprime = true;
    if (arr[i] <= 1) {
        isprime = false;
    }
    for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
        if (arr[i] % j === 0) {
            isprime = false;
            break;
        }
    }
    if (isprime) {
        newarr.push(arr[i]);
    }
}

let largestPrime = 0;
for (let i = 0; i < newarr.length; i++) {
    if (largestPrime < newarr[[i]]) {
        largestPrime = newarr[i];
    }
}
console.log(largestPrime);
