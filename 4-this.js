'use strict';

const hero = {
  name: 'Super Man',
  greet() {
    setTimeout(
      function () {
        console.log(`Hi my name is ${this.name}.`);
      }.bind(this),
      1000
    );
  },
};

console.log(hero.greet());
