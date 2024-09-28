// browser object model

// window.alert("hello")
// document.write("jjjjjjj")
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// window.open("https://www.w3schools.com",
//      "_blank",
//       "toolbar=yes,scrollbars=yes,resizable=yes,top=50,left=60,width=400,height=400");

// // alert, prompt, confirm
// function Delete(){
//     confirm("are you sure");
// }
// https://sweetalert2.github.io/
// Swal.fire("SweetAlert2 is working!");

// road --

////////////////////////////////////////
// setTimeout, setInterval
// let handler = setTimeout(test, 3000, 'text', 'text2');
// let y = setTimeout(test, 6000, 'text', 'text2');
// console.log(y);
// function test(text, text2){
//     console.log(text, text2)
// }
// console.log("omar")

// function clearTime(){
//     clearTimeout(handler);
//     // clearTimeout(1)
// }
////////////////////////////////////////
// setInterval
// let div = document.querySelector("div");
// function counter(){
//     let x = parseInt(div.innerHTML);
   
//     if(x == 100){
//         clearInterval(handeler);
//     }else{
//         div.innerHTML= x + 1;
//     }
// }
// let handeler= setInterval(counter, 50);

function sum(num1, num2, ...x) { // variable parameter --> rest para, 
    console.log(num1+num2);
}
  
sum(5, 2, 98, 88);