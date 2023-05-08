'use strict';

const sayHi = name => `Hi ${name}.`;

console.log(sayHi('Dan'));

const baseUrl = 'https://swapi.co/api';

// fetch(`${baseUrl}/people/1`)
//   .then(res => res.json)
//   .then(json => console.log(json));

// fetch(`${baseUrl}/people/2`)
//   .then(res => res.json)
//   .then(json => console.log(json));

const sum = (a, b) => `Sum: ${a + b}`;

console.log(sum(1, 3));
