'use strict';

const hero = {
  name: 'Super Man',
  greet() {
    setTimeout(() => console.log(`Hi my name is ${this.name}.`), 1000);
  },
};

console.log(hero.greet());
