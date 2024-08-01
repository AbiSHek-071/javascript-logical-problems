const obj = {
    a:21,
    b:33,
    c:44
};

const arr = Object.values(obj);
let [largest,secondlargest] = arr.reduce(([largest,secondlargest],curr)=>{
    if(largest<curr){
        secondlargest = largest;
        largest = curr;
    }
    else if(secondlargest < curr){
        secondlargest = curr;
    }
    return [largest,secondlargest]
},[-Infinity,-Infinity])
console.log(largest);
console.log(secondlargest);
