import weatherData from './weatherData';

// functions that call API data
const apiOrder = (() => {
  async function weatherRequest() {
    const city = document.querySelector('#location').value;
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d743fd1ec4abd92daec018ecb07ebfc3&units=imperial`);
      const responseData = await response.json();
      console.log(responseData);
      return responseData;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async function setWeatherObj() {
    try {
      const weatherDS = await weatherRequest().then((response) => response);
      const description = await weatherDS.weather;
      // eslint-disable-next-line max-len
      weatherData.setData(weatherDS.name, weatherDS.main.temp, weatherDS.main.temp_min, weatherDS.main.temp_max, weatherDS.main.humidity, weatherDS.main.pressure, description[0].main);
    } catch (err) {
      const city = document.querySelector('#location');
      city.setCustomValidity('Provide a legitimate city');
      city.reportValidity();
      console.log('Could not set Weather Object');
    }
  }

  async function imageRequest() {
    const img = document.querySelector('img');
    try {
      const weatherDescription = `${weatherData.getCity()} city`;
      const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=V1toPnMBplYMe7NHMiV7xUZKdqGvD33Z&s=${weatherDescription}`, { mode: 'cors' });
      const imageData = await response.json();
      img.src = imageData.data.images.original.url;
    } catch (err) {
      console.log(err);
    }
  }
  return {
    weatherRequest,
    setWeatherObj,
    imageRequest,
  };
})();

export default apiOrder;
