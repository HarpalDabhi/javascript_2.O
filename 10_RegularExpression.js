console.log("Regular Expression");

let original = "Hello, I am a Student. All the Students are there study with other Students";
console.log(original.search(/student/i));

let updated = original.replace(/Student/g,"Engineer");
console.log(updated);

let result = original.match(/[aioue]/g);
console.log(result);

number = "7894562102654102354461629";
let find_range_num = number.match(/[2-4]/g);
console.log(find_range_num);