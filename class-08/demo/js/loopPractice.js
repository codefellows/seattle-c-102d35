// Assignment operator
let x = 7;
let y = 5;
// Addition assignment
x += y;
x = x + y;
// Increment operator
x++;

// Logical Operator &&

let expr1 = 5 > 1;
let expr2 = 4 < 1
if (expr1 && expr2) {
  console.log('TRUE')
} else {
  console.log('FALSE')
}

// typeof oeprator

let string = 'hello'
let fakeString = 7;
let int = 8;

// console.log(typeof fakeString);

if (typeof int === 'number') {
  console.log('TRUE');
}


// LOOP I want to loop and increase y by 1 UNTIL y = x
// WHILE LOOP
let x = 8;
let y = 0;

// while expression is TRUE, LOOP and run code {}
// WHEN EXPRESSION is FALSE, you're done with loop
while (y < x) {
  console.log('What is y:', y)
  y++;
}
// Once while loop is false, continue down here
console.log('I AM OUT OF THE LOOP')

let z = 20;

// FOR Loop - WE set the iteration count
for (let i = 0; i < 10; i++) {
  console.log('I', i);
}
// DONE with loop continue on
console.log('PAST THE FOR LOOP');