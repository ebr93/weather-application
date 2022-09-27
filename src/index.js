import _ from 'lodash';
import logicManipulation from './inputFunctions';
import './styles/style.css';
import apiOrder from './weatherAPI';
// import weatherData from './weatherData';

const bttn = document.querySelector('button');

/*
const weatherOrder = async () => {
  let city = document.querySelector('#location').value;
  if (city === '') {
    city = 'London';
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d743fd1ec4abd92daec018ecb07ebfc3&units=imperial`);
    const weatherData = await response.json();
    console.log(weatherData.main.temp);
  } catch (err) {
    console.log(err);
  }
};
*/

bttn.addEventListener('click', () => {
  apiOrder.setWeatherObj()
    .then(() => {
      logicManipulation.clearContainer();
      logicManipulation.printInfo();
    });
});
