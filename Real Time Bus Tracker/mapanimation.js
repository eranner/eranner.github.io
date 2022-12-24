let changeLocation = document.querySelector('.header')
const busStops = [
  [-75.258469, 41.576944],
  [-75.257862, 41.574557],
  [ -75.256534, 41.573822],
  [-75.255089, 41.571234],
  [-75.254599, 41.570322],
  [-75.254166, 41.569554],
  [-75.254317, 41.570609],
//   [-71.110799, 42.369192],
//   [-71.113095, 42.370218],
//   [-71.115476, 42.372085],
//   [-71.117585, 42.373016],
//   [-71.118625, 42.374863],
];

let names = ['The Wayne Hotel', 'Irving Cliff Brewery', 'Scarfallotos Towne House Diner', 'Here & Now Brewing Company', 'Native', 'Brankos Patisserie', 'Gravity Ice Cream']

mapboxgl.accessToken = 'pk.eyJ1IjoiZXJhbm5lciIsImEiOiJjbGJmd2RhNWYwNXZkM3ZvM3g2N3dlcjNlIn0.gCfhrv77pL22nDbttDBvSw';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-75.254758, 41.572198], // starting position [lng, lat]
    zoom: 14 // starting zoom
});

// TODO: add a marker to the map
let marker = new mapboxgl.Marker().setLngLat([-75.258469, 41.576944]).addTo(map);


// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops

  setTimeout(() => {
    if (counter >= busStops.length){
     changeLocation.textContent='Best Restaurants To Visit In Honesdale, PA!'
     counter = 0
      return;
    }
    marker.setLngLat(busStops[counter]);
    
    changeLocation.textContent = names[counter]
    counter++;
    move();
  }, 2000);
}
let clickMe = document.getElementById('moveMarker')
clickMe.addEventListener('click', () => {
  move()
  // getRoute()
}
)

// async function getRoute() {
//   let data = await fetch('https://api-v3.mbta.com/docs/swagger/swagger.json/data/{index}/attributes/short_name')
//   let read = await data.text()
//   console.log(read)
// }


