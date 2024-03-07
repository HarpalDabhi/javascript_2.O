console.log("hello world");

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

console.log(text.charAt(1));

console.log(text.charCodeAt(0));

console.log(text.at(0));

console.log(text.at(-1));

text = "Apple, Banana, Cat";
console.log(text.slice(7,15));

console.log(text.substring(7,15));

console.log(text.substr(7,15));

let letter ="HeLLo I am YouR Love Not the CruSH UnderstanD";

console.log(letter.toLowerCase());
console.log(letter.toUpperCase());

console.log(letter.concat(" ",text));   

console.clear();

let message = "                Hello World                  ";
console.log(message);
console.log(message.trim());

console.log(letter.padStart(4," "));

console.log(text.repeat(2));

console.log(text.replace("Apple","Safarjan"));

