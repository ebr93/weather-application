import _ from 'lodash';
import logicManipulation from './inputFunctions';
import './styles/style.css';
import apiOrder from './weatherAPI';
// import weatherData from './weatherData';

const bttn = document.querySelector('button');

bttn.addEventListener('click', () => {
  const inputForm = document.querySelector('#location');

  if (inputForm.value === '') {
    inputForm.setCustomValidity('Type the name of a city!');
    inputForm.reportValidity();
    return;
  }

  apiOrder.setWeatherObj()
    .then(() => {
      logicManipulation.printInfo();
    });
});
