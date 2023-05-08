'use strict';

const result = `
Sarah: 1
Peter: 2
`;

console.log(result);

const greet = (greeting, name, age) => {
  console.log(greeting);
  console.log(name);
  console.log(age);
};

const name = 'Dan';
const age = 29;

greet`My name is ${name} and I am ${age}`;
