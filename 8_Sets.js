const letters = new Set(["A", "B", "C", "D","E","F","G","H","I","J"]);

letters.add("K")
letters.add(["L", "M", "N", "O", "P", "Q"]);

console.log(letters);

letters.forEach(element => {
    console.log(element);
});

console.log(typeof letters);

console.log(letters.values());

console.log(letters.has("A"));
console.log(letters.has("Z"));

console.log(letters.size);

console.log(letters.delete("A"));
console.log(letters.delete("B"));
console.log(letters.delete("C"));
console.log(letters.delete("D"));

console.log(letters.size);

console.log(letters);

console.clear();

let characters = new Set(["@","@","@","@","@","@","$","$","!","^"]);

console.log(characters);

console.log(characters.delete("@"));
console.log(characters);

