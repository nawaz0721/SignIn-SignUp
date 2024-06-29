// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { 
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWWSWx-0i3APLa6uVagGtvtnmVe9hCCnw",
  authDomain: "singin-732f2.firebaseapp.com",
  projectId: "singin-732f2",
  storageBucket: "singin-732f2.appspot.com",
  messagingSenderId: "719826244834",
  appId: "1:719826244834:web:0a61cfe5d8a02e8ee53abb",
  measurementId: "G-H90TZWV5B8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const signup_email = document.getElementById("signup_email");
const signup_password = document.getElementById("signup_password");
const signup_btn = document.getElementById("signup_btn");
const user_name = document.getElementById("userName");
const form = document.getElementById("form");
const main = document.getElementById("main");

const signin_email = document.getElementById("signin_email");
const signin_password = document.getElementById("signin_password");
const signin_btn = document.getElementById("signin_btn");


signup_btn.addEventListener('click', createUserAccount);
signin_btn.addEventListener('click', singIn);

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is logged In");
        const uid = user.uid;
    } else {
        console.log("User is not logged In");
    }
});

function createUserAccount() {
    const email = signup_email.value;
    const password = signup_password.value;

    console.log("email", email);
    console.log("password", password);

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User created:", user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
}

function singIn(){
    const email = signin_email.value;
    const password = signin_password.value;
    // console.log("email", email);
    // console.log("password", password);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("User Susscesfully LogIn with" + email)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            });
        }