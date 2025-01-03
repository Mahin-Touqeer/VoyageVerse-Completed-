import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import later from "./showUtils/later.js";
import countryList from "./showUtils/codes.js"
import { getNearestAirports } from "./showUtils/Airport.js";
import { getFirestore, arrayRemove, arrayUnion, collection, addDoc, doc, getDoc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import getNearbyHotels from "./showUtils/hotel.js";
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
let showDiv = document.createElement('div');
theme_dark.insertAdjacentElement("afterbegin", showDiv);

let location;
//display function
let display = () => {
  if (!location) {
    showDiv.innerHTML = `<img class="wheelLoader" src="../../utils/loader/wheel.png">`;
    showDiv.classList.add("loaderContainer");
  } else {
    showDiv.classList.remove("loaderContainer");
    addBody()
  }
}
display()
//getting location
const locationID = document.cookie.split(`=`)[1];
let currency, currencyName, airports, hotels, languages;
async function getLocation() {
  //getting location
  const locationRef = doc(db, "destinations", locationID)
  location = await getDoc(locationRef);
  //getting currency
  currencyName = await fetch(`https://restcountries.com/v3.1/name/${location.data().country}`)
  currencyName = await currencyName.json();
  currency = Object.keys(currencyName[0].currencies)[0];
  //assigning languages to variables
  languages = await fetch(`https://restcountries.com/v3.1/name/${location.data().country}`)
  languages = await languages.json();
  languages = Object.values(languages[0].languages)
  display()
}
getLocation();
//the addbody function
let addBody = function () {
  let str = `<div class="card mt-3 col-md-10 offset-lg-1">
                    <div class="imageDiv">
                    <span class="placeholder-glow col-12">
                        <span class="placeholder col-12">
                    </span>
                    
                    </span class="movesSpan"> 
                        <span type="button" class="moves" id="right"><i class="bi bi-caret-right-fill"></i></span>
                        <span type="button" class="moves" id="left"><i class="bi bi-caret-left-fill"></i></span>    
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">${location.data().title} 
                        <button class="wishlist-btn clicked">
                          <span class="heart"></span>
                          Add to Wishlist
                        </button> 
                      </h5>
                      <p class="card-text">${location.data().description}</p>
                      <p class="card-text">${location.data().location}</p>
                      <p class="card-text">${location.data().country}</p>
                      <p class="card-text">Currency: ${currencyName[0].currencies[currency].name} (${currency})</p>
                      <p class="card-text languagesPara">Language(s): </p>

                      <a href="/../../views/destinations/edit.html" class="btn btn-warning editBtn" style="color:white">Edit</a>
                      <span>
                        <button class="btn btn-outline-warning deleteBtnTrigger" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                      </span>    
                    </div>
            </div>
        ${later}`
  showDiv.innerHTML = str;
  //Bootstrap form script below
  (() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  })()

  //delete Location functionality
  let deleteBtn = document.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", async () => {
    console.log('clicked delete');

    showDiv.innerHTML = `<img class="wheelLoader" src="../../utils/loader/wheel.png">`;
    showDiv.classList.add("loaderContainer");
    await deleteDoc(doc(db, "destinations", locationID))
    window.location.href = "../../views/destinations/allLocations.html"
  })

  //review functionality
  let reviewForm = document.querySelector(".reviewForm");
  let comment = document.querySelector("#comment")
  reviewForm.addEventListener("submit", async (event) => {
    event.preventDefault()
    if (auth.currentUser) {
      if (comment.value) {
        event.preventDefault()
        const ratingValue = getSelectedRadioValue();
        let docRef = await addDoc(collection(db, "reviews"), {
          rating: parseInt(ratingValue),
          comment: comment.value,
          owner: auth.currentUser.uid,
        })
        console.log(docRef);

        await updateDoc(doc(db, "destinations", locationID), {
          reviews: arrayUnion(docRef.id)
        })
        reviewForm.classList.add('was-validated')
        let userinfo = await getDoc(doc(db, "usersWishList", auth.currentUser.uid))
        addReviewComponent(ratingValue, comment.value, docRef.id, userinfo)
        deleteReviewBtn()
        reviewForm.classList.remove('was-validated')
        comment.value = null
      }
      else {
        console.log('no value');
      }
    } else {
      alert('please log in')
    }

  })
  //add Language
  const languagesPara = document.querySelector(".languagesPara")
  languages.forEach(lang => {
    languagesPara.innerText += ` ${lang} `
  })
  wishlistFunction();
  currencyConverter();
  weather();
  displayReview(location);
  // inserting images
  let imageDiv = document.querySelector(".imageDiv");
  location.data().image.forEach((imgURL) => {
    let imgEl = document.createElement("img")
    imgEl.src = imgURL
    imgEl.classList.add('showImages', 'target')
    imageDiv.appendChild(imgEl);
  })
  document.querySelector(".imageDiv img").classList.add("opacity");
  let span = document.createElement('span')
  span.classList.add('showImages', 'placeholder')
  imageDiv.appendChild(span)

  function adjustDivWidth() {

    const container = document.querySelector('.imageDiv');
    const images = document.querySelectorAll('.imageDiv img');
    let maxWidth = 0;
    let maxHeight = 0;
    for (const img of images) {
      maxWidth = Math.max(maxWidth, img.width);
      maxHeight = Math.max(maxHeight, img.height);

    }
    container.style.width = `${maxWidth}px`;
    document.documentElement.style.setProperty('--containerWidth', `${maxWidth}px`);
    document.documentElement.style.setProperty('--maxHeight', `${maxHeight}px`);

    document.querySelector(".placeholder-glow").style.display = `none`
    document.querySelector(".placeholder").style.display = `none`
    document.querySelector(".placeholder-glow").style.zIndex = `-1`


  }

  setTimeout(adjustDivWidth, 1000)
  if (auth.currentUser && (auth.currentUser.uid == location.data().owner)) {
    console.log(`authorised`);
  } else {
    document.querySelector('.deleteBtnTrigger').style.display = `none`
    document.querySelector(".editBtn").style.display = `none`
  }
  //image Slider
  let left = document.querySelector("#left")
  let right = document.querySelector("#right")
  let target = document.querySelectorAll(".target")
  let currentTarget = 0;
  let length = location.data().image.length;
  left.style.display = `none`
  if (length == 1) {
    right.style.display = `none`;
    return;
  }
  right.addEventListener("click", () => {
    if (length == 1) {
      return;
    }
    right.style.display = `inline-block`;
    console.log("next img");
    if (currentTarget == 0) {
      target[0].classList.remove("opacity")
    }
    if (currentTarget == length) {
      currentTarget = 0
    }
    target[currentTarget].classList.add("inactive")
    target[currentTarget].classList.remove("active")
    if (currentTarget == length - 1) {
      target[0].classList.add("active")
      target[0].classList.remove("inactive")
    }
    else {
      target[currentTarget + 1].classList.add("active")
      target[currentTarget + 1].classList.remove("inactive")
    }
    currentTarget++
  })
  function getSelectedRadioValue() {
    const radios = document.getElementsByName("reviews");
    for (let radio of radios) {
      if (radio.checked) {
        console.log("Selected value:", radio.value);
        return radio.value;
      }
    }
    console.log("No radio button selected.");
    return null;
  }
}

//currency converter below
function currencyConverter() {
  const apiURL = 'https://api.exchangerate-api.com/v4/latest/';
  const fromCurrencyEl = document.getElementById('fromCurrency');
  const toCurrencyEl = document.getElementById('toCurrency');

  document.getElementById('convertBtn').addEventListener('click', async () => {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('result');
    if (!amount || amount <= 0) {
      resultDiv.innerText = 'Please enter a valid amount';
      return;
    }

    try {
      const response = await fetch(`${apiURL}${fromCurrency}`);
      const data = await response.json();
      console.log(data);

      const rate = data.rates[toCurrency];
      const result = (amount * rate).toFixed(2);

      resultDiv.innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    } catch (error) {
      resultDiv.innerText = 'Error fetching exchange rates. Please try again later.';
      console.error(error);
    }
  });


  let arrs = ['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'FOK', 'GBP', 'GEL', 'GGP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'IMP', 'INR', 'IQD', 'IRR', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KID', 'KMF', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLE', 'SLL', 'SOS', 'SRD', 'SSP', 'STN', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TVD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VES', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XDR', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW', 'ZWL'
  ]

  for (let ele of arrs) {
    let option = document.createElement("option")
    let option2 = document.createElement("option")
    option.value = ele
    option.innerText = ele;
    option2.value = ele
    option2.innerText = ele;
    document.getElementById('fromCurrency').append(option)
    document.getElementById('toCurrency').append(option2)
    if (ele == currency) {
      option.selected = `selected`
    }
    if (ele == 'INR') {
      option2.selected = 'selected'
    }
  }
  updateFlag(fromCurrencyEl)
  fromCurrencyEl.addEventListener('change', (evt) => {
    updateFlag(evt.target);
  })
  toCurrencyEl.addEventListener('change', (evt) => {
    updateFlag(evt.target);
  })
  function updateFlag(element) {
    let currCode = element.value;
    let countryCode = countryList[currCode]

    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.previousSibling.previousSibling;
    img.src = newSrc;
  }
  let selects = document.querySelectorAll('.translationBox select')
  selects.forEach((currentItem, index) => {
    currentItem.addEventListener('change', () => {
      changeContent()
    })
    for (let countryCode in language) {
      let selected;
      if (index == 0 && countryCode == "en-GB") {
        selected = "selected"
      } else if (index == 1 && countryCode == "hi-IN") {
        selected = "selected"
      }
      let option = `<option value=${countryCode} ${selected}>${language[countryCode]}</option>`;
      currentItem.innerHTML = currentItem.innerHTML + option
    }
  })

  const fromContent = document.querySelector(".translationBox .fromContent");
  const toContentx = document.querySelector(".translationBox .toContent");

  fromContent.addEventListener("input", () => {
    changeContent()
  })
  async function changeContent() {
    let content = fromContent.value;
    let fromLang = selects[0].value;
    let toLang = selects[1].value;

    if (!content) {
      toContentx.innerText = null;
      return
    }
    let toContent = await fetch(`https://api.mymemory.translated.net/get?q=${content}&langpair=${fromLang}|${toLang}`)

    toContent = await toContent.json()
    console.log(toContent);

    console.log(toContent.responseData.translatedText);

    toContentx.innerText = toContent.responseData.translatedText;
  }
}

//weather functionality
let lattitude, longitude;
async function weather() {
  const apiKey = '25db15ec6f844a38f2c014cfbbce5450'
  const weatherInfo = document.getElementById('weatherInfo');
  const weatherImg = document.querySelector(".weatherImg");


  async function intermediateWeather() {
    let locationOfLocation = location.data().location;
    let [exact, city] = locationOfLocation.toLowerCase().split(",");
    if (!city) {
      city = exact
    }
    city = city.split(" ").join('+')

    let coordinateResp = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)
    let coordinateRespParsed = await coordinateResp.json();


    lattitude = coordinateRespParsed[0].lat;
    longitude = coordinateRespParsed[0].lon;
    airports = await getNearestAirports(lattitude, longitude)
    displayAirport(airports);

    hotels = await getNearbyHotels(lattitude, longitude)
    if (hotels) {
      displayHotels(hotels);
    }
    insertMap()
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location.data().country}&appid=${apiKey}&units=metric`)
      }
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      displayWeather(data);
    } catch (error) {
      document.querySelectorAll(".converter")[1].style.display = `none`;
      weatherInfo.innerHTML = `Error: ${error.message}`;
    }
  };
  intermediateWeather()
  //display Airport
  function displayAirport(airports) {
    if (!airports.length) {
      return
    }
    document.querySelector(".airport-item").style.display = `block`
    airports.forEach(el => {
      document.querySelector("#collapseOne .accordion-body").innerHTML += `&#x2022; ${el.name} AIRPORT<br>`
    })
  }
  //display hotels
  function displayHotels(hotels) {
    if (!hotels.length) {
      document.querySelector('.hotel-item').style.display = `none`
      return
    }
    let filtertedHotels = hotels.slice(0, 6);

    filtertedHotels.forEach(el => {
      document.querySelector('#collapseTwo .accordion-body').innerHTML += `&#x2022; ${el.name} <br>`
    })
  }
  //display
  function displayWeather(data) {
    const { name, main, weather, wind } = data;

    document.querySelector("#weatherVideoSrc").src = `../../utils/weather_videos/02d.mp4`
    weatherImg.innerHTML += `
      <h2>${Math.floor(main.temp)}<span>°</span></h2>
      <h4><b>Max:</b>${main.temp_max}°  &nbsp;<b>Min:</b>${main.temp_min}°</h4>
    `
    weatherInfo.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Condition: ${weather[0].main}</p>
        <p>Wind Speed: ${wind.speed} m/s</p>
    `;
    document.querySelector(".weather .placeholder-glow").style.display = `none`
  }
}
//wishList Function below
async function wishlistFunction() {
  const wishlistBtn = document.querySelector(".wishlist-btn");
  if (!auth.currentUser) {
    wishlistBtn.style.display = `none`;
    return
  }
  const isLoved = doc(db, 'usersWishList', auth.currentUser.uid)
  const isLovedSnap = await getDoc(isLoved)
  if (isLovedSnap.exists() && isLovedSnap.data().wishlist.includes(locationID)) {
    wishlistBtn.classList.remove("clicked")
  } else {
    console.log('no such document');
  }
  wishlistBtn.addEventListener('click', async () => {
    console.log('clicked');

    if (wishlistBtn.classList.contains('clicked')) {
      console.log('need to add');
      await updateDoc(doc(db, "usersWishList", auth.currentUser.uid), {
        wishlist: arrayUnion(locationID)
      });
    } else {
      console.log('need to remove');
      await updateDoc(doc(db, "usersWishList", auth.currentUser.uid), {
        wishlist: arrayRemove(locationID)
      });
    }
    wishlistBtn.classList.toggle("clicked")
  })
}
//map fn
async function insertMap() {
  mapboxgl.accessToken = 'pk.eyJ1IjoibWFoaW4wOTUyIiwiYSI6ImNtNHlkdWZrcTEweHgyanNjbjhkZm9nOGQifQ.slHmmls4pbcnyzsy8A4tNg';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [longitude, lattitude],
    zoom: 9
  });
  const marker = new mapboxgl.Marker().setLngLat([longitude, lattitude]).addTo(map);
}
//Display review Logic
function displayReview(x) {
  const reviewDiv = document.querySelector(".reviewDiv")

  if (!x.data().reviews) {
    return
  }
  x.data().reviews.forEach(async reviewId => {
    const reviewRef = doc(db, "reviews", reviewId)
    let review = await getDoc(reviewRef);
    review = review.data();
    let toDisplay = "hidden";
    let wishListDoc = doc(db, "usersWishList", review.owner);
    wishListDoc = await getDoc(wishListDoc);
    if (auth.currentUser && review.owner == auth.currentUser.uid) {
      toDisplay = null
    }
    let reviewCard = document.createElement("div");
    reviewCard.classList.add('reviewCard');

    let iconString = ``;
    for (let i = review.rating; i > 0; i--) {
      iconString += `<i class="fa-solid fa-star" style="color: black;font-size: 0.6rem;margin: 0.03rem;"></i>`
    }
    reviewCard.innerHTML = `
                        <div class="ratingDiv" >
                        
                          <span class="bahar">
                              
                              <img src="${wishListDoc.data().photoURL}">
                              
                              <div>
                                <b>${wishListDoc.data().username}</b> &nbsp;
                                <span>
                                ${iconString}
                                </span>
                              </div>


                          </span>
                          
                          <span class="dropdown" ${toDisplay}>
                                      <button class="threeDotsBtn" type="button" data-bs-toggle="dropdown" aria-expanded="false" fdprocessedid="g0e1hn" >
                                        <i class="bi bi-three-dots-vertical"></i>
                                      </button>
                                      <ul class="dropdown-menu" >
                                        <li><button class="deleteReviewBtn dropdown-item" id=${reviewId} href="#">Delete</button></li>
                                      </ul>
                          </span> 
                        </div>
                        <div class="commentDiv"  >
                            <span>&#8220;${review.comment}&#8221;</span>
                        </div>`
    reviewDiv.appendChild(reviewCard)
    deleteReviewBtn()
  })
}
function addReviewComponent(dummyRating, dummyComment, dummyID, dummyinfo) {
  const reviewDiv = document.querySelector(".reviewDiv")
  let reviewCard = document.createElement("div");
  reviewCard.classList.add('reviewCard');
  reviewCard.id = dummyID

  let iconString = ``;
  for (let i = dummyRating; i > 0; i--) {
    iconString += `<i class="fa-solid fa-star" style="color: black;font-size: 0.6rem;margin: 0.03rem;"></i>`
  }
  reviewCard.innerHTML = `
                        <div class="ratingDiv" >
                        
                          <span class="bahar">
                              <img src="${dummyinfo.data().photoURL}">
                              
                              <div>
                                <b>${dummyinfo.data().username}</b> &nbsp;
                                <span>
                                ${iconString}
                                </span>
                              </div>


                          </span>
                          
                          <span class="dropdown">
                                      <button class="threeDotsBtn" type="button" data-bs-toggle="dropdown" aria-expanded="false" fdprocessedid="g0e1hn" >
                                        <i class="bi bi-three-dots-vertical"></i>
                                      </button>
                                      <ul class="dropdown-menu" style="">
                                        <li><button class="deleteReviewBtn dropdown-item" id=${dummyID} role="button">Delete</button></li>
                                      </ul>
                          </span> 
                        </div>
                        <div class="commentDiv"  >
                            <span>&#8220;${dummyComment}&#8221;</span>
                        </div>`
  reviewDiv.appendChild(reviewCard)
  deleteReviewBtn()
}
function deleteReviewBtn() {
  console.log("deleteBtn triggered");
  let deleteReviewBtn = document.querySelectorAll(".deleteReviewBtn")
  console.log(deleteReviewBtn);

  deleteReviewBtn.forEach(btn => {
    btn.addEventListener("click", async () => {
      await deleteDoc(doc(db, "reviews", btn.id))
      await updateDoc(doc(db, "destinations", locationID), {
        reviews: arrayRemove(btn.id)
      })
      btn.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
    })
  })
}
