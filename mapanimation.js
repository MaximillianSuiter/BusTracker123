mapboxgl.accessToken = 'pk.eyJ1IjoibWF4NDI5IiwiYSI6ImNsOG90YWxzZjAxNG0zd3FtbXdybGN4eGIifQ.vG2_FlmLStJZyf096MHQog';

let map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
center: [-71.101, 42.358], // starting position
zoom: 10 // starting zoom
});

var marker1 = new mapboxgl.Marker()
.setLngLat([-71.101, 42.358])
.addTo(map);

const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];
 
let counter = 0;
function move() {
	marker.setLngLat(busStops[counter])
    marker.addTo(map);
    counter++;
    setTimeout(move,1000);
	
}

