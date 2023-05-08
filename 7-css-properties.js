// String interpolation

'use strict';

const box = document.getElementById('box');
box.style.backgroundColor = 'purple';

const input = document.querySelector('#input-box');

input.addEventListener('change', handleUpdate);

function handleUpdate(e) {
  box.style.height = `${parseInt(e.target.value) * 2}px`;
  box.style.width = `${parseInt(e.target.value) * 2}px`;
}
