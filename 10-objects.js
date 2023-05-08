'use strict';

const makeObject = function (key, value) {
  return { [key]: value };
};

const user = makeObject('username', 'john');
const dog = makeObject('breed', 'Labrador');

console.log(user);
console.log(dog);
