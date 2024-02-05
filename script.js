const apiKey="06457e391a9245014daca96b9675351d";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=Delhi";

async function showing(){
        let raw = await fetch(`${apiUrl} &appid=${apiKey}`);
        let data = await raw.json();
        console.log(data);

}
showing()



