// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

var kittens = ["Milo", "Otis", "Garfield"];

function appendKitten(name){
  return [...kittens, name];
}

var kittens = ["Milo", "Otis", "Garfield"];

function 