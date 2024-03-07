const numbers = [2,6,7,9,4,2,5];

numbers.forEach(element => {
    console.log(element);
});


function factorial(num){
    fact = 1;
    if (num==0 || num==1){
        return 1;
    }else{
       for(let i=1; i<=num; i++){
        fact=fact*i;
       }
       return fact;
    }
}

const fact_numbers = numbers.map(factorial);

console.log(fact_numbers);

let some_reminder = fact_numbers.some(value_over_18);

function value_over_18(value){
    return value%5==0;
}

console.log(some_reminder);

let string_arr = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

console.log(string_arr);

let enrties = string_arr.entries();
console.log(enrties);