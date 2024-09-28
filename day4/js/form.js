// 1) html validation
// 2) js validation --> frontend
// 3) backend validation

// without any html validation

document.forms[0].onsubmit = function(event){

    // name validation
    let fname = document.forms['myForm']['fname'];
    let fnameValid = false;
    if(fname !== "" && fname.value.length >= 3){
        fnameValid = true
    }


    // age validation
    // let myAge = document.forms[0][2];
    let myAge = document.forms['myForm']['myAge'];
    let myAgeValid = false; // flag

    if(myAge !== "" && myAge.value >= 10 && myAge.value <= 20 ){
        myAgeValid = true;
    }

    // password validation
    let passValid = PasswordValidation();
    if(fnameValid === false || myAgeValid === false || passValid === false){
        event.preventDefault()
    }
}

// const pattern = /^[0-9]+$/;
// const text = "8899955";
// if(pattern.test(text)){
//     console.log("the text is valid")
// }else{
//     console.log("the text is invalid")

// }

function PasswordValidation(){
    // Minimum eight characters, at least one letter and one number:
    // "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
    // let myPassword = document.forms['myForm']['password'];
    // let myPassword = document.getElementById("password");
    let myPassword = document.querySelector("#password");
    let pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let passValid = false;
    if(pattern.test(myPassword.value)){
        passValid = true;
    }
    return passValid;
}
// let myPassword = document.querySelector("#password");
// console.log(myPassword)

