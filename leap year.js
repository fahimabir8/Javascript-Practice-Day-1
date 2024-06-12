const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter year: ', (input) => {
  if ((input % 4 == 0 && input % 100 != 0) || input % 400 == 0){
    console.log(`${input} is Leap Year.`);
  }
  else {
    console.log(`${input} is not Leap Year.`);
  } 
  rl.close();
});

