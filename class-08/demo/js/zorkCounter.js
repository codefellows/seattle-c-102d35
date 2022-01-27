// Create a user prompt that asks "How many pictures of Zork would you like?"
// I want to write a function that I can call. 

function zorkImgCountPrompter(whichPrompt) {
  // Step 1: take in a dynamic prompt
  // Step 2: if prompt is empty, pass in Q: how many zork pics u want?
  if (!whichPrompt) {
    whichPrompt = 'How many pictures of Zork would you like to see?';
  }
  let zorkCount = prompt(whichPrompt);
  // I want to add a validation check
  if (zorkCount === '') {
    let message = 'How many pictures of Zork would you like to see?';
    let error = 'Please enter a number between 1 and 3';
    zorkImgCountPrompter(message + error);
    // user gave no input, prompt again
  }
  if (zorkCount == 3) {
    let counter = 0;
    while (counter < 3) {
      document.write('<img src="/images/zorkBestBoi.jpg">')
      counter++;
    }
    //    FOR LOOp
    //   for (let i = 0; i < 3; i++) {
    //     document.write('<img src="/images/zorkBestBoi.jpg">')
    //   }
    //   // add a zork image in 3 times
  }
}

zorkImgCountPrompter();


// let example1 = document.write('<img src=\'/images/zorkBestBoi.jpg\'>')

// let example2 = document.write('<img src="/images/zorkBestBoi.jpg">')