//GOAL: Code Re-use
//HOW: inhertance
//True form is to chain-prototypes and inhert DataTypes

function Pokemon (name, color){
  this.name = name;
  this.color = color;
}

Pokemon.prototype.identify = function(){
  console.log("I am " + this.name + " and I am a " + this.color);
};

//we might want to create more specific pokemon, like maybe a First Generation Pokemon

function GenerationOnePokemon(name, color,  type){
  //also need to initialize the name and color properties
  Pokemon.call(this, name, color);
  this.type = type;
}

//first we setup protoype chain
//USE to need to do this GenerationOnePokemon.protoype =  new Pokemon(), but now

GenerationOnePokemon.prototype = Object.create(Pokemon.prototype);

GenerationOnePokemon.prototype.classify = function() {
  console.log("I am " + this.name + " and I am a "+ this.type + " generation one pokemon");
};

var pichu = new Pokemon("pichu","yellow");

var pikachu = new GenerationOnePokemon("pickachu", "yellow","electric");

//SHORTCOMINGS
//Syntax : for one thing you have to initialize the parent Constructor in the child Constructor
//Also have to set up the prototype chain
//Should be less used in ECMA Script 6 where we get classes and those can extend
//Also Re-use is not optimal 
