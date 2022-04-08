// Dashboard JavaScript
var happiness_data = "/happiness_data/j.json";

//write statistic in to a interactive table
function mean(score) {
    let total = 0;
    for (let i = 0; i < score.length; i++) {
      total += score[i];
    }
    let meanValue = total / score.length;
  
    return meanValue;
  }

function newmean(array){
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i].happines_score;
    }
    let meanValue = total / array.length;
  
    return meanValue;
}

function variance(score) {
    let meanValue = newmean(score);
    let total = 0;
  
    for (let i = 0; i < score.length; i++) {
      total += (score[i].happines_score - meanValue) ** 2;
    }
    let varianceValue = total / score.length; 
    return varianceValue;
  }


// Standard deviation is the square root of the variance
function standardDeviation(score) {
    let varianceValue = variance(score);
    let standardDeviationValue = Math.sqrt(varianceValue);
    return standardDeviationValue;
  }

  //
d3.json(happiness_data).then(function (data) {


//   console.log(data);
  let country = data[0].Country;
//   console.log(country)
  let metrics = data[0].Metrics
//   console.log(metrics)
  let countries = data.map (
      function(d){
          return d.Country
      }
  )
//   console.log(countries)
let countryName = []
let countrymetrics = []
let countryhappiness = []
let pre2020happiness = []
let post2020happiness = []
let pre2020Top10HappyCountries = []
let post2020Top10HappyCountries = []

for(var i = 0; i < data.length; i++){
    countryName.push(data[i].Country);
    countrymetrics.push(data[i].Metrics);
    let m = data[i].Metrics
    // console.log(m)
    for (var j =0; j <m.length; j++){
        if (data[i].Metrics[j].Year == 2018 || data[i].Metrics[j].Year == 2019 ){
                pre2020happiness.push(data[i].Metrics[j].Happiness)
                pre2020Top10HappyCountries.push({
                    happines_score: data[i].Metrics[j].Happiness,
                    countryname: data[i].Country,
                    Year: data[i].Metrics[j].Year
                })
                }
        else if (data[i].Metrics[j].Year > 2019)
                // post2020happiness.push(data[i])
                post2020happiness.push(data[i].Metrics[j].Happiness)
                post2020Top10HappyCountries.push({
            happines_score: data[i].Metrics[j].Happiness,
            countryname: data[i].Country,
            Year: data[i].Metrics[j].Year
        })
        // console.log(data[i].Metrics)
        // countryhappiness.push(data[i].Metrics[j].Happiness);
    }
    // data.forEach(item => Number(item.Metrics.Happiness))



}

console.log("newvariance",variance(post2020Top10HappyCountries))
console.log("pre2020happiness",pre2020happiness)
console.log("newvstd",standardDeviation(post2020Top10HappyCountries))

console.log("newmean >", newmean(post2020Top10HappyCountries))
const pre2020happinessSort = pre2020happiness.sort((a,b)=> b - a).slice(0,14)
console.log(pre2020happinessSort);

const post2020happinessSort = post2020happiness.sort((a,b)=> b - a).slice(0,14)
console.log(post2020happinessSort);

const pre2020Top10HappyCountriesSort = pre2020Top10HappyCountries.sort((a,b)=> b.happines_score - a.happines_score).slice(0,10)
console.log("pre2020 sorted",pre2020Top10HappyCountriesSort);

const post2020Top10HappyCountriesSort = post2020Top10HappyCountries.sort((a,b)=> b.happines_score - a.happines_score).slice(0,10)
console.log(post2020Top10HappyCountries);


const pre2020Top10NotHappyCountriesSort = pre2020Top10HappyCountries.sort((a,b)=> a.happines_score - b.happines_score).slice(0,10)
console.log("pre2020 sorted",pre2020Top10NotHappyCountriesSort);

const post2020Top10NotHappyCountriesSort = post2020Top10HappyCountries.sort((a,b)=> a.happines_score - b.happines_score).slice(0,10)
console.log(post2020Top10NotHappyCountriesSort);

console.log("dafdf4")
console.log(post2020happinessSort)
console.log("dafdf5")

console.log(countryName)
console.log(countrymetrics)
console.log(countryhappiness)
console.log("dafdf")
console.log(mean(pre2020happiness))
console.log("dafdf2")
console.log(mean(post2020happiness))
console.log(variance(pre2020happiness))
console.log("dafdf3")
console.log(variance(post2020happiness))
console.log(standardDeviation(pre2020happiness))
console.log(standardDeviation(post2020happiness))
// console.log(presorted)
// console.log(postsorted)
// console.log(mean(countryhappiness))

const premean = newmean(pre2020Top10HappyCountries);
const postmean = newmean(post2020Top10HappyCountries);
const prevar = variance(pre2020Top10HappyCountries);
const postvar = variance(post2020Top10HappyCountries);
const prestd = standardDeviation(pre2020Top10HappyCountries);
const poststd = standardDeviation(post2020Top10HappyCountries);

// Use D3 to select the table row
var array = ["Mean of Happy Score",premean,postmean];
var array2 = ["Variance of Happy Score",prevar,postvar];
var array3 = ["Standardard Deviation of Happy Score",prestd,poststd]; 
// Use D3 to select the table row
let row = d3.select("table").attr("class", "table table-striped")
    .select("tbody")
    .append("tr");
row.append("td").text(array[0]);
row.append("td").text(array[1]);
row.append("td").text(array[2]);
let row2 = d3.select("table").attr("class", "table table-striped")
    .select("tbody")
    .append("tr");
row2.append("td").text(array2[0]);
row2.append("td").text(array2[1]);
row2.append("td").text(array2[2]);
let row3 = d3.select("table").attr("class", "table table-striped")
    .select("tbody")
    .append("tr");
row3.append("td").text(array3[0]);
row3.append("td").text(array3[1]);
    row3.append("td").text(array3[2]);
// bar chart------------------------------------------------------
let top10 = pre2020Top10HappyCountriesSort; 
console.log("pre2020Top10HappyCountriesSort",pre2020Top10HappyCountriesSort);
// top10Happyscore = pre2020happinessSort.map(function (row){
//     return row.happines_score
//     //console.log(top10Happyscore)
// });
let trace1 = {
    x: top10.map(row => `${row.countryname} ${row.Year}`),
    y: top10.map(row => row.happines_score),
    type: "bar"
  };
// Data trace array
let traceData = [trace1];
console.log("traceData",traceData)

// Apply the group barmode to the layout
let layout = {
    title: "pre2020Top10RecordHappyCountries"
  };

  // Render the plot to the div tag with id "plot"
Plotly.newPlot("plot1", traceData, layout);


let top10_2 = post2020Top10HappyCountriesSort; 
console.log(post2020Top10HappyCountriesSort);
// top10Happyscore = pre2020happinessSort.map(function (row){
//     return row.happines_score
//     //console.log(top10Happyscore)
// });
let trace2 = {
    x: top10_2.map(row => `${row.countryname} ${row.Year}`),
    y: top10_2.map(row => row.happines_score),
    type: "bar"
  };
// Data trace array
let traceData2 = [trace2];
console.log("----------------")
console.log(trace2)
console.log("----------------")



// Apply the group barmode to the layout
let layout2 = {
    title: "post2020Top10RecordHappyCountries"
  };

  // Render the plot to the div tag with id "plot"
Plotly.newPlot("plot2", traceData2, layout2);



let top10_3 = pre2020Top10NotHappyCountriesSort; 
console.log(pre2020Top10NotHappyCountriesSort);
// top10Happyscore = pre2020happinessSort.map(function (row){
//     return row.happines_score
//     //console.log(top10Happyscore)
// });
let trace3 = {
    x: top10_3.map(row => `${row.countryname} ${row.Year}`),
    y: top10_3.map(row => row.happines_score),
    type: "bar"
  };
// Data trace array
let traceData3 = [trace3];
console.log("----------------")
console.log(trace3)
console.log("----------------")

// Apply the group barmode to the layout
let layout3 = {
    title: "pre2020Top10RecordNotHappyCountriesSort"
  };

  // Render the plot to the div tag with id "plot"
Plotly.newPlot("plot3", traceData3, layout3);


let top10_4 = post2020Top10NotHappyCountriesSort; 
console.log(post2020Top10NotHappyCountriesSort);
// top10Happyscore = pre2020happinessSort.map(function (row){
//     return row.happines_score
//     //console.log(top10Happyscore)
// });
let trace4 = {
    x: top10_3.map(row => `${row.countryname} ${row.Year}`),
    y: top10_3.map(row => row.happines_score),
    type: "bar"
  };
// Data trace array
let traceData4 = [trace4];
console.log("----------------")
console.log(trace3)
console.log("----------------")

// Apply the group barmode to the layout
let layout4 = {
    title: "post2020Top10NotHappyRecordCountriesSort"
  };

  // Render the plot to the div tag with id "plot"
Plotly.newPlot("plot4", traceData4, layout4);

});

// import * as d3 from 'd3';

// export function get_data() {
//     d3.json(happiness_data).then(function(data) {
//         data.forEach(function(item) {
//             document.write(item.Country + '<br>');
//           });
//     });
// }


// var obj = JSON.parse(json);
// alert(obj.name); // Outputs: Peter
// alert(obj.age); // Outputs: 22
// alert(obj.country); // Outputs: United States



//
// The new student and grade to add to the table

// const premean = mean(pre2020happiness)
// const postmean = mean(post2020happiness)
// prevar =variance(pre2020happiness)
// postvar = variance(post2020happiness)
// prestd = standardDeviation(pre2020happiness)
// prestd = standardDeviation(post2020happiness)



// -------------------------------plot section-------------------------------

// // Use D3 to select the table row
// var array = [premean,postmean];
    

// // Use D3 to select the table row
// let row = d3.select("table").attr("class", "table table-striped")
//     .select("tbody")
//     .append("tr");
// row.append("td").text(array[0])
// row.append("td").text(array[1]);
// // // Function that populates the metadata
// function demoInfo(sample) {
//     d3.json("samples.json").then((data) => {
//         let metaData = data.metadata;

//         let result = metaData.filter(sampleResult => sampleResult.id == sample);

//         let resultData = result[0];

//         d3.select("#sample-metadata").html("");

//         Object.entries(resultData).forEach(([key, value]) => {
//             d3.select("#sample-metadata")
//                 .append("h5").text(`${key}: ${value}`);

//         });
//     });
// }





// // Store JSON data in a JS variable

// // Converting JSON-encoded string to JS object
// var obj = JSON.parse(j);

// // Accessing individual value from JS object
// alert(obj.name); // Outputs: Peter
// alert(obj.age); // Outputs: 22
// alert(obj.country); // Outputs: United States



// // check the data in console
// //console.log(data)
// // loop to go through all countries, could be by year; pull out country as a list;
// function list_country(data):
//    d3.json("j.json").then((data) => {
//     for i in data.country:
//         print(i)

    
        
// // Array of movie ratings
// let Score = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];


// //write statistic in to a interactive table
// // Mean score of all countries
// function mean(score) {
//   let total = 0;
//   for (let i = 0; i < score.length; i++) {
//     total += score[i];
//   }
//   let meanValue = total / score.length;

//   return meanValue;
// }
// //variance of the happy score
// // Variance can be found by subtracting the mean from each number in the data set,
// // squaring the result, and
// // then averaging the square differences.
// function variance(score) {
//     let meanValue = mean(score);
//     let total = 0;
  
//     for (let i = 0; i < score.length; i++) {
//       total += (score[i] - meanValue) ** 2;
//     }
//     let varianceValue = total / score.length; 
//     return varianceValue;
//   }

// // Standard deviation is the square root of the variance
// function standardDeviation(score) {
//     let varianceValue = variance(score);
//     let standardDeviationValue = Math.sqrt(varianceValue);
//     return standardDeviationValue;
//   }

// // Print to the cosole the Movie Statistical Analysis to check
// console.log("score Statistical Analysis");
// console.log("--------------------------");
// console.log(`The mean is : ${mean(score)}`);
// console.log(`The variance is : ${variance(score)}`);
// console.log(`The standard deviation is : ${standardDeviation(score)}`);
// console.log("");

// //-------------------------------------------

//top 10 


// // Sort the data by Score search results descending
// let scoreSorted = pre2020happiness.sort(
//     function compareFunction(firstscore, secondscore)
//     {
//         return secondCountry.scoreSearchResults - firstGod.scoreSearchResults; // puts the values in descending order
//     }
// );
// // written as an arrow function
// scoreSorted = pre2020happiness.sort(
//     (firstscore, secondscore) => secondscore.scoreSearchResults - firstscore.scoreSearchResults
// );


//----------------------------------------------------------------------------------------------------------
// Slice the first 10 objects for plotting
// let top10 = pre2020happinessSort; 
// console.log(pre2020happinessSort)
// // top10Happyscore = pre2020happinessSort.map(function (row){
// //     return row.happines_score
// //     //console.log(top10Happyscore)
// // });
// let trace1 = {
//     x: top10.map(row => row.countryname),
//     y: top10.map(row => row.happines_score),
//     type: "bar"
//   };
// // Data trace array
// let traceData = [trace1];

// // Apply the group barmode to the layout
// let layout = {
//     title: "pre2020Top10HappyCountries"
//   };

//   // Render the plot to the div tag with id "plot"
// Plotly.newPlot("plot", traceData, layout);
//----------------------------------------------------------------------



// let trace = {
//     x: top10.countryname,
//     y: top10.happines_score,
//     text: countryNames,
//     type: "bar",
//     orientation: "h"
// };
// // Data array
// let plotData = [trace];
// // Apply a title to the layout
// let layout = {
//     title: "Top 10 happy countries Search Results Horizontal Bar Chart",
//     xaxis: {
//         title: "score of Country Search Results"
//     },
//     yaxis: {
//         title: "Top Happy Countries"
//     }
// }
// // Render the plot to the div tag with id "plot"
// Plotly.newPlot("plot", plotData, layout);

// Reverse the array to accommodate Plotly's defaults
// let top10inversed = top10.reverse();
// console.log(top10inversed);
// // make arrays for the data items that we need!
// let countryNames = top10inversed.map(
//     function(c)
//     {
//         return c.countryname;
//     }
// );
// let countryResults = top10inversed.map(
//     function(c)
//     {
//         return c.happines_score;
//     }
// );
// Trace for the Greek Data



















// //---------------------------------------------------



// // Function that populates the metadata
// function demoInfo(sample) {
//     d3.json("samples.json").then((data) => {
//         let metaData = data.metadata;

//         let result = metaData.filter(sampleResult => sampleResult.id == sample);

//         let resultData = result[0];

//         d3.select("#sample-metadata").html("");

//         Object.entries(resultData).forEach(([key, value]) => {
//             d3.select("#sample-metadata")
//                 .append("h5").text(`${key}: ${value}`);

//         });
//     });
// }

// // Function that build bar chart
// function buildBarChart(sample) {
//     let data = d3.json("samples.json");

//     d3.json("samples.json").then((data) => {
//         let sampleData = data.samples;

//         let result = sampleData.filter(sampleResult => sampleResult.id == sample);

//         let resultData = result[0];

//         let otu_ids = resultData.otu_ids;
//         let otu_labels = resultData.otu_labels;
//         let sample_values = resultData.sample_values;

//         // Bar chart
//         let yticks = otu_ids.slice(0, 10).map(id => `OTU ${id}`);
//         let xValues = sample_values.slice(0, 10);
//         let textLabels = otu_labels.slice(0, 10);

//         let barChart = {
//             y: yticks.reverse(),
//             x: xValues.reverse(),
//             text: textLabels.reverse(),
//             type: "bar",
//             orientation: "h"
//         }

//         let layout = {
//             title: "Top 10 Belly Button Bacteria"
//         };

//         Plotly.newPlot("bar", [barChart], layout)

//     });
// }

// // Function that build bubble chart
// function buildBubbleChart(sample) {
//     let data = d3.json("samples.json");

//     d3.json("samples.json").then((data) => {
//         let sampleData = data.samples;

//         let result = sampleData.filter(sampleResult => sampleResult.id == sample);

//         let resultData = result[0];

//         let otu_ids = resultData.otu_ids;
//         let otu_labels = resultData.otu_labels;
//         let sample_values = resultData.sample_values;

//         // Bubble chart
//         let bubbleChart = {
//             y: sample_values,
//             x: otu_ids,
//             text: otu_labels,
//             mode: "markers",
//             marker: {
//                 size: sample_values,
//                 color: otu_ids,
//                 colorscale: "Earth"
//             }
//         }

//         let layout = {
//             title: "Bacteria Cultures per Sample",
//             hovermode: "closest",
//             xaxis: { title: "OTU ID" }
//         };

//         Plotly.newPlot("bubble", [bubbleChart], layout)

//     });
// }





















// // Gauge chart
// function buildGaugeChart(sample) {
//     let data = d3.json("samples.json");

//     d3.json("samples.json").then((data) => {
//         let metaData = data.metadata;

//         let result = metaData.filter(sampleResult => sampleResult.id == sample);

//         let resultData = result[0].wfreq;

//         var data = [
//             {
//                 domain: { x: [0, 1], y: [0, 1] },
//                 value: resultData,
//                 title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week" },
//                 type: "indicator",
//                 mode: "gauge+number",
//                 delta: { reference: 400 },
//                 gauge: { axis: { range: [null, 9] } }
//             }
//         ];

//         var layout = { height: 400 };
//         Plotly.newPlot('gauge', data);
//     });
// }

// // Function that initializes the dashboard
// function initialize() {
//     var select = d3.select("#selDataset");

//     d3.json("samples.json").then((data) => {
//         let sampleNames = data.names;

//         sampleNames.forEach((sample) => {
//             select.append("option")
//                 .text(sample)
//                 .property("value", sample);
//         });
//         let firstSample = sampleNames[0];
//         demoInfo(firstSample);
//         buildBarChart(firstSample);
//         buildBubbleChart(firstSample);
//         buildGaugeChart(firstSample);
//     });


// }

// // Function that updates the dashboard
// function optionChanged(item) {
//     demoInfo(item);
//     buildBarChart(item);
//     buildBubbleChart(item);
//     buildGaugeChart(item);
// }

// initialize();
