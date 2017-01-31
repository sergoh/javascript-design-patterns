//Constructor usually starts with Capital, to show its not just a function.
// It can or cannot have parameters.
function Pokemon (name, type){
  this.name = name;
  this.type = type;

  this.speak = function(){
    return "I am " + this.name + "and I am a " + this.type + "pokemon";
  };
}

var charmander = new Pokemon("Charmander", "Fire");
var bulbasuar = new Pokemon("Bulbasuar", "Grass");

//now we want to check that they are instances of Pokemon
var isPokemon = charmander instanceof Pokemon; //true

//PROBLEM
//this way, ever pokemon object we create we also create a seperate speak function
//if we compare the functions objects not the result
var isSame = charmander.speak === bulbasuar.speak; // false
// they are completly different function object, and can eat up for memory
//they can also run into inhertance issues

//FIX
//Define methods on the prototype
function BetterPokemon (name, type){
  this.name = name;
  this.type = type;
}

BetterPokemon.prototype.speak = function(){
  return "I am " + this.name + "and I am a " + this.type + "pokemon";
}

//every property you create on the prototype is shared between all inhereted object;
