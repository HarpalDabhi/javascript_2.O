console.log("Object definition");

const person = {};
console.log(typeof person);

console.log(person);

console.log(person.length);

person.name = "Anant";
person.surname = "Chauhan";
person.email = "hamster@gmail.com";
person.phone = 9956482501

console.table(person);

const x= person;

x.age = 18;

console.table(person);