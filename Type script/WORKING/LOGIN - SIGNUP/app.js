import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

import { auth } from "./config.js";
let createAcc = document.getElementById("showSign");
let logAcc = document.getElementById("showLog");
let loginForm = document.getElementById("loginForm");
let singupForm = document.getElementById("signupForm");
createAcc.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.className = "hidden";
    singupForm.className = "";
    console.log("RUN");
});
logAcc.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.className = "";
    singupForm.className = "hidden";
    console.log("RUN");
});
let inploginEmail = document.getElementById("loginEmail");
let inploginPassword = document.getElementById("loginPassword");
let loginSubmit = document.querySelector("#loginSubmit");
let inpSignupEmail = document.getElementById("signupEmail");
let inpSignupPassword = document.getElementById("signupPassword");
let signupSubmit = document.querySelector("#signupSubmit");
loginSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, inploginEmail.value, inploginPassword.value)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        inploginEmail.value = "";
        inploginPassword.value = "";
        prompt("LOGIN-SUCCESSFULLY");
    })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        prompt("INVALID EMAIL OR PASSWORD");
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
        prompt("SIGN-UP SUCCESSFULLY");
        loginForm.className = "";
        singupForm.className = "hidden";
    })
        .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        prompt("EMAIL ALREADY EXIST");
    });
});
