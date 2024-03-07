console.log("Objects methods");

const Mahabharat = {
    writer : "Ved Vyas",
    parts: 18,
    story : "Kaurava and Pandava fight together and lost their own family members",
    heros: "Pandava",
    villains : "Kauravas",
    director: "Krishna",
    friend : "Karna",
    killed : 8.7e13,
    isFinite : true,
    warrios : ["Abhimanyu","Ghatotkach","Uttar","Vrisketu","Aswatthama"],
    summary : function (){
        return `${this.writer} wrote Mahabharat which is divided into ${this.parts} and fight between ${this.heros} and ${this.villains}`;
    },
    killed_number : function () {
        console.log(`In war of Mahabharat ${this.killed.toPrecision()} people were killed.`);
    }
}

console.log(Mahabharat.summary());

Mahabharat.killed_number();

console.clear();


const TaTa = {
    Founde : 1868,
    Headquaters : "Mumbai",
    Industries : ["Salt","Steel","Autom mobiles","Information Technology","Telecommunication"],
    list_out : function(){
        this.Industries.forEach(indu => {
            console.log("Industry",indu.toUpperCase());
        });
    }
};

TaTa.list_out();

TaTa.nameOut = function(){
    console.log(this.Founde);
};

console.log(TaTa.nameOut());

const mahabharat = JSON.stringify(Mahabharat);

console.log(mahabharat);



