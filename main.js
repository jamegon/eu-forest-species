const $map = document.getElementById('map');
const $controls = document.getElementById('controls');
const Europe_Center = {lat: 47.582798, lng: 9.707756};
//takes a global variable of all the page
const{scatterplotLayer, GoogleMapsOverlay}=deck;
let GMAP, DECKGL_OVERLAY;

function updateMap(country){
    console.log(this.textContent);
}

function renderButtonElement(country){
    const element = document.createElement('button')
    element.textContent = country
    element.addEventListener('click', updateMap)
    $controls.appendChild(element)
}

async function renderButton(){
    const response = await fetch('./catalogs/countries.json')
    const countries = await response.json()
    countries.forEach(renderButtonElement);
}

function initMap(){

GMAP = new google.maps.Map($map , {
    zoom: 4,
    center: Europe_Center
});
renderButton()
}

google.maps.event.addDomListener(window,'load',initMap);