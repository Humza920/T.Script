import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDEfVTJ2elB8DMdji8ZZyLjNG8yJE4RcIY",
    authDomain: "login-auth-i.firebaseapp.com",
    projectId: "login-auth-i",
    storageBucket: "login-auth-i.firebasestorage.app",
    messagingSenderId: "1078961571913",
    appId: "1:1078961571913:web:8989d88b0984cf368cd798",
    measurementId: "G-0L0BNMXW21"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
