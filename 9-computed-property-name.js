'use strict';

const specialProperty = 'nationality';

const person = {
  name: 'John',
  age: 22,
  isAdmin: false,
  [specialProperty]: 'German',
};

console.log(person);
