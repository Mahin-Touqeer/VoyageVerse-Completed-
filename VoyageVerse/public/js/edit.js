import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"
import { getFirestore, getDocs, collection, doc, getDoc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

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
let locationData, locationDataRef;
let editDiv = document.querySelector(".editDiv")


const title = document.querySelector("#title")
const description = document.querySelector("#description")
const location = document.querySelector("#location")
const country = document.querySelector("#country")
const form = document.querySelector("form")

function assignValues(t = "loading...", d = "loading...", l = "loading...", c = "loading...") {
    title.value = t
    description.value = d
    location.value = l
    country.value = c
}
assignValues()
//getting location
async function getLocation() {
    locationDataRef = doc(db, "destinations", document.cookie.split(`=`)[1])
    locationData = await getDoc(locationDataRef);
    locationData = locationData.data()
    console.log(locationData);
    assignValues(locationData.title, locationData.description, locationData.location, locationData.country)
}
getLocation();

const submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", async (event) => {
    event.preventDefault()
    editDiv.innerHTML = `<img class="wheelLoader" src="../../utils/loader/wheel.png">`;
    editDiv.classList.add("loaderContainer");
    await updateDoc(locationDataRef, {
        title: title.value,
        description: description.value,
        location: location.value,
        country: country.value
    });
    window.location.href = "../../views/destinations/show.html"
})
