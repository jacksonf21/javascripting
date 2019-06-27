let numbers = Array.from({length: 11}, (v, k) => k);
numbers.shift();

let filtered = numbers.filter(i => i % 2 === 0);

console.log(filtered);