console.log("Map : ");

const fruits = new Map([
   ["Apple","Safarjan"],
   ["Banana","Kela"],
   ["Alone","Akela"],
   ["Exist","Astitva"],
   ["New","Naya"],
]);

console.table(fruits);

fruits.set("Yellow","Pila");

console.log(fruits.size);

console.table(fruits);

console.log(fruits.get("Alone"));

console.log(fruits.delete("Banana"));
console.log(fruits.delete("Alone"));
console.table(fruits);

console.log(fruits.has("New"));
console.log(fruits.has("News"));