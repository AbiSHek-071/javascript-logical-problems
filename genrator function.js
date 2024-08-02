//generator function

function * a(){
    yield "name";
    yield 21;
}
let b = a();
console.log(b.next().value);
console.log(b.next().value);
