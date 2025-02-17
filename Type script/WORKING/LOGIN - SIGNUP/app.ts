// import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import {auth , app} from "./config.js";
import Swal from 'sweetalert2';

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
            // Log in
        const user = userCredential.user;
        console.log(user);
        inploginEmail.value = "";
        inploginPassword.value = "";
        Swal.fire({
            title: 'Success!',
            text: 'You have successfully logged in.',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: "#27ae60"
          });
          
    })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire({
            title: 'Error!',
            text: 'Invalid email or password.',
            icon: 'error',
            confirmButtonText: 'Try Again',
            confirmButtonColor: "#27ae60"
          });
        })
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
        Swal.fire({
            title: 'Success!',
            text: 'You have successfully Sign in.',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: "#27ae60"
          });
        loginForm.className = "";
        singupForm.className = "hidden";
    })
        .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        Swal.fire({
            title: 'Error!',
            text: errorMessage,
            icon: 'error',  
            confirmButtonText: 'Try Again',
            confirmButtonColor: "#27ae60"  
        });
        })
});