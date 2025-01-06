let body = document.querySelector("body");
let theme_dark = document.querySelector(".theme-dark");
//----------------------------------------------------------------------------------------------------------------------------------------------------------

import { getFirestore, getDocs, collection, setDoc, doc, getDoc, query, where } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"
import { getAuth, updateProfile, signInWithPopup, GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
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
const db = getFirestore(app);
//----------------------------------------------------------------------------------------------------------------------------------------------------------

const form = document.querySelector("form");
const inputs = form.querySelectorAll('input');
const signUpDiv = document.querySelector(".signUpDiv")

const username = document.querySelector(".userName")
const password = document.querySelector(".password")
const email = document.querySelector(".email")

inputs.forEach(input => {
    input.addEventListener("input", () => {
        if (!input.checkValidity()) {
            return
        }
        input.classList.add("valid")
        input.classList.remove("error")
    })
})


inputs.forEach((inputElement) => {
    inputElement.addEventListener("focusin", function () {
        document.querySelector(".eye").style.display = `inline-block`
    })
    inputElement.addEventListener("focusout", function () {
        if (inputElement.value.trim() == "") {
            document.querySelector(".eye").style.display = `none`
            inputElement.value = null;
        }
    })
})
document.querySelector(".eye").addEventListener("click", (event) => {
    if (event.target.checked) {
        password.type = `text`
    } else {
        password.type = `password`
    }
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

    signUpDiv.innerHTML = `<img class="wheelLoader" src="../../utils/loader/wheel.png">`;
    signUpDiv.classList.add("loaderContainer");
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .then(() => {
            signInWithEmailAndPassword(auth, email.value, password.value)
        }).then(async () => {
            await updateProfile(auth.currentUser, {
                displayName: username.value
            })
            let wishListDoc = doc(db, "usersWishList", auth.currentUser.uid);
            wishListDoc = await getDoc(wishListDoc);
            if (!wishListDoc.exists()) {
                await setDoc(doc(db, "usersWishList", auth.currentUser.uid), {
                    username: username.value,
                    photoURL: '../../utils/newUser.png',
                    wishlist: [],
                });
            }
            window.location.href = "../../views/destinations/allLocations.html"
        })
        .catch((error) => {
            alert(error.message)
        });
})

//Google Sign Up
const googleBtn = document.querySelector(".google");
const provider = new GoogleAuthProvider();
googleBtn.addEventListener("click", async () => {
    signInWithPopup(auth, provider)
        .then(async (result) => {
            if (result.user) {
                const user = result.user;
                let wishListDoc = doc(db, "usersWishList", auth.currentUser.uid);
                wishListDoc = await getDoc(wishListDoc);
                if (!wishListDoc.exists()) {
                    await setDoc(doc(db, "usersWishList", auth.currentUser.uid), {
                        username: user.displayName,
                        photoURL: user.photoURL,
                        wishlist: []
                    })
                }
                window.location.href = "../../views/destinations/home.html"
            }
        })
        .catch((error) => {
            console.error('Error:', error.message);
        });
})

