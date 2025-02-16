// import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import {auth , app} from "./config.js";

let createAcc = document.getElementById("showSign") as HTMLButtonElement
let logAcc = document.getElementById("showLog") as HTMLButtonElement
let loginForm = document.getElementById("loginForm") as HTMLDivElement
let singupForm = document.getElementById("signupForm") as HTMLDivElement

createAcc.addEventListener("click" , (e : Event)=>{  
    e.preventDefault()
    loginForm.className = "hidden"
    singupForm.className= ""
    console.log("RUN");
})

logAcc.addEventListener("click" , (e : Event)=>{  
    e.preventDefault()
    loginForm.className = ""
    singupForm.className= "hidden"
    console.log("RUN");
})

 
let inploginEmail = document.getElementById("loginEmail") as HTMLInputElement
let inploginPassword = document.getElementById("loginPassword") as HTMLInputElement
let loginSubmit = document.querySelector("#loginSubmit") as HTMLButtonElement
let inpSignupEmail = document.getElementById("signupEmail") as HTMLInputElement
let inpSignupPassword = document.getElementById("signupPassword") as HTMLInputElement
let signupSubmit = document.querySelector("#signupSubmit") as HTMLButtonElement

loginSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, inploginEmail.value, inploginPassword.value)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        inploginEmail.value = "";
        inploginPassword.value = "";
        prompt("LOGIN-SUCCESSFULLY")
    })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        prompt("INVALID EMAIL OR PASSWORD")
    });
});

signupSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, inpSignupEmail.value, inpSignupPassword.value)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        inpSignupEmail.value = "";
        inpSignupPassword.value = "";
        prompt("SIGN-UP SUCCESSFULLY")
        loginForm.className = ""
        singupForm.className= "hidden"
    })
        .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        prompt("EMAIL ALREADY EXIST")
    });
});