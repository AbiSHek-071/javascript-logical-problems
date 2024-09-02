let str = "apple said hello ";

let newstr = str
    .split("")
    .filter((x, i, arr) => {
        return arr.indexOf(x) === i;
    })
    .join("");
console.log(newstr);
