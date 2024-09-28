/// BOM 
// 1- location
// console.log(window.location);

// function reload(){

//     // window.location.reload();
//     // window.location.replace("https://www.w3schools.com/html/default.asp"); // remove current page from history
//     window.location.assign("https://www.google.com") // still exist current page in history
// }

/////////////////////////////////////////////////
// localStorage, sessionStorage, cookies, filesystem, db
// window.localStorage.clear();
// window.localStorage.setItem("color", "red"); // json format add more than specs

// window.localStorage.color = "blue"; // edit
// window.localStorage.font = "bold";
// window.localStorage['width'] = "200";


// console.log(window.localStorage.getItem("color"))
// console.log(window.localStorage.color)
// console.log(window.localStorage['color'])
// window.localStorage.removeItem("color");

////////////////////////////////////////////////////
// sessionStorage,
// window.sessionStorage.clear();
// function setSession(){
//     window.localStorage.setItem("color", "black")
// }

//////////////////////////////

// window.scrollTo(x , y);
function scroll(){

    window.scrollBy(2000 , 400);
}
// window.scrollBy()