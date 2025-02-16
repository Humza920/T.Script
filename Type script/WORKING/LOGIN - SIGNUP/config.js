import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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
export const auth = getAuth(app);
export default app;
