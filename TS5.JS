function getWeather() {
    const apiKey = '8eaa52d58bb955b72cc8e5112a4fc784'; // Replace with your OpenWeatherMap API key
    const locationInput = document.getElementById('location');
    const location = locationInput.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const rainChances = data.rain ? `Rain Chances: ${data.rain['1h']} mm` : 'No Rain';

            document.getElementById('weather-description').innerText = `Weather: ${weatherDescription}`;
            document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
            document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
            document.getElementById('rain-chances').innerText = rainChances;
            document.getElementById('error-message').innerText = ''; // Clear any previous error messages

            // Show relevant image based on weather description
            const weatherImage = document.getElementById('weather-image');
            if (weatherDescription.includes('cloud')) {
                weatherImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXm4Pq6yL2yHn2GT-8VTHFAxAEea8HUv6iXA&s'; // Replace with actual image URL for clouds
            } else if (weatherDescription.includes('rain')) {
                weatherImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFyeZND7-XcfHVHqoh7-Tb4kHCjvIA4oSVYQ&s'; // Replace with actual image URL for rain
            } else if (weatherDescription.includes('clear')) {
                weatherImage.src = 'https://t3.ftcdn.net/jpg/01/31/58/14/360_F_131581
