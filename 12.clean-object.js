'use strict';

const specialProperty = 'nationality';
const firstName = 'John';
const lastName = 'Doe';

const person = {
  firstName,
  lastName,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  [specialProperty]: 'German',
};

console.log(person);
