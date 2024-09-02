const obj = {
    a: [2, 4, 5, 6],
    b: " Abhishek",
    c: [5, 7, 9, 9],
    d: "asdad",
};
let sum = 0;
for (let key in obj) {
    if (Array.isArray(obj[key])) {
        obj[key].forEach((el, ind, arr) => {
            sum = sum + el;
        });
        obj[key] = sum;
        sum = 0;
    }
}
console.log(obj);


