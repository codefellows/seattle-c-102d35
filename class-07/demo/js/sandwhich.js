// Step 1. Gather our ingredients -> Bread, Meat, Cheese, Mayo, Grey Poupon, Lettuce
// Step 2. put it all together
// Step 3. RETURN your result
// Step 4. REFACTOR!!!!


// DECLARE function
// Arguments = function input

function sandwhichIngredients() {
  // ask the user for the name
  // ask the user for their favorite flavor
  let bread = prompt('Choose your bread');
}

// Pass data into your functions
function makeASandwhich(bread, meat, cheese, condiments, veg) {
  // All your code/logic lives here
  let sandwhich = 'Here is your sandwhich on ' + bread + ' containing ' + meat + ', ' + cheese + ', ' + condiments + ', and ' + veg;
  return sandwhich
}

// SAME THING!!!
// let makeMeASandwhich = function () {

// }

let ingredients = sandwhichIngredients()

// Call/Invoke the function 
let sandwhich = makeASandwhich();
console.log('Sandwhich', sandwhich);