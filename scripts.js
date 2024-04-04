const form = document.getElementById('location-form');
const weatherContainer = document.getElementById('weather');
const apiKey = '28a39ef58ec28239cd57a252dc208c09';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weather = data.weather[0].description;
            const temperature = data.main.temp;

            weatherContainer.innerHTML = `
                <h2>Weather in ${city}</h2>
                <p>Description: ${weather}</p>
                <p>Temperature: ${temperature}°C</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherContainer.innerHTML = `<p>Couldn't fetch weather data. Please try again.</p>`;
        });   
});

