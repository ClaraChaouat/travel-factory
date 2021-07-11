// JAVASCRIPT CALL AJAX
// Creating variables to fill up the lattitude and longitude information

const elLatGeolocLat = document.querySelector("[data-id=contact-geoloc-lat");
const elLatGeolocLong = document.querySelector("[data-id=contact-geoloc-long");
const elLatGeolocLat2 = document.querySelector("[data-id=contact-geoloc-lat2");
const elLatGeolocLong2 = document.querySelector(
  "[data-id=contact-geoloc-long2"
);
const elLatGeolocLat3 = document.querySelector("[data-id=contact-geoloc-lat3");
const elLatGeolocLong3 = document.querySelector(
  "[data-id=contact-geoloc-long3"
);
const elLatGeolocLat4 = document.querySelector("[data-id=contact-geoloc-lat4");
const elLatGeolocLong4 = document.querySelector(
  "[data-id=contact-geoloc-long4"
);
const elLatGeolocLat5 = document.querySelector("[data-id=contact-geoloc-lat5");
const elLatGeolocLong5 = document.querySelector(
  "[data-id=contact-geoloc-long5"
);
const elLatGeolocLat6 = document.querySelector("[data-id=contact-geoloc-lat6");
const elLatGeolocLong6 = document.querySelector(
  "[data-id=contact-geoloc-long6"
);
const elLatGeolocLat7 = document.querySelector("[data-id=contact-geoloc-lat7");
const elLatGeolocLong7 = document.querySelector(
  "[data-id=contact-geoloc-long7"
);
const elLatGeolocLat8 = document.querySelector("[data-id=contact-geoloc-lat8");
const elLatGeolocLong8 = document.querySelector(
  "[data-id=contact-geoloc-long8"
);
const apiKey = `AIzaSyA1j6A8Od1aoYlpBezH_fb0KbscxLMaMF`;

// Defining a function to fetch lattiude and longitude information from the API

function fetchingGeoCoordinates() {
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=795+Folsom+Ave+CA&key=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      elLatGeolocLat.innerText = data.results[0].geometry.location.lat;
      elLatGeolocLong.innerText = data.results[0].geometry.location.lng;
      elLatGeolocLat2.innerText = data.results[0].geometry.location.lat;
      elLatGeolocLong2.innerText = data.results[0].geometry.location.lng;
      elLatGeolocLat3.innerText = data.results[0].geometry.location.lat;
      elLatGeolocLong3.innerText = data.results[0].geometry.location.lng;
      elLatGeolocLat4.innerText = data.results[0].geometry.location.lat;
      elLatGeolocLong4.innerText = data.results[0].geometry.location.lng;
      elLatGeolocLat5.innerText = data.results[0].geometry.location.lat;
      elLatGeolocLong5.innerText = data.results[0].geometry.location.lng;
      elLatGeolocLat6.innerText = data.results[0].geometry.location.lat;
      elLatGeolocLong6.innerText = data.results[0].geometry.location.lng;
      elLatGeolocLat7.innerText = data.results[0].geometry.location.lat;
      elLatGeolocLong7.innerText = data.results[0].geometry.location.lng;
      elLatGeolocLat8.innerText = data.results[0].geometry.location.lat;
      elLatGeolocLong8.innerText = data.results[0].geometry.location.lng;
    });
}

//Calling the function to fetch info from the API
window.onload = fetchingGeoCoordinates;

// JAVASCRIPT DOM MODIFICATION
//Adding functionalities to the contact buttons

// Delete contact button - Delete the contact and modify the DOM
Array.from(document.getElementsByClassName("contact-card")).forEach(
  (elCard) => {
    const elDeleteBtn = elCard.getElementsByClassName("js-remove-contact")[0];
    elDeleteBtn.addEventListener("click", (event) => {
      elCard.remove();
    });
  }
);

// Creating an event listener on the adding contacts button

const addingContactBtn = document.getElementsByClassName(
  "js-adding-contact-cross"
)[0];
const contactTemplate = document.getElementById("empty-card");
const deleteTemplateBtn = document.getElementById("js-delete-template");
console.log(deleteTemplateBtn);

// Creating a function to delete card duplicates
function removeDuplicate() {
  console.log("ok2");
  contactTemplateDuplicate.remove();
}

// Creating a fucntion to add a new contact

function cloneContact() {
  contactTemplateDuplicate = contactTemplate.cloneNode(true);
  document
    .getElementById("main-container")
    .appendChild(contactTemplateDuplicate);
  contactTemplateDuplicate.addEventListener("click", removeDuplicate);
}

addingContactBtn.addEventListener("click", cloneContact);
