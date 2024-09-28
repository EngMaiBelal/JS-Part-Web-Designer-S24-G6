// any variable decleration in global scope see in all scopes
// global scope
// var x = 5;
// let y = 10;
// const z = 50;

// function test(){
//     // local scope
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
// test();


// if(true){ // if, for
//     // block scope
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
// -----------------------------------------------------
// any variable decleration in local scope see only in local scope

// function test(){
//     // local scope 
//     var x = 5;
//     let y = 10;
//     const z = 50;
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
// test();
// if(true){
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
// console.log(x);
// console.log(y);
// console.log(z);

// -------------------------------------
// any variable decleration in block scope see in block scope only until var 
// if(true){
//     // block scope
//     var x = 5;
//     let y = 10;
//     const z = 50;

//     console.log(x);
//     console.log(y);
//     console.log(z);
// }

// console.log(x);
// console.log(y);
// console.log(z);

