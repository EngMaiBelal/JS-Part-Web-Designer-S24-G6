// "use strict"
// var x, y, z ,....; // undefined --> hoisting
// js --> interpreter

// Variable --> container save data var, let, const

// var firstNumber = "ahmed"; // string
// var firstNumber = 'ahmed'; // string
// var firstNumber = 5;        // number


// var number1; //undefined
// var number1 = 200; //number

// 1number
// mkj1kkkk
// kjj_lkjj
// _jkjk
// $llmok
// console.log(firstNumber);
// var x =5, y= 6, z= 8;
// var x, y, z;
// x =5;
// y= 9;
// z= 10;
// console.log(x, y, z);

// var x = true;  //boolean
// var y = false;
// var k;         // d-type = undefined, value =undefined
// var z = null;  //d-type = object , value = null
// var d = "";    // empty string
// console.log(typeof(d));

// js case senstive
// var number = 80;
// console.log(number);

// string concatenation
// var x = 5;
// type coercion
// var x = null;
// var x = 6;
// var h = 10;
// var y = "omar";
// var z = x + h + y ; 

// // var x = 6; //number
// // var x = "6"; // string
// console.log(z);

// var par = "I'am mai";

// datatypes
// primitive data type 
// Number, string, null, boolean, undefined 
// complex data type
// Object(obj, array), function

/**Arthimatic operation */
// + * / - %
// x = 10;
// console.log(x++); // increment -->oldx , add 1 = 10 postfix
// console.log(x); // x = 11
// console.log(++x); // increment prefix --> add 1 = 11
// console.log(x); // x= 11
// x--;
// console.log(x);

// asssignment operators
// var x = 10;
// var x = 2;
// x = x + 5;
// x+= 5;  //+=, -=, *=, /=, %=, **=
// console.log(x);
// console.log(typeof(5 / "omar")); //value => NaN, dt=>number
// console.log(5 -"omar"); //value => NaN, dt=>number
// console.log(typeof(5/0)); //value => infinity, dt=>number
// -------------------------------------------
// comparison operators =>boolean (true, false)

// console.log(2 == "2"); // check value
// console.log(2 === "2"); // check value, dt (stricky equality)
// console.log("omar" === "ahmed"); // check value, dt
// console.log(typeof("omar") == typeof("2")); // check dt
// console.log(5 != 6);
// >, <, >=, <=
// -------------------------------------------
// logical operator
// &&
// ||
// ! --> not
// console.log(( 5 == 3 )&& (3 == 3)); // all return true
// console.log(( 5 == 3 ) || (3 == 3)); // only one condition true

// -----------------------------------------
// different let, var, const
// var x --> declare variables
// = 10 --> assign variable, initialize

// var x = 10;
// x = 20; //reassignment
// var x = 80; //redecleration
// console.log(x);

// let x = 10;
//  x = 20; //reassignment
// let x = 80; //no redecleration
// console.log(x);

// const x = 10;
// // x = 20; // no reassignment
// const x = 80; //no redecleration
// console.log(x);





// -----------------------------------------
// hoisting => decleration var in the first

// x = 5;
// console.log(x);

// console.log(y); // --> undefined not error
// var y = 10;

// console.log(y); // --> error no hoisting
// const x = 10;
// let z = 10;

// console.log();
// var x=5;
// x+=2;

// --------------------------------------
// output by js
// console.log("hello");
// alert("Hello sama");
// document.write("hello omar");
// print();
// input by js
// let x = prompt("please enter your name");
// console.log(typeof(x)); // cancel => object
// console.log(x); // value => null
// if( x == null || x ==""){
//     prompt("please enter your name");
// }
// --------------------------------------
// statment types
// A) condational statment 

// 1) if statment
// if(condition){
//     // result body => condition true
// }else{
//     // ndition false
// }
// let x = 10;
// let y = 10;

// if(x > y){ // 50%, 50%
//     console.log(" x is the greatest");
// }else{
//     console.log(" y is the greatest");
// }

// variables in if condition
// let x = 20;
// let y = 100;
// let z;

// if(x > y){
//     z = x- y;
//     console.log(" x is the greatest");
// }else if(y > x){
//     z = y - x;
//     console.log(" y is the greatest");
// }else{
//     console.log(" other ");
// }
// console.log(z); 
// -------------------------
// ternary operators
// let firstName = "omar";

// if(firstName == "omar"){
//     console.log("ok");

// }else{
//     console.log("no");
// }
// (firstName == "omar")? console.log("ok") : console.log("no");
// (firstName == "omar")? console.log("ok") : null;
// -------------------------
// Switch case

// let favFruit = "fgggfh";
// switch(favFruit){
//     case "banana":
//         console.log("banana")
//         break;

//     case "orange":
//         console.log("orange")
//         break;

//     case "apple":
//         console.log("apple")
//         break;

//     case "":
//     default:
//         console.log("other")
// }
//nested if
// if(favFruit == "banana"){
//     if(){

//     }else{

//     }
// }else{

// }


// --------------------------------
// break --> skip all 
// continue ---> current iteration

// ----------------------------------------
// loop statments
// 1) for loop
// for(start; condition ; step){
//     //body for
// }

// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// start i = 0, step 3
// for(let i= 0; i < 5 ; i++){
//     console.log("hello");

// }
// 0, 3, 6, 9, 12 

// for(let i= 0; i < 15 ; i+=3){
//     console.log("hello");

// }

// print 7 times --> i-=4
// nested loop  ---> complixity
// 2) while , do while
// start; 
// while(codition){
//     // body
//     // step;
// }
// let i = 10;
// while(i < 10){
//     document.write("ok ");
//     i++;
// }

// let i = 10;
// do{
//     document.write("ok ");
//     i++;
// }
// while(i < 10)

// ----------------------------------
// difference between break continue
// for(let i = 0; i <= 10; i++){
//     if( i === 4){
//         continue;
//         // break;
//     }
//     console.log(i);
// }
// foreach, for in , for of ==> array, object
// ----------------------------

// template string
// let fname = "mai";
// let lname = "mohamed";
// let age = 30;

// // // console.log("my name is "+fname+" "+ lname +" my age is "+ age);
// console.log(`my name is                      
//     ${fname} ${lname}`); // as pre tag


// -----------------------------------------------------------------------
// number method => function built in 
// let x = 3.4;
// // ceil , floor, round
// console.log(Math.round(x));
// console.log(Math.min(2, 5, 6));
// console.log(Math.abs(-10));

// Math.
// ---------------------------------------------------------------
// w3school
// https://www.javatpoint.com/
// https://www.freecodecamp.org/
// https://developer.mozilla.org/
// js-tasks --> day1 ---> task-session 
                //   ---> task(grade) (grade application 5 subject (20 -> full every subject))
                //     1) Write a js program to input marks of five subjects Physics/20, Chemistry, Biology, Mathematics and Computer. Calculate and show to the user (the percentage and the grade) according to following: 
                // 	Percentage >= 90%: Grade A
                // 	Percentage >= 80%: Grade B
                // 	Percentage >= 70%: Grade C
                // 	Percentage >= 60%: Grade D
                // 	Percentage >= 40%: Grade E
                // 	Percentage <   40%: Grade F
                // 	NOTE:-
                // 	* The full mark of each subject is 20 and max grade: 100
                //     // document.write
                // if training
