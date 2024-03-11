function first(){
    console.log("first");
}

function second(){
    console.log("second");
}

first();
second();

function wait_while(no1,no2,callback){
    setTimeout(() => {
        sum = no1 + no2;
        console.log(sum);
    }, 5000);
}

wait_while(50,42,output());

function output(){
    console.log("Output");
}

let bdo = "Harpal";
for (const iterator of bdo) {
    setTimeout(() => {
        console.log(iterator);
    }, 1000);
}

arr = [50,15,26,45,78];

arr.forEach(element => {
    setTimeout(() => {
        console.log(element);
    }, 1000);
});

let i=0;
setInterval(() => {
    console.log(Math.round(Math.random()*100));
    setTimeout(love, 2000);
    i++;
}, 1000);



function love(){
    console.log("I love you");
}



