let arr = ["Banana","Apple","Cat","Dog","Element","Fish","Grapes"];

console.log(arr.length);

console.log(arr.toString());

console.log(arr.join(" - "));

console.log(arr.pop());

console.log(arr.push("Kiwi"));

console.log(arr);

console.log(arr.shift());

console.log(arr.unshift("Keri"));

console.log(arr.unshift("Lemon"));
console.log(arr.unshift("Orange"));

console.log(arr);

console.log(arr[3]="Watermelon");

let boys = ["Vishal","Malay","Vipul","Harpal","Mehul"];

let girls = ["Janak","Purvi","Kajal","Komal","Kinjal"];

const boys_girls = boys.concat(girls);
console.log(boys_girls);

let all = boys + girls;
console.log(all);

console.log(typeof all);

let arr_flat = [[12,23],[45,56],[89,25]];

console.log(arr_flat.flat());

console.log(girls.includes("Purvi"));

console.log(boys_girls.sort());

console.log(boys_girls.reverse());
