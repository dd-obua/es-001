'use strict';

const createPerson = function (name, age, admin) {
  return { name, age, isAdmin: admin };
};

console.log(createPerson('Dan', 29, true));
console.log(createPerson('Joe', 33, false));
