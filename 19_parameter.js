console.log("Parameter : ");

function args_three_parameters(name,email,phone){
    console.log("Name  : " + name);
    console.log("Email : " + email);
    console.log("Phone : " + phone);
};

args_three_parameters("Dabhi Harpal","harpaldabhi@gmail.com",9099941856);

function agrs_defauls_val_set(name,surname){
    if (surname === undefined) {
        surname = "Pespected";
    }

    console.log(`Hello ${surname} ${name}`);
}

agrs_defauls_val_set("Krishna","Dabhi");


function find_force(mass,gravity_force = 9.8){
    console.log(`F =${(mass*gravity_force).toFixed(2)} kgm/s2`);
}

find_force(24,10);

find_force(24);

function sum_numbers(...nums){
    let sum = 0;
    for (const no of nums) {
        sum += no;
    }

    console.log(nums.length + " : "+sum);
}

sum_numbers(10,20,30,40);

let x = own_function();

function own_function(){
    return this;
}

console.warn(x);

