'use strict';

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },

  diameter2: () => this.radius * 2,
};

console.log(shape.diameter());
console.log(shape.diameter2());
