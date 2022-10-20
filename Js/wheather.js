/* Weather API Rest */
let URL = "https://goweather.herokuapp.com/weather/Argentina" ; 
fetch(URL)
.then(res => res.json())
 .then(data => {
    let temp = JSON.stringify(data.temperature) ;
 	  let wind = JSON.stringify(data.wind) ;
    document.getElementById("temperature").innerHTML = JSON.parse(temp);
    document.getElementById("wind").innerHTML = JSON.parse(wind)
 });