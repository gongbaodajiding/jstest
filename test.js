function Person(){
    this.name;
}
Person.prototype.say=function(){
    console.log("hello");
}

var person=new Person();

console.log(Person.__proto__); // 指向Function.prototype
console.log(Function.prototype);

console.log(Person.prototype.__proto__); // 指向Object.prototype
console.log(Object.prototype);

console.log(person.__proto__); // 指向Person.prototype
console.log(Person.prototype);

console.log(Person.prototype.constructor); // 指向Person()
console.log(Person);