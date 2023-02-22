"use strict";
//#1====================================

//console.log('35' + - "22"); 

//console.log('35' * "22");

//console.log('558' > 22++);

/*
let userCounter = 0;
let newUsers = userCounter++;
console.log (newUsers)
*/

//console.log(!false && 11 || 18 && !'');

/*
let name = 0;
console.log( name ?? "Без імені");
*/

//#2=====================================

/*
if (1 === "1") {
	console.log('Істина!');
} else {
	console.log('Брехня!"');
}
*/


/*
if (5 === "5") {
	console.log('Істина!');
} else {
	console.log('Брехня!"');
}
*/


//let message = (92 > '11' && 58 < 100) ? 'Істина!' : 'Брехня!';
//console.log(message);


/*
if (0) {
  console.log('Брехня!');
} else if (" ") {
  console.log('Істина!');
}
*/

//#3=========================================

//=====1 спосіб від 1 до 5 =====

/*
let num = 1;
while (num < 6) {
	console.log(num);
	num++;
}
*/


//======2 спосіб від 1 до 5=====

/*
let num = 1;
do{
	console.log(num);
	num++;
}
while (num < 6);
*/


//======3 спосіб від 1 до 5=====

/*
for (let num = 1; num < 6; num++){
  console.log(num);
}
*/


/* 2
let num = 8;
while (num){
	console.log(num);
	num--;
}
*/

/* 3
for (let num = 0;num < 3; num++){
//	console.log(`Число: ${num}`);
}

let num = 0;
while (num < 3){
	console.log(`Число: ${num}`);
	num++;
}
*/



/* 4
 for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++){
		console.log(size);
	}
}
*/ 

firstFor: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size == 1) {
			break firstFor;
		}
		console.log(size);
	}
}

//#4============================================


// 1
let numOne = 1.005 + Number.EPSILON;
let numSome = Math.round(numOne * 100) / 100;
console.log(numSome);

// 2
let numThree = parseFloat("135.58px");
console.log(numThree)
console.log(typeof numThree);

// 3
let value = 58 + "Monday";
if (isNaN(value)) {
	console.log('Результат NaN');
}

// 4
console.log(Math.max(10, 58, 39, -150, 0));

// 5
let numTwo = Math.floor(58.858);
console.log(numTwo);

//#5============================================

/*
//1 не вірно
let fls = "Фрилансер";
let text = 'Привет! Я ${fls}';
let text = `Привет! Я ${fls}`; - вірно
console.log(text);
*/

//2
let textTwo = 'фрилансер';
let firstSymbol = textTwo[5];
let lastSymbol = textTwo[textTwo.length - 4];
console.log(firstSymbol);
console.log(lastSymbol);

//3
/*
let text = 123 + "456";
console.log(text);
console.log (typeof text);
*/

//4
let textBig = 'Фрилансер';
console.log(textBig.toUpperCase());

//5
let text = 'Фрилансер';
console.log(text.slice(3, 6));

//6
let textLast = 'Фрилансер';
console.log(textLast.includes('лан', 4));


