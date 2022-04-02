// Geomap JavaScript

var myMap = L.map("geomap-id", {
    center: [33.7490, -84.3880],
    zoom: 6
  });
  
  // Adding a tile layer (the background map image) to our map:
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

  // console.log("Hello")
