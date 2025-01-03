
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

import { getFirestore, addDoc, collection, setDoc, doc, arrayUnion } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
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
const db = getFirestore(app);
const auth = getAuth(app);




let body = document.querySelector("body");
let theme_dark = document.querySelector(".theme-dark");

let newDiv = document.querySelector(".newDiv")


const title = document.querySelector("#title")
const description = document.querySelector("#description")
const image = document.querySelector("#image")
const location = document.querySelector("#location")
const country = document.querySelector("#country")
let msg1;

let newForm = document.querySelector(".newForm");

newForm.addEventListener("submit", function (event) {
    if (!newForm.checkValidity()) {
        return
    }
    event.preventDefault()

    console.log("still propagationg");
    addToDb(title.value, description.value, image.files, location.value, country.value)
    newDiv.innerHTML = `<img class="wheelLoader" src="../../utils/loader/wheel.png">`;
    newDiv.classList.add("loaderContainer");

})
async function addToDb(t, d, files, l, c) {
    try {

        const cloudName = 'dqx3jfx7m';
        const uploadPreset = 'VoyageVerse';
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

        let imageURLarr = [];
        for (let file of files) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', uploadPreset);
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log('Uploaded:', data);
            imageURLarr.push(data.secure_url);
        }
        msg1 = await addDoc(collection(db, "destinations"), {
            title: t,
            description: d,
            image: imageURLarr,
            location: l,
            country: c,
            owner: auth.currentUser.uid
        });

        window.location.href = "../../views/destinations/allLocations.html";
    } catch (err) {
        console.log(err.message);
    }
}