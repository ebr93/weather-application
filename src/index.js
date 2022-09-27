import _ from 'lodash';
import logicManipulation from './inputFunctions';
import './styles/style.css';
import apiOrder from './weatherAPI';
// import weatherData from './weatherData';

const bttn = document.querySelector('button');

bttn.addEventListener('click', () => {
  apiOrder.setWeatherObj()
    .then(() => {
      logicManipulation.clearContainer();
      logicManipulation.printInfo();
    });
});
