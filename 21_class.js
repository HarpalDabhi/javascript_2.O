class Car{
    constructor(name,brand){
        this.name = name;
        this.brand = brand;
    }
}

const car_1 = new Car("Maruti","Tesla");
const car_2 = new Car("Audi","Tesla");

console.log(car_1.name);
console.log(car_1.brand);

class War{
    constructor(protecter,attacker,place,time){
        this.protecter = protecter;
        this.attacker = attacker;
        this.place = place;
        this.time = time;
        this.attack = attack();
        function attack(){
            let result =(`In ${time} between ${protecter} and ${attacker} a fought a battle of  ${place}.`);

            return console.log(result);
          
        };
    }
}

const war_1 = new War("Krishna","Kans","Mathura",-206);

war_1.attack;
console.log(war_1.attacker);