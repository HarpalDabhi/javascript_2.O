console.log("Call methods");

const person = {
    fullName :  function (){
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName : "Dabhi",
    lastName : "Harpal",
}

const person2 = {
    firstName : "Makawana",
    lastName : "Janak",
};

const person3 = {
    firstName : "Kagadiya",
    lastName : "Mehul",
};

console.log(person.fullName.call(person1));
console.log(person.fullName.call(person3));

const book  = {
    bookWrote  : function (bookname,bookwriter){
        console.log(`book: ${this.bookname} was written by ${this.bookwriter}.`);
    }
}

const book_1 = {
    bookname : "Purushottam",
    bookwriter : "Zaverchand Meghani"
}

const book_2 = {
    bookname : "Hu ja bhagat",
    bookwriter : "Dhumketu"
}

const book_3 = {
    bookname : "Karanghelo",
    bookwriter : "Suresh Dalal"
}

book.bookWrote.call(book_1,"Hello","World");