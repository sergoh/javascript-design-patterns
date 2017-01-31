//WHY MIXIN: True inhertance coems from chaining, but thats not always good. Especially with lots of chains
//Could affect performance
//MIXIN makes multiple inhertance easy

//MAKE OUR OWN EXTEND LIKE JQUERY

function extend(target){

  if(!arguments[1]){
    return;
  }
  for (var ii = 1, ll = arguments.length; ii < ll; ii++){
    var source = arguments[ii];

    for(var prop in source){
      if(!target[prop] && source.hasOwnProperty(prop)){
        target[prop] = source [prop];
      }
    }
  }
}

function Person(name){
  this.name = name;
}

function Dog(name){
  this.name = name;
}

var speaker = {
  speak: function(){
    return this.name +" i am speaking";
  }
};

var mover  = {
  walk: function(){
    return this.name + " is walking";
  },
  run: function(){
    return this.name + " is running";
  }
};

var arithmetic = {
  add: function(){
    return this.name + " is adding numbers together";
  },
  multiply: function(){
    return this.name + " is multiplying numbers together";
  }
};
//MIXIN CONCEPT take an object and mix in the function of another object
//Take Person and Dog protoype and mix in speaker and mover
//Like JQuery's extend

//extend(Person.prototype, speaker, mover,arithmetic);
//extend(Dog.prototype, speaker, mover);

extend(Person.prototype, speaker, mover,arithmetic);
extend(Dog.prototype, speaker, mover);

var sergoh = new Person("SerGoh");
var plut = new Dog("Pluto");

//mixins allows to use the same/unique functionality across objects
