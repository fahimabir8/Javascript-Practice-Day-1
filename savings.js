let n = parseInt(prompt("Enter number of elements: "));
let arr = [];

for (let i=1; i<=n; i++){
    let value = parseInt(prompt(`Enter value ${i}:`));
    arr.push(value);
}

let num = parseInt(prompt("Enter cost of living: "));

const monthlySavings = (arr,num) =>{
    let income = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] >= 3000){
            arr[i] = arr[i] - parseInt(arr[i]*0.2);
        }
        income += arr[i];
    }
    let savings = income - num;
    return savings;
}

let answer = monthlySavings(arr,num);
console.log(answer);