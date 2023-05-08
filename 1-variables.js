'use strict';
// Reassign let variable
let name = 'Denis';
name = 'Dan';

// Show scope of let variables
// Log current index
for (let i = 0; i < 3; i++) {
  console.log('Inside:', i);
}

// console.log('Outside:', i); // i is undefined at this point

// Show const variable scope
function checkPassword(password) {
  const valid = password.length > 6;
  if (valid) {
    const message = 'Your password is valid.';
    console.log(message);
  } else {
    const message = 'Your password is not valid.';
    console.log(message);
  }
}
checkPassword('123');
checkPassword('1234567');
