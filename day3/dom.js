/// dom document object model
// let myDiv = document.getElementById("main"); // one value
// let myDiv = document.getElementsByClassName("container") // array
// let myDiv = document.getElementsByTagName("div");
// console.log(myDiv);

// let p = document.querySelectorAll(".demo");
// let p = document.querySelector(".demo");
// p.innerHTML = " new content"

// document.write("hellooooooooooooooooooooo")

// --------------------------------------
// textContent, innerHtml, innerText
// let myDiv = document.getElementById("main");
// console.log(myDiv.innerHTML);
// console.log(myDiv.innerText);
// console.log(myDiv.textContent);

// --------------------------
// attributes // array

// let myDiv = document.getElementById("main");
// myDiv.style.backgroundColor = "red";

// myDiv.setAttribute("div-name", "omar");
// console.log(myDiv.getAttribute("div-name"));
// console.log(myDiv.hasAttribute("div-name"));
// myDiv.removeAttribute("div-area");

// -----------------------------
// html elements
// let images = document.images;
// console.log(document.images)
// images.foreach(function(ele, index, arr){

// })
// console.log(document.forms[1])


// ------------------------------------
// let newElement = document.createElement("div");
// newElement.setAttribute("class", "my-div");
// let newpar = document.createElement("p");
// // console.log(newElement);

// document.body.appendChild(newElement);
// // newElement.appendChild(newpar);
// newElement.append(newpar);
let div = document.getElementById("demo");
function createChild(){
    let img = document.createElement("img");
    img.setAttribute("src","blog-recent-post-2.jpg");
    // document.getElementById("demo").appendChild(img);
    document.getElementById("demo").prepend(img);
    // div.before(img);
    // div.after(img);

    // document.getElementById("demo").innerHTML = "<img src='blog-recent-post-2.jpg'>";
}

function deleteLastChild(){
    
    div.lastElementChild.remove();
    // let img = document.querySelectorAll("img");
    
    // img.remove();
}





// childern
// console.log(div.children[0]); // html collection, donot see space, comment
// console.log(div.firstChild);
// console.log(div.firstElementChild);
// lastChild, lastElementchild

//////// Dom transevering, events, form


















