console.log("JavaScript Properties");

const warrior = {
    name: "Maharana Pratap",
    birthplace : "Kumbhal Gadh",
    mother : "Jayvanta bai",
    father : "Udai Sinh II",
    birthdate : Date("1540-5-9"),
};

console.table(warrior);

warrior.age = 58;
warrior.enemy = "Akbar";

console.log(warrior);

delete warrior.birthdate;

delete warrior["birthplace"];

warrior["Wife"] = "Ajabde pawar";
warrior["Son"] = "Amar Sinh II";

console.table(warrior);

console.log(warrior["Son"]);

console.log(warrior["birthdate"]);

const king = {
    name: "Dashrath",
}

king.sons = ["Ram","Laxman","Bharat","Shatrughna"];

king["Wives"] = ["Kausalya","Sumitra","Kaikeyi"];

console.table(king);

console.clear();
console.log(king);

console.log(king.sons[2]);

console.log(king["sons"][1]);

