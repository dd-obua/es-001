'use strict';

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
};

console.log(shape.diameter());
