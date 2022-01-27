let firstName = prompt("What's your name?");
// let age = prompt('How old are you');
// let petsName = prompt('What is your pets name?');
// console.log('tod', tod, typeof tod);
let tod = prompt('What hour is it?');

if (tod > 18) {
  alert('good evening!')
} else if (tod > 12) {
  alert('good afternoon');
} else if (tod >= 0) {
  alert('Goodmorning');
} else {
  alert('Welcome')
}

// CONDITIONALS -> IF
// based on something else -> 
// 1 > 5 -> False
// 'Josh' = 7 -> False

// IF TRUE
if (firstName === 'Alex') {
  alert('Zork loves you')
}
// ELSE a.k.a OTHERWISE ->  FALSE
else {
  alert('Imposter')
}

let el = document.getElementById('Zork');
console.log('el', el);
// changing content in <p id='Zork'> Element
el.innerHTML = 'Ya Boi';
el.style.color = 'red';