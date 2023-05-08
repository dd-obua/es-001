'use strict';

function getInfo(name, age) {
  return `Name: ${name} - Age: ${age}`;
}

console.log(getInfo('Dan', 29));

const getInfo2 = name => `Name: ${name}`;
console.log(getInfo2('Dan'));
