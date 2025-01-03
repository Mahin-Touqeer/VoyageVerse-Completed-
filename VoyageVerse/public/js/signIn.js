
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"
import { getAuth, updateProfile, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyD59ZgqzxLuhYScrQhrBaelOLWSu0kFiZ0",
    authDomain: "voyageverse-b02bd.firebaseapp.com",
    projectId: "voyageverse-b02bd",
    storageBucket: "voyageverse-b02bd.firebasestorage.app",
    messagingSenderId: "409464241381",
    appId: "1:409464241381:web:1dbf2581b7567cd21de80c",
    measurementId: "G-T7XNRP3N7T"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//----------------------------------------------------------------------------------------------------------------------------------------------------------

const form = document.querySelector("form");
const password = document.querySelector("#password")
const email = document.querySelector("#email")
const signInDiv = document.querySelector(".signInDiv");
const inputs = form.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener("input", () => {
        if (!input.checkValidity()) {
            return
        }
        input.classList.add("valid")
        input.classList.remove("error")
    })
})


form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.classList.remove("valid")
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });

    if (!isValid) {
        return;
    }
    signInDiv.innerHTML = `<img class="wheelLoader" src="../../utils/loader/wheel.png">`;
    signInDiv.classList.add("loaderContainer");
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            console.log(userCredential);
            window.location.href = "../../views/destinations/allLocations.html"
        })
        .catch((error) => {
            alert("Invalid username or password");
            window.location.href = "../../views/users/signin.html"
        });
})
