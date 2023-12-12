let interaction = document.querySelector('a:nth-of-type(12)')
let mouse_over = document.querySelector('a:nth-of-type(1)') 
let doubleclick = document.querySelector('a:nth-of-type(2)')
let mouse_down = document.querySelector('a:nth-of-type(3)')
let mouse_up = document.querySelector('a:nth-of-type(4)')
let key_down = document.querySelector('a:nth-of-type(5)')
let key_up = document.querySelector('a:nth-of-type(6)')
let key_press = document.querySelector('a:nth-of-type(7)')
let mouse_move = document.querySelector('a:nth-of-type(8)')
let scroll_ = document.querySelector('a:nth-of-type(9)')
let focus_ = document.querySelector('a:nth-of-type(10)')
let long_press = document.querySelector('a:nth-of-type(11)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

mouse_over.addEventListener('mouseover', lightgreen)

function lightgreen() {
  mouse_over.classList.toggle('MOUSEOVER')
}

doubleclick.addEventListener('dblclick', font_fantasy)

function font_fantasy() {
  doubleclick.classList.toggle('DUBBELCLICK')
}

mouse_down.addEventListener('mousedown', texttransform)

function texttransform() {
  mouse_down.classList.toggle('MOUSEDOWN')
}

mouse_up.addEventListener('mouseup', texttransformremove)

function texttransformremove() {
  mouse_up.classList.toggle('MOUSEUP')
}

document.addEventListener("keydown", ptoets);

function ptoets(e) {
	if (e.key =="p") {
		key_down.classList.toggle('KEYDOWN')
	}
}

document.addEventListener("keyup", ftoets);

function ftoets(e) {
	if (e.key =="f") {
		key_up.classList.toggle('KEYUP')
	}
}

document.addEventListener("keypress", stoets);

function stoets(e) {
	if (e.key =="s") {
		key_press.classList.toggle('KEYPRESS')
	}
}

mouse_move.addEventListener('mousemove', randomcolor)

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function randomcolor() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  mouse_move.style.backgroundColor = rndCol;
  console.log('randomcolor')
}

scroll_.addEventListener('wheel', randomcolor1)

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function randomcolor1() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  scroll_.style.backgroundColor = rndCol;
  console.log('randomcolor1')
}

focus_.addEventListener('focus', giant)

function giant() {
  focus_.classList.toggle('FOCUS')
}

const long_press2 = (callback, duration) => {
  let timeout;
  
  const start = () => {
    timeout = window.setTimeout(callback, duration);
  };

  const end = () => {
    window.clearTimeout(timeout);
  };

  long_press.addEventListener('mousedown', start);
  long_press.addEventListener('mouseup', end);
};

long_press2(() => {
  long_press.classList.toggle('LONGPRESS');
}, 600);

console.log(long_press);