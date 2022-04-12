// Dashboard JavaScript
var happiness_data = "https://raw.githubusercontent.com/afreedman4564/Project-3-Visualizing-Data/main/happiness_data/j.json";

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
        else if (data[i].Metrics[j].Year > 2019){
                // post2020happiness.push(data[i])
                post2020happiness.push(data[i].Metrics[j].Happiness)
                post2020Top10HappyCountries.push({
            happines_score: data[i].Metrics[j].Happiness,
            countryname: data[i].Country,
            Year: data[i].Metrics[j].Year
        })
      }
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
    title: "Pre-COVID - Top 10 Happy Countries (2018-2019)",
    color: "rgb(142,124,195)"
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
    title: "Post-COVID - Top 10 Happy Countries (2020-2021)"
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
    title: "Pre-COVID - Top 10 Unhappy Countries (2018-2019)"
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
    x: top10_4.map(row => `${row.countryname} ${row.Year}`),
    y: top10_4.map(row => row.happines_score),
    type: "bar"
  };
// Data trace array
let traceData4 = [trace4];
console.log("----------------")
console.log(trace3)
console.log("----------------")

// Apply the group barmode to the layout
let layout4 = {
    title: "Post-COVID - Top 10 Unhappy Countries (2020-2021)"
  };

  // Render the plot to the div tag with id "plot"
Plotly.newPlot("plot4", traceData4, layout4);

});
