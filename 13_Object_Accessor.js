console.log("Hello Everyone !! Learn Object Accessor");

// Create an object

const maratha = {
    Name : "Shivaji Maharan",
    Father: "Shahji Bhonsle",
    Mother : "Jijabai Saheb",
    Wives : ["Saibai Nimbalkar", "Soyarabai ", "Kashibai", "Lakshmibai "],
    Sons : ["Sambhaji ", "Rajaram"],
    Birth : "February 19, 1630",
    Birthplace : "Shivneri Fort, Pune district, Maharashtra, India",
    Death : "April 3, 1680",
    Age : 50,
    get birth_place(){
        return this.Birthplace;
    },
    set original_name(name){
        this.Name = name;
    },
    get original_name_get(){
        return this.Name;
    },
    get shiva_name(){
        return this.Name.toUpperCase();
    }
}

console.log("\n");
console.log(maratha.birth_place);

maratha.original_name = "Chhatrapati Shivaji Maharaj";


console.table(maratha.Name);

console.log(maratha);

console.log(maratha.shiva_name);

