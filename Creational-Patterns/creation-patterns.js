var obj1 = new Object();
var obj2 = {}; // object litteral, uses less bytes

//how to assign properties

//dot syntax

obj2.firstName = "Sergio";
obj2["lastName"] = "Lopez"; //Key value Pair

//both are interchangable
//why use square brackets? Allows you to use weird characters or resevered words, but don't.

//Way 3 ECMA 5
//can use to make getter, setters, readonly, writable.
Object.defineProperty('obj3',"country",{
  value: "USA"
});

//way 4 Multiple properties

Object.defineProperties('obj4',{
  twitter:{
    value: "MrSerGoh"
  },
  email:{
    value:"sergoh@outlook.com"
  }
});

//Best way, especially if you already know the properties of the Object
var bestObject = {
  firstName: "Sergio",
  lastName: "Lopez"
};

/*---------------------------------------------------------------*/


//Creating Objects using Create Methond from ECMA Script 5
//Allows you to create objects based on other Objects
//What is is actually doing is creating a prototype chain, they are based off each others prototypes

var foo = {};
//var bar = Object.create(Object().prototype);

//Javascript does not have Methods, they have properties that contain a function object

var pokemon = {
  name: "Pokemon",
  evovled: false,
  health: 50,
  attack: function(){
    return this.name + " is attacking and has " + this.health + "hp left";
  }
};

//create a new pokemon with the same properties and same attack Methods without copy and pasting

var squirtle = Object.create(pokemon,{
  name: { value: "Squirtle" },
  bite: {
        value: function(pokemon){
        return this.name + " bites " + pokemon.name;
      }
  }
});

var wartortle = Object.create(squirtle, {
  name: { value: "Wartortle"},
  evovled: { value: true },
  health: { value : 100 }
});

//console.log(pokemon.attack());
console.log(squirtle.bite(wartortle));
console.log(wartortle.health);

//In the end we dont always want to use object create or object litterals if we're trying to do inhertance. we can use CONSTRUCTOR pattern.
