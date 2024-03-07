console.log("Object define property");

const obj = {counter : 0};

Object.defineProperty(obj, "Reset",{
    get : function(){
        this.counter = 0;
    }
});

Object.defineProperty(obj, "Increment",{
    get : function(){
        this.counter++;
    }
});

Object.defineProperty(obj, "Decrement",{
    get : function(){
        this.counter--;
    }
});

Object.defineProperty(obj, "Add", {
    set : function(value){
        this.counter += value;
    }
});

Object.defineProperty(obj, "Substract", {
    set : function(value){
        this.counter -= value;
    }
});

console.log(obj);

obj.Reset;

console.log(obj);

obj.Add = 10;
console.log(obj);

obj.Substract = 2;
console.log(obj);

obj.Reset;
console.log(obj);