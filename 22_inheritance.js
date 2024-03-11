class Gujarat{
    constructor(population,area,districts,talukas){
        this.population = population;
        this.area = area;
        this.districts = districts;
        this.talukas = talukas;
    }

    population_line(){
    console.log(`Population : ${this.population}`);
   }
}

const guj = new Gujarat(600000,32450,33,252);

guj.population_line();

class Rajkot extends Gujarat{
    constructor(population,area,company,colleges){
        super(population,area);
        this.company = company;
        this.colleges = colleges;

        function about_city(){
            let result =
            "Company :"+ this.company + 
            " College :"+this.colleges +
            "Area :"+ this.area + 
            "Population :"+ this.population;
         

            return console.log(result);
        }
    }
}

const rajkot = new Rajkot(500,7000,"It","rk");
console.log(rajkot.population);