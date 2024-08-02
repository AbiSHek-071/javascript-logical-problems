//contructor function 
function a(name,age){
    
    this.name = name;
    this.age = age;
}
let obj1 = new a("abhishek",20);
console.log(obj1);

//factory function 
function b(name,age){
    return{
        name:name,
        age:age,
    }
}

let obj2 = b("lekshmi shaly",21);
console.log(obj2);
