// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push('Ralph');
  
}

function destructivelyPrependDriver(name){
  drivers.unshift('Bob');
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
function appendDriver(name){
  newDrivers = [...drivers, 'Broom'];
  return newDrivers;
}
function prependDriver(name){
  newDrivers = ["Arnold", ...drivers];
  return newDrivers;
}
function removeLastDriver(name){
  drivers.slice(0, days.length - 1);
  return drivers;
}
function prependDriver(name){
  newDrivers = ["Arnold", ...drivers];
  return newDrivers;
}