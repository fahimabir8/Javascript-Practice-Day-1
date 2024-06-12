const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter number: ', (input) => {
if (input % 2 == 0){
  console.log(`${input} is even.`);
}
else{
  console.log(`${input} is odd.`);
}  
  rl.close();
});