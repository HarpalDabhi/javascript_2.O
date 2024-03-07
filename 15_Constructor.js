console.log("Constructor ");

const abcd = 
["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let word = "";
for (let i = 0; i < 6; i++) {
    const abcd_index =Math.floor(Math.random()*25);
    word += abcd[abcd_index]+Math.round(Math.random()*100);
}

const captcha = (word.slice(0,6));

function captchaGenerate(){
    return captcha;
}

console.log("Upper");
console.log(captchaGenerate());

function Person(name,surname,email,username,password){
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.username = username;
    this.password = password;
    this.captcha = captcha;
};

const Abhishek = new Person("Abhishek","Kanzariya","akanzariya@gmail.com","AbhiKanzariya","A2024K");

const Hiten = new Person("Hiten","Parmar","hparmar@gmail.com","HitParmar","H2024P");

console.log(Abhishek);

const abhishek = JSON.stringify(Abhishek);
console.log(abhishek);





console.table(Abhishek);
console.table(Hiten);