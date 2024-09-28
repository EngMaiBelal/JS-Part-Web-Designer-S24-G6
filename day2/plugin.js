// Function => block of code, reusable

// function sumNumber(num1, num2){ // parameters
//     return num1 + num2; // o/p
//     // console.log("ok");f
// }
// function sumNumber(num1, num2){
//     console.log( num1 + num2 );
// }
// function date(){
//     return ...;
// }
// function print(){
//     console.log("msg");
// }
// console.log(sumNumber(2,8)); // arguments
// sumNumber(2,8); // invoce
// sumNumber(2,8);
// sumNumber(2,8);

// anonymous fun
// let x = function(){
//     console.log( "hello");
// } 
// x();
// (function(){ console.log( "hello");})(); // self invoce

// function sumNumber(){
//    console.log("hello"); // o/p
// }
// // console.log(sumNumber);
// console.log(typeof(sumNumber));
// --------------------------------------
// shadowing


// scopping
// let, var, const
// 1- global scope 
// 2- local scope   
// 3- block scope   


// var define in global scope --> global, local, block


// block scope
// let x= "omar";
// if( x == "omar"){
//     var z = "ok"; //let
//     console.log(z);
// }
// console.log(z);


// local scope
// function myFun(){
//     var x = "ali"; // let
//     console.log(x);
//     // return x;
// }
//let k=  myFun()
// console.log(x);

// -------------------------
//shadwing --> re declaration var in other scopes
// in global scope
// var x = 20;
// var x = 30;
// console.log(x);
// --------------------------
// local scope
// var h = 20;
// function sum(){
//     h = 9+10; //reassign
//    console.log(h);
// }
// sum();
// console.log(h);
// -----------------------------
// var h = 20;
// function sum(){
//     var h = 9+10;
//    console.log(h);
// }
// sum(); //19
// console.log(h); //20

// ----------------------------------
// let bookTitle = "the secret";
// console.log(bookTitle);
// function displayBook(){
//     bookTitle = "the prince";
//     // var bookTitle = "the prince"; // let , var
//     console.log(bookTitle);
// }
// displayBook();
// console.log(bookTitle);

// ----------------------------
// recursive function
// function count(number){
//     console.log(number); // 3 2 1 0
//     if(number > 0){
//         count(number - 1); // count(2) count(1) count(0)
//     }
// }
// count(3);


// store return value in variable ---> varName();
// let y = function sub( n1, n2){
//     return n1 - n2;
// }
// console.log(y(4, 5));

// let x = function( n1, n2){
//     return n1 - n2;
// }
// console.log(x(4, 5));

// call-back function ==> function test( test2())
// ------------------------------------------------------
// application ---> 3 numbers --> min, max --> function
// -------------------------------------------------

// Array  --> container save more than one data
// let x = [1, 2, "mai", 9 ]; // one dimension
// no of element = 4 => length
// index start with 0
// console.log(x[0]);
// console.log(x.length);

// set value
// x[2] ="omar";
// console.log(x);

// x[4] = 8;
// console.log(x);

// two dimensional array
// let x = [
//     [1, 2, 3],
//     [3, 4, 5],
//     [6, 7, 8],

// ]


// console.log(x[2][0]);



// let x = [ // three dimension array
//     [1, 2, 3],
//     [3,[ 'mai', 'ahmed'] , 5],
//     [6, 7, 8],

// ]
// console.log(x[1][1][0]);
// let x = [
//     [1, 2, 3],
//     [3,[ 'mai', 'ahmed'] , 5],
//     [6,[ 5, 7], 8],
//     [3 , 2, 9 ,10]
// ]
// const fruits = ["Banana", "Orange", "Apple", "Mango", 'orange', 1 , 0];
// insert
// fruits.push("test"); // in the end
// fruits.unshift("test"); // in the start

// delete element
// fruits.pop(); 
// fruits.shift();

// fruits.reverse();
// let newFruits = fruits.toSorted();
// console.log(newFruits)
// console.log(fruits)
// const fruits = ["Banana", "Orange", "Apple", "Mango", 'orange'];
// fruits.splice(2, 2);
// fruits.splice(2, 0, "kiwi","kiwi","kiwi","kiwi");
// fruits.splice(2, 1 , "kiwi","kiwi","kiwi","kiwi");
// console.log(fruits[-1]); // undefined
// let x = fruits.slice(1 , 3); //cut ---> start ,  end not included

// console.log(x);
// let text = "How are you doing today?";
// const myArray = text.split();

// const myArray = text.split("o");

// const myArray = text.split(" ", 2);  // convert string to array
// console.log(myArray)

// --------------------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango", 'orange', 2,6];
// let x = fruits.toString();
// console.log(x);

// fruits.at(2) == fruits[2]
// console.log(fruits.at(-1));

// let x = [
//     [1, 2, 3],
//     [3, 4, 5],
//     [6, 7, 8],

// ]
// console.log(x.at(1).at(1));
// x[1][1]

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myBoys.concat(myGirls);
// const myChildren2 = myBoys.concat(1);
// console.log(myChildren2);

// const myArr = [[1,2],[3,4],[5,6]];

// const newArr = myArr.flat();
// console.log(myArr);
// console.log(newArr);

/// map, filter, find

// ----------------------------
// looping --> for, dowhile, while
const fruits = ["Banana", "Orange", "Apple", "Mango", 'orange'];

// for(let i = 0; i < fruits.length ;i++){
//     console.log(fruits[i]);
// }
// fruits.forEach(function(element, index, array){
//     console.log(element);
//     console.log(array[index]);
// });
// continue, break, => stop foreach
// fruits.forEach(function(element){
//     console.log(element);
//     // console.log(array[index]);

// });

// fruits.forEach((ele) => console.log(ele));


// if(true) console.log("hello");
// if(true) {console.log("hello")};
// ------------------------------------------

// const numbers = [45, 4, 9, 16, 25];
// let txt = "";

// for( index in numbers){ // element index 
//     txt += `${numbers[index]}  `;
//     // console.log(numbers[index]);
// }
// console.log(txt);


// const numbers = [45, 4, 9, 16, 25];
// for( let x of numbers){  // element value
//     console.log(x);
// }
// --------------------------------
// sets, maps, map()loop as foreach, includes
// findIndex() find() filter()
// const ages = [32, 33, 16, 40];
// let x= ages.filter(function(element){ // array -> []
//     return element == 90;
// });
// console.log(x);

// const ages = [16, 12, 32, 33, 16, 40];
// let x = ages.find((element) => element > 16);  // the first element, undefined
// let x = ages.find((ele) => element > 16);  

// let x = ages.find(callbackTest);  
// function callbackTest(element){
//     return element > 16;
// };

// console.log(x);


// const ages = [16, 12, 32, 33, 16, 40];
// let x = ages.findIndex((ele) => ele == 16); // the first index
// console.log(x);

// let y = ages.indexOf(16); // the first index
// console.log(y);


// regular expression


// document.write('hhhhhhhhhhhhhhhh')
