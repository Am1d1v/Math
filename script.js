


console.log(10 === 10.0);
console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);


console.log(Number("10"));
console.log(+"10");
console.log(Number.parseInt("10"));
console.log(Number.parseInt("11", 10));

console.log(Number.parseInt("11.5"));
console.log(Number.parseFloat("11.5"));
console.log(Number.parseInt("11.5 sec"));
console.log(Number.parseInt("sec 11"));


console.log(Number.isNaN("10dddddd"));
console.log(Number.isNaN(Number("10dddddd")));
console.log(Number.isNaN(10));
console.log(Number.isNaN(Number("A")));
console.log(Number.isNaN("A"));
console.log(Number.isNaN(10 / 0));
console.log((10 / 0));
console.log(isFinite(10 / 0));
console.log(isFinite(10 / 3));