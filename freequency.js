//find the freequency , unique values and duplicate values of an array

const arr = [2,5,2,6,6,4,3,2,7,4,3,8,9,32,2];
const frequency = {};

arr.forEach((value)=>{
    if(frequency[value]){
        frequency[value]++;
    }
    else{
        frequency[value] = 1;
    }
})

console.log(frequency);

let unique = arr.filter((value)=>{
    return frequency[value]===1;
})
console.log(unique);

let duplicate = arr.filter((value,index)=>{
    return frequency[value]>1  && arr.indexOf(value) === index;
})
console.log(duplicate);
