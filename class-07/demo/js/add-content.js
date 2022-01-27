
function promptUserForTime() {
  // step 1: prompt user for time
  let tod = prompt('What hour is it?')
  console.log('tod', typeof Number(tod));
  // Step 2: decide what response to return to the user
  let response = 'Welcome';
  // Step 3: create logic that changes reponse
  // Step4 :check user input for valid input (its a number)
  // IF not valid, call PromptUserForTime() again.
  if (tod > 18) {
    response = 'Good Evening!';
    promptUserForTime();
  } else if (tod > 12) {
    response = 'Good Afternoon!';
  } else if (tod >= 0) {
    response = 'Good Morning';
  }

  return alert(response)
}

// Function CALL a.k.a Function Invocation
promptUserForTime();


// changing color of element
let el = document.getElementById('Zork');
console.log('el', el);
// changing content in <p id='Zork'> Element
el.innerHTML = 'Ya Boi';
el.style.color = 'red';
