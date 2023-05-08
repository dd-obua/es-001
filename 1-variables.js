'use strict';
// Reassign let variable
let name = 'Denis';
name = 'Dan';

// Show scope of let variables
for (let i = 0; i < 3; i++) {
  console.log('Inside:', i);
}

console.log('Outside:', i);
