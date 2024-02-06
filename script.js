

let city_name;
let weatherIcon = document.querySelector(".weather-icon")
let weather = document.querySelector(".weather")
const apiKey="06457e391a9245014daca96b9675351d";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";

async function showing(){
        
        let raw = await fetch(`${apiUrl}&q=${city_name}&appid=${apiKey}`);
        let data = await raw.json();
        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=Math.round(data.wind.speed)+"Km/h";
        weather.style.display="block";
        if(data.weather[0]){
           
            weatherIcon.src=`images/${data.weather[0].main}.png`;
        }
        else{
            weatherIcon.src="images/clear.png";
        }
}



function search(){
    city_name = document.querySelector("#city_name").value ;
    showing()
}


// A promise has three states mainly :

