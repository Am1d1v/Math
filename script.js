


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

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));


//========= Math ============================

console.log(Math.sqrt(36));
console.log(Math.sqrt(10));

console.log(Math.cbrt(27));

console.log(16 ** (1 / 4));

console.log(Math.sign(-100));
console.log(Math.sign(30));

console.log(Math.abs(-8));

console.log(Math.exp(2));

console.log(Math.max(1, -2, 10, 0 ,19));
console.log(Math.min(1, -2, 10, 0 ,19));