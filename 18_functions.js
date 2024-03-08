console.log("Functions");

function square(x){
    return x*x;
}

console.log(square(25));

function cube(x){
    console.log(`${x}^3 : ${x**3}`);
}

cube(25);

(function hello(){
    console.log("Hello Namaste");
})();

function multiplication(x, y){
    return x*y;
};

console.log(multiplication(25,2)*2);

console.log(typeof multiplication(1,2));

const sub= (x,y)=>{ return x-y};

console.log(sub(25,10));

const mps = (kmph)=>{ console.log(`${kmph} km/hrs = >${(kmph*5/18).toFixed(2)} m/s`);};

mps(53);