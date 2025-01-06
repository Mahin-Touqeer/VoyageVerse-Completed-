
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"
import { getFirestore, getDocs, collection, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
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
document.querySelector(".allLocationsBtn").style.color = 'black'
let outerDiv = document.querySelector(".outerDiv");


//----------------------------------------------------------------------------------------------------------------------------------------------------------------
const pagination = document.querySelector(".pagination");
let idArray = [];
let currentPage = 1;
let noOfPages;

async function displayDocById(id) {
    outerDiv.innerHTML = null;
    let location = await getDoc(doc(db, 'destinations', id));
    location = await location.data();
    let str = `<div class="anchor" type="button" id=${id}>
                    <div class="card" >
                            <img src="${location.image[0]}" class="card-img-top indexImages" alt="listing_image" >
                            <div class="card-body">
                                <h5 class="card-title">&nbsp;&nbsp;${location.title}</h5>
                                <p class="card-text"><i class="fa-solid fa-location-dot" style="color: #f16c1c; "></i>${location.country}</p>
                            </div>
                    </div>
                    </div>`
    outerDiv.innerHTML += str;
    func()

}
function renderPage() {
    for (let i = 12 * (currentPage - 1); i < 12 * currentPage; i++) {
        if (idArray[i]) {
            displayDocById(idArray[i]);
        }
    }
}

//get all destinations data
let renderData = async () => {
    let allLocations = await getDocs(collection(db, "destinations"));
    allLocations.forEach((doc) => {
        idArray.push(doc.id)
    });
    console.log(idArray.length);

    noOfPages = Math.ceil((idArray.length) / 12);

    setTimeout(applyPageFunctionality, 1000)
    renderPage()
}
renderData();


//link data to their show page
let func = async function () {
    let anchor = document.querySelectorAll(".anchor");
    anchor.forEach(el => {
        el.addEventListener('click', async () => {
            document.cookie = `toShowId = ${el.id}; path=/`
            window.location.href = "../../views/destinations/show.html";
            console.log(`Clicked: ${el.id}`);
        });
    });
}

function applyPageFunctionality() {
    let selected = 'selected';
    for (let j = 1; j <= noOfPages; j++) {
        let el = document.createElement('li')
        el.id = j
        el.classList.add("page-item")
        el.innerHTML = `<a class="page-link  ${selected}">${j}</a>`
        pagination.insertAdjacentElement("beforeend", el);
        el.addEventListener('click', () => {
            for (let child of pagination.children) {

                child.children[0].classList.remove('selected')

            }
            el.children[0].classList.add('selected')
            currentPage = el.id;
            renderPage();
        })
        selected = null
    }
}
