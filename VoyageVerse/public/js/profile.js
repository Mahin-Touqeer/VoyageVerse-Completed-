
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"
import { getFirestore, getDocs, collection, doc, getDoc, query, where, updateDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
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
const auth = getAuth(app); //will be used later
const db = getFirestore(app);
let outerDiv = document.querySelector(".outerDiv");
const dpImg = document.querySelector(".dp img")
const h2 = document.querySelector(".banner h2")
document.querySelector(".dashboard").style.color = `black`

//----------------------------------------------
let renderWishlist = async (userID) => {
    outerDiv.innerHTML = ``;
    let wishListDoc = doc(db, "usersWishList", userID);
    wishListDoc = await getDoc(wishListDoc);
    let wishListArr = wishListDoc.data().wishlist

    await wishListArr.forEach(async (locationID) => {
        const docRef = doc(db, "destinations", locationID)
        const location = await getDoc(docRef);
        let str = `<div class="anchor" type="button" id=${location.id}>
                    <div class="card" >
                            <img src="${location.data().image[0]}" class="card-img-top indexImages" alt="listing_image" >
                            <div class="card-body">
                                <h5 class="card-title">${location.data().title}</h5>
                                <p class="card-text"><i class="fa-solid fa-location-dot" style="color: #f16c1c; "></i>${location.data().country}</p>
                            </div>
                    </div>
                    </div>`
        outerDiv.innerHTML += str;
        func()
    });
}


let rendermyLocation = async (userID) => {
    outerDiv.innerHTML = ``;
    let allLocations = await getDocs(collection(db, "destinations"));
    allLocations.forEach((doc) => {
        if (doc.data().owner == userID) {
            let str = `<div class="anchor" type="button" id=${doc.id}>
            <div class="card" >
                    <img src="${doc.data().image[0]}" class="card-img-top indexImages" alt="listing_image" >
                    <div class="card-body">
                        <h5 class="card-title">${doc.data().title}</h5>
                        <p class="card-text"><i class="fa-solid fa-location-dot" style="color: #f16c1c; "></i>${doc.data().country}</p>
                    </div>
            </div>
            </div>`
            outerDiv.innerHTML += str;
            func()
        }
    })
}
//link data to their show page
let func = async function () {
    let anchor = document.querySelectorAll(".anchor");
    anchor.forEach(el => {
        el.addEventListener('click', async () => {
            console.log(el.id);
            document.cookie = `toShowId = ${el.id}; path=/`;
            console.log(`Clicked: ${el.id} `);
            window.location.href = "../../views/destinations/show.html";
        });
    });
}

onAuthStateChanged(auth, async (user) => {
    if (user) {
        let wishListDoc = doc(db, "usersWishList", auth.currentUser.uid);
        wishListDoc = await getDoc(wishListDoc);
        h2.innerText = `Explore your dream destinations, ${user.displayName}!`
        dpImg.src = wishListDoc.data().photoURL
        renderWishlist(user.uid)
    } else {
        alert("please sign In to add to wishList");
        window.location.href = "../../views/destinations/home.html";
    }
});

const nav = document.querySelector(".nav");
const move = document.querySelector(".move");
const myLocation = document.querySelector(".myLocation");
const wishlist = document.querySelector(".wishlist");
const file = document.querySelector("#image");
const cloudName = 'dqx3jfx7m';
const uploadPreset = 'VoyageVerse';
const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;


file.addEventListener("change", async () => {
    let formData = new FormData();
    formData.append('file', file.files[0]);
    formData.append('upload_preset', uploadPreset);
    let response = await fetch(url, {
        method: 'POST',
        body: formData,
    });
    let data = await response.json();
    console.log('Uploaded:', data);

    console.log("url:" + data.secure_url);

    let msg = await updateDoc(doc(db, "usersWishList", auth.currentUser.uid), {
        photoURL: data.secure_url
    })
    console.log(msg);
    dpImg.src = data.secure_url
})


myLocation.addEventListener("click", async () => {
    if (!move.classList.contains("moveRight")) {
        return
    }
    move.classList.remove("moveRight")
    rendermyLocation(auth.currentUser.uid)
})
wishlist.addEventListener("click", async () => {
    if (move.classList.contains("moveRight")) {
        return
    }
    move.classList.add("moveRight")
    renderWishlist(auth.currentUser.uid)
})

