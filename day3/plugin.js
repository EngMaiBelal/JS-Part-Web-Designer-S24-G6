// let text = "HELLO WORLD";
// console.log(text[6]);
// console.log( text.charAt(10))
// console.log( text.at(-1))

// let text = "apple, banana, kiwi";
// console.log(text.toLowerCase());
// console.log(text.slice(7,13)); // start index, last index
// console.log(text.slice(-7));


// console.log(text.substring(7,13));
// console.log(text.substring(-7)); // refere --> 0

// console.log( str.substr(7,6)); // start, length

// let text1 = "Hello";
// let text2 = "World";
// text3 = text1 +" "+text2;
// text3 = `${text1} ${text2}`;
// let text3 = text1.concat("  ", text2);
// console.log(text3)

// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text2)
// console.log(text1)

// let numb = 5;
// let text = numb.toString();
// let padded = text.padStart(4," ");
// console.log(numb);
// console.log(text);
// console.log(padded);


// let text = "Please Microsoft visit Microsoft!";
// let x = text.matchAll("Microsoft");

// console.log(Array.from(x));
// let newText = text.replaceAll("Microsoft", "W3Schools"); // case senstive

// let newText = text.replace("Microsoft", "W3Schools"); // case senstive- first one
// let newText = text.replace(/MICROSOFT/i,"W3Schools");
// let newText = text.replace(/Microsoft/g,"W3Schools");
// console.log(newText);

// let text = 'i\"m mai'



////////////////////////////////////////////////////
// function-complete
// default parameter

// function sum(x, y = 0){
//     return x + y;
// }

// console.log(sum(4, 5)); // 4+0, 4+5

function sum(x , z, y = 0){
    return x + y + z;
}

console.log(sum(4, 8)); 


// isFinite, isNaN, eval
// console.log(isFinite(5)); // not true all the time


// console.log(Number.isFinite(5)); //true
// console.log(Number.isFinite("5")); //false
// console.log(Number.isFinite("")); //false
// console.log(Number.isFinite(null)); //false
// console.log(Number.isFinite(5 * "mai")); //false
// console.log(Number.isFinite(5 * "")); //true
// console.log(Number.isFinite(5 * "0")); //true

// console.log(Number.isNaN(5 * "")); //false
// console.log(Number.isNaN(5 * "0")); //false

// let x = eval(prompt("enter your equation"));
// console.log(x);

// ---------------------------------------------
// object => container store data ==> key, value, methods
// simple object
// let user = {
//     // key : value => property / field
//     fname: "ahmed",
//     lname: "omar",
//     // fname: "mariam", --> unique
//     age: 30,
//     pass: true,
//     login : function(){    // method
//         console.log("loginggggggggg");
//     },
//     register : () => console.log("register gggggggg"), // arrow fun not use this
//     helloMsg: function(){
//         console.log(this.fname);
//         this.login();
//     }
// }
// user.helloMsg()
// this ==> currnet obj
// console.log(user['fname']);
// console.log(user.lname);
// user.email ="ahmed@gmail.com";
// console.log(user);
// user.pass = false;
// console.log(user.fname);
// console.log(user);
// user.login();
// user.register();
// car --> properties color, model, name, type
//     --> methods    move() stop()


// ------------------------------------------------

// let test = {
//     "1fname": "ahmed",
//     "1lname": "omar",
//     "1register" : function(){    
//         console.log("register gggggggg");
//     }
// }
// console.log(test["1fname"]);
// console.log(test.1fname);
// ----------------------------

// let x = new Object();
// x.fname = "ahmed";
// x.lname = "omar"

// console.log(typeof(sum))
// let string = new String("omar");  // new Array, new Number
// let string2 = "omar";
// console.log(string === string2);

// [,kjkji, lkok, ]

// [lname:klkok, kl]


