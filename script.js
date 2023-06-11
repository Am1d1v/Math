


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

const arr = [1, 0, -3, 10, 18, -1];
console.log(Math.max(...arr));

console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));


//======

console.log(Math.round(1.3));
console.log(Math.round(1.5));


console.log(Math.ceil(1.1));
console.log(Math.ceil(1));


console.log(Math.floor(1.2));
console.log(Math.floor(1.8));

console.log(Math.trunc(1.8));
console.log(Math.trunc(1.9999999));

console.log((1.888888).toFixed(2)); 
console.log(typeof((1.888888).toFixed(2))); 
console.log(Number((1.888888).toFixed(2))); 
console.log(typeof(Number((1.888888).toFixed(2)))); 


// Random Number Drop Function

const ranFn = function(multNum){
    //console.log(Math.round((Math.random()) * multNum));
    let res = (Math.round((Math.random()) * multNum));

    if (res === 0){
        console.log("You droped 0, try again");
    } else{
        console.log(res);
    }
    
}

ranFn(2);

function random(min, max){
    return Math.floor((Math.random() * (max - min + 1) + min));
}

console.log(random(1, 20));


//============

console.log(15 % 2);
console.log(18 % 2);

const isEven = ((num) => {
    res = ( num % 2);

    if (res === 0){
        console.log(" Number is even ");
    } else {
        console.log(" Number is odd");
    }
})


isEven(19);
isEven(18);

//=============

const bigNum1 = 450_005_000;
const bigNum2 = 450005000;

const payment = 20_10;

//====== BigInt ============

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(2 ** 53 - 1);

const max = 2 ** 53;
console.log(max + 1);
console.log(max + 2);
console.log(max + 3);

console.log(232323232323232323232323232323232n);
console.log(BigInt(232323232323232323232323232323232));
console.log(BigInt('232323232323232323232323232323232'));

console.log(10n + 10n);
console.log(10n + 10); // Error
console.log(10n + BigInt('10')); 

console.log(10n * 10n);
console.log(232323232323232323232323232323232n * 232323232323232323232323232323232n);


console.log(10n < 20); // true

console.log(10n == 10); // true
console.log(10n === 10); // false
console.log(typeof(10n));

console.log(10n / 6n);