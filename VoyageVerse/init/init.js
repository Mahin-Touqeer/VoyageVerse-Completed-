import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import sampleDestinations from "./data2.js";
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
console.log(sampleDestinations.length);

async function addData() {
    try {
        for (let i = 0; i <= 26; i++) {
            let data = sampleDestinations[i];
            let data1 = await addDoc(collection(db, "destinations"), {
                title: data.title,
                description: data.description,
                image: data.image,
                location: data.location,
                country: data.country,
                owner: `ZULxjY9ZEbNmpqitfhQ4M5pEk043`
            });
            console.log(data1);
        }
        alert("data added")
    } catch (err) {
        console.log(err.message);
    }
}
addData()