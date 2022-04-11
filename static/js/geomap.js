// Geomap JavaScript

  // HAPPINES AND UNHAPPINES AROUND THE GLOBE
  // BEFORE COVID-19 AND THROUGH COVID-19
  // DATA COUNTRY, HAPPINES LEVEL, AND LOCATION --
  // YEARS TO VISUALIZE 2018, 2019, 2020, AND 2021
  // HAPPY COUNTRIES
  var happy_2018 = [
  {
  country: "1st Finland in 2018, 2019, 2020, and 2021",
  happiness: 7.809,
  location: [61.92411, 25.748151]
  },
  {
    country: "2nd - Norway - 2018",
    happiness:  7.594,
    location: [60.472024, 8.468946]
  },
  {
  country: "3rd - Denmark - 2018",
  happiness:  7.555,
  location: [56.26392,  9.501785]
  },
  {
  country: "2nd - Denmark - 2019, 2020, and 2021",
  happiness:  7.6,
  location: [56.460449, 10.036367]
  },
  {
  country: "3rd Norway - 2019",
  happiness:  7.554,
  location: [58.969975, 5.733107]
  },
  {
  country: "2nd Denmark - 2020",
  happiness: 7.646,
  location: [57.046707, 9.935932]
  },
  {
  country: "3rd Switzerland 2020 and 2021",
  happiness: 7.560,
  location: [46.818188, 8.227512]
  }
  ];
  // UNHAPPY COUNTRIES
  var unHappy_2018 = [
    {
      country: "1st Malawi - 2018",
      happiness:  3.587,
      location: [-13.254308,  35.301525]
    },
    {
      country: "2nd Haiti - 2018",
      happiness:  3.582,
      location: [18.971187, -72.285215]
    },
    {
      country: "3rd Liberia - 2018",
      happiness:  3.495,
      location: [6.428055,  -9.429499]
    },
    {
    country: "1st Haiti - 2019",
    happiness: 3.597,
    location: [19.934889, -72.830872]
    },
    {
    country: "2nd Botswana - 2019",
    happiness:  3.488,
    location: [-22.328474,  24.684866]
    },
    {
    country: "3rd Syria - 2019",
    happiness: 3.462,
    location: [34.802075, 38.996815]
    },
    {
    country: "1st India - 2020",
    happiness: 3.573,
    location: [20.593684, 78.96288]
    },
    {
    country: "2nd Malawi - 2020",
    happiness: 3.538,
    location: [-13.254308, 33.301525]
    },
    {
    country: "3rd Yemen - 2020",
    happiness: 3.527,
    location: [15.552727, 44.516388]
    },
    {
      country: "1st Burundi - 2021",
      happiness: 3.775,
      location: [-3.373056, 29.918886]
    },
    {
      country: "2nd Yemen - 2021",
      happiness: 3.658,
      location: [15.552727, 48.516388]
    },
    {
      country: "3rd Tanzania - 2021",
      happiness: 3.623,
      location: [-6.369028, 34.888822]
    }
    ];
  // CUSTOM ICON FROME THE MOVIE INSIDE OUT
    var happyIcon = L.icon({
      iconUrl: 'static/images/happy.png',
      iconSize:     [35, 35],
      iconAnchor:   [16, 37],
      popupAnchor:  [-3, -38]
    });
  
    var sadIcon = L.icon({
      iconUrl: 'static/images/sad.png',
      iconSize:     [35, 35],
      iconAnchor:   [16, 37],
      popupAnchor:  [-3, -38]
    });
  // MARKERS TO GET AND CALL THE DATA IN AN ARRAY
  var happyMarker = [];
  var unhappyMarker = [];
  // LOOPING OUR DATA, PUSHING INTO MARKERS, ASSIGNE CUSTOME ICONS, AND ADDING A TOOLTIP
  for (var i = 0; i < happy_2018.length; i++) {
    //var happyCountry = happy_2018[i];
    happyMarker.push(
    L.marker(happy_2018[i].location,{icon:happyIcon})
    .bindTooltip(`<h3><b>${happy_2018[i].country}<b/></h3>
    <hr> <h3>Happiness Level ${happy_2018[i].happiness}</h3>`)
    );
  };
    for (var i = 0; i < unHappy_2018.length; i++) {
     // var sadCountry = unHappy_2018[i];
     unhappyMarker.push(
     L.marker(unHappy_2018[i].location,{icon:sadIcon})
        .bindTooltip(`<h3><b>${unHappy_2018[i].country}<b/></h3>
        <hr> <h3>Happiness Level ${unHappy_2018[i].happiness}</h3>`)
     );
    };
    //happyMap.addTo(myMap);
    // DEFINING AND ASSIGNING OUR MARKERS AND LAYERS
    var happyLayer = L.layerGroup(happyMarker);
    var unhappyLayer = L.layerGroup(unhappyMarker);
    // MAPS FROM LEAFLET PROVIDER DEMO
    var happyMap=L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
    });

    var Jawg_Dark = L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    // CONTROL LAYERS
    var baseMaps = {
      "Happy Map": happyMap,
      "Unhappy Map": Jawg_Dark
    };
    var overlays = {
      "Happiness": happyLayer,
      "Unhappiness": unhappyLayer
    };
    // CREATING OUR MAP WITH THE LAYERS
    var myMap = L.map("geomap-id", {
      center: [35.917973, 14.409943],
      zoom: 3,
      layers: [happyMap, unhappyLayer
      ]
      });
      // GETTING CONTROL OVER OUR LAYERS
      L.control.layers(baseMaps, overlays, {
        collapsed: false
      }).addTo(myMap);
      
    
