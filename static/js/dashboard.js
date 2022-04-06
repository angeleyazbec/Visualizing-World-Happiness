// Dashboard JavaScript

var happiness_data = "/happiness_data/j.json";
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
for(var i = 0; i < data.length; i++){
    countryName.push(data[i].Country);
    countrymetrics.push(data[i].Metrics);
    let m = data[i].Metrics
    // console.log(m)
    for (var j =0; j <m.length; j++){
        if (data[i].Metrics[j].Year == 2018 || data[i].Metrics[j].Year == 2019 )
                pre2020happiness.push(data[i].Metrics[j].Happiness)
        else if (data[i].Metrics[j].Year > 2019)
        post2020happiness.push(data[i].Metrics[j].Happiness)
        // console.log(data[i].Metrics)
        // countryhappiness.push(data[i].Metrics[j].Happiness);
    }
    
}
// console.log(countryName)
// console.log(countrymetrics)
console.log(countryhappiness)
console.log(mean(pre2020happiness))
console.log(mean(post2020happiness))
console.log(variance(pre2020happiness))
console.log(variance(post2020happiness))
console.log(standardDeviation(pre2020happiness))
console.log(standardDeviation(post2020happiness))

});

// Mean
function mean(score) {
    let total = 0;
    for (let i = 0; i < score.length; i++) {
      total += score[i];
    }
    let meanValue = total / score.length;
    return meanValue;
  }

// Variance
function variance(score) {
    let meanValue = mean(score);
    let total = 0;
    for (let i = 0; i < score.length; i++) {
      total += (score[i] - meanValue) ** 2;
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