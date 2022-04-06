// Store our API endpoint as queryUrl.

var data_file = "happiness_data/j.json";


// Perform a GET request to the query URL.
d3.json(data_file ).then(function (data){
//   console.log(data);

  countryArray = [];

//   console.log("test traversing")
//   console.log(`Latitude: ${data[0].latitude}`)
//   console.log(`5th Country's Freedom: ${data[4].Metrics[3].Freedom}`)
//   console.log(`2nd Country's Name: ${data[1].Country}`)

  for (var i = 0; i < data.length; i++) {
    var happinessSum = 0;
    
    happinessArray = [];

    let country = data[i].Country;
    let lat = data[i].latitude;
    let long = data[i].longitude;
    for (var j = 0; j < data[i].Metrics.length; j++){
    // console.log(`Data length: ${data.length}`);
        
    let happiness = data[i].Metrics[j].Happiness;
    happinessArray.push(happiness); 
    happinessSum += happiness
    }
    // console.log(`Sum of ${data[i].Country} Freedom is ${happinessSum}`);
    // console.log(happinessArray);
    // console.log(Math.max(happinessArray));
    var max_of_array = Math.max.apply(Math, happinessArray);
    // console.log(`Max of ${data[i].Country} is ${max_of_array}`)

    var min_of_array = Math.min.apply(Math, happinessArray);
    // console.log(`Min of ${data[i].Country} is ${min_of_array}`)

    var num_obs = happinessArray.length
    // console.log(num_obs);

    const median = arr => {
        const mid = Math.floor(arr.length / 2),
          nums = [...arr].sort((a, b) => a - b);
        return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
      };
    let med_of_array = median(happinessArray);

    var average = happinessSum/num_obs;

    let roundOff = (num, places) => {
        const x = Math.pow(10,places);
        return Math.round(num * x) / x;
        }

    // console.log("min rounded to two spots")    
    var rounded_min = roundOff(min_of_array,2);
    // console.log("avg rounded to two spots")    
    var rounded_avg = roundOff(average,2);
    // console.log("med rounded to two spots")    
    var rounded_med = roundOff(med_of_array,2);
    // console.log("max rounded to two spots")    
    var rounded_max = roundOff(max_of_array,2);
      
    // console.log(`Happiness Average: ${average}`)
    let obs= [country, lat, long, rounded_min, rounded_avg, rounded_med, rounded_max]
    countryArray.push(obs)

    
}

console.log(countryArray);

console.log(countryArray[4][0]);


});


