function reverseString(inputString) {
  let arr = inputString.split('');
  arr.reverse();
  return arr.join('');
}

process.stdout.write('prompt > ');

// The stdin 'data' event triggers after a user types in a line
process.stdin.on('data', (userInput) => {
  userInput = userInput.toString().trim();
 //evaluateCmd is a function which will be implemented in commands.js
 let output = reverseString(userInput);
 process.stdout.write(output);
 process.stdout.write('\nprompt > ');
});
