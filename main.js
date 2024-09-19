// /////////////  1  /////////////////////

let array = [10, 20, 30, 40, 50];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// /////////////  2  /////////////////////

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// /////////////  3  /////////////////////

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
let N = 5; 
console.log(`Faktorial ${N}! = ${factorial(N)}`);

// /////////////  4   /////////////////////

let start = 2; 
let difference = 3; 
let sum = 0; 

for (let i = 0; i < 10; i++) {
    sum += start; 
    start += difference; 
}

console.log(`Yig'indisi: ${sum}`);

// /////////////  5   /////////////////////

let input = prompt("Matn kiriting:");
// Har bir harfni 3 marta takrorlab yangi matn hosil qilish
let output = "";
for (let i = 0; i < input.length; i++) {
    output += input[i].repeat(3); 
}
console.log(output); 

// /////////////  6   /////////////////////

for (let i = 1; i <= 10; i++) {
    let square = i * i; 
    console.log(`Son: ${i}, Kvadrati: ${square}`);
}

// /////////////  7   /////////////////////

for (let i = 20; i >= 1; i--) {
    console.log(i); 
}

// /////////////  8   /////////////////////

let numbers = [3, 7, 2, 10, 6];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i]; 
    }
}
console.log(`Eng katta son: ${max}`);

// /////////////  9   /////////////////////

let text = "assalamu alaykum";
let count = 0; 
    if (text[i] === 'a') {
        count++; 
    }
console.log(`Matnda "a" harfi soni: ${count}`);

// /////////////  10   /////////////////////

let number = [10, 20, 30, 40, 50];
let sume = 0; 

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; 
}
let average = sum / numbers.length; 
console.log(`O'rtacha qiymat: ${average}`);
