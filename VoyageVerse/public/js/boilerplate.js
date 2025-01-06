import navbarHTML from "../../views/includes/navbar.js";
import footerHTML from "../../views/includes/footer.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
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
let body = document.querySelector("body");
let theme_dark = document.querySelector(".theme-dark");

//adding navbar + logic
let navdiv = document.createElement("div")
navdiv.classList.add("container-fluid");
navdiv.innerHTML = `${navbarHTML}`
body.insertAdjacentElement('afterbegin', navdiv);
let authorization = document.querySelector(".authorization")
let authorization2 = document.querySelector('.authorization2')


//creating loader
authorization.innerHTML = `<div class="spinner-border text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>`

//adding footer
let footerdiv = document.createElement("div")
footerdiv.classList.add("footer");
footerdiv.classList.add("container-fluid");
footerdiv.innerHTML = `${footerHTML}`;
theme_dark.insertAdjacentElement("beforeend", footerdiv)
let needsLogin = document.querySelectorAll(".needs-login")
needsLogin.forEach((el) => {
    el.addEventListener("click", (event) => {
        if (!auth.currentUser) {
            let alert = document.createElement('span')
            alert.innerHTML = `<div class="alert alert-warning alert-dismissible fade mb-3 show col-lg-6 col-xl-6 col-xxl-6 col-md-12 col-md-12" role="alert" style='margin:auto'>
                                <strong><i class="fa-solid fa-triangle-exclamation" style="font-size:1rem;color:rgb(255, 28, 7);"></i></strong>You must be logged In to add Location
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`
            console.log(theme_dark.childElementCount);

            document.querySelector('nav').insertAdjacentElement("afterend", alert)
            event.preventDefault()
        }
    })
})
function authSignOut() {
    signOut(auth).then(() => {
    }).catch((error) => {
        console.log(error.message);
    });
}

onAuthStateChanged(auth, (user) => {
    authorization.innerHTML = ''
    if (user) {
        authorization.innerHTML = `<a class="buttons nav-item nav-link" role="button"><i class="fa-solid fa-user"></i>Log Out</a>`
        authorization2.innerHTML = `<a class="button1" role="button"><i class="fa-solid fa-user"></i>Log Out</a>`
        authorization.children[0].addEventListener("click", () => {
            authSignOut()
            window.location.href = "../../views/destinations/home.html";
        })
        authorization2.children[0].addEventListener("click", () => {
            authSignOut()
            window.location.href = "../../views/destinations/home.html";
        })
    } else {

        authorization.innerHTML = `<a style="padding-right:4px" class="buttons nav-item  nav-link " href="../../views/users/signUp2.html"><i class="fa-solid fa-user"></i>Sign Up</a>
                                    <a class="buttons nav-item nav-link " href="../../views/users/signin.html"><i class="fa-solid fa-user"></i>Sign In</a>`

        authorization2.innerHTML = `<a class="button1" href="../../views/users/signUp2.html"><i class="fa-solid fa-user"></i>Sign Up</a>
            <a class="button2" href="../../views/users/signin.html"><i class="fa-solid fa-user"></i>Sign In</a>`
    }
})
let i = 0
const menu = document.querySelector(".burger");
menu.addEventListener("click", () => {

    if (!i) {
        document.querySelector(".mobileNav").classList.add("opened")
        i = 1
    } else {
        document.querySelector(".mobileNav").classList.toggle("closed")
        document.querySelector(".mobileNav").classList.toggle("opened")
    }

})

