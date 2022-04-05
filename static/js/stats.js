// Store our API endpoint as queryUrl.
// var queryUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-01-01&endtime=2021-01-02&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";
var data_file = "/happiness_data/j.json";


// Perform a GET request to the query URL.
d3.json(data_file ).then(function (data) {
  console.log(data);
  console.log(data[0].Country);

// const countryArray = new Set(data.map(item => item.Country))
// console.log(countryArray)
});

// grab each array item and add to the option tag

// countryArray2.forEach((Country) => {
//     select.append("option").text(Country).property("value", Country);
// });

// // access the list of names for selection
// // use # in fron of selDataset since it's an id tag
// var select = d3.select("#selDataset");
// console.log("drop down section");
// console.log(select);



// //     // grab 1st observation when initialized
//     let country1 = countryArray2[0];

// //     // call on funciton to pull in metadata
//     demographicData(country1);

// //     buildBarChart(name1);

// //     buildBubbleGraph(name1);

// //     buildGauge(name1);

//  // closes d3
// }

//  function optionChanged(item)
// {
//     // console.log(item);
//     //pick up new metadata to grab
//     demographicData(item);

//     // // call function to create bar graph
//     // buildBarChart(item);

//     // // call function to create bubble graph
//     // buildBubbleGraph(item);

//     // // call function to create bubble graph
//     // buildGauge(item);

// }

// function demographicData(name)
// {
//     // console.log(name);

//     d3.json("samples.json").then((data) =>
//     {       
//     let countryData = data[0];
//     // console.log(metaData);

//     // filter on name to capture appropriate metadata element based on name
//     let result = countryData.filter(countryOutput => countryeOutput.id == name);
//     let resultName = result[0];
//     console.log(resultName);


//     // clear out prior demographics populated each time run through
//     d3.select("#sample-metadata").html("");

//     // populate the demographic information, appending to
//     Object.entries(resultName).forEach(([key, value]) => {
//         d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
//     });
// });


 initialize();