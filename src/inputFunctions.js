import weatherData from './weatherData';
import sunnyImg from './images/sun.svg';
import cloudyImg from './images/cloud.svg';
import rainyImg from './images/cloud-drizzle.svg';
import snowImg from './images/cloud-snow.svg';

const logicManipulation = (() => {
  const weatherSVG = (() => {
    if (weatherData.getMain() === 'Clear') {
      return sunnyImg;
    }
    if (weatherData.getMain() === 'Clouds') {
      return cloudyImg;
    }
    if (weatherData.getMain() === 'Rain') {
      return rainyImg;
    }
    if (weatherData.getMain() === 'Snow') {
      return snowImg;
    }
    return 'No viable images available';
  });

  const clearContainer = (() => {
    const rightDiv = document.querySelector('.right-side');
    while (rightDiv.firstChild) {
      rightDiv.removeChild(rightDiv.firstChild);
    }
  });

  const clearForm = (() => {
    const inputForm = document.querySelector('#location');
    inputForm.value = '';
  });

  const clearLabel = (() => {
    const labelForm = document.querySelector('label');
    labelForm.innerText = '';
  });

  const printInfo = (() => {
    if (weatherData.getCity() === '') return;

    clearForm();
    clearContainer();

    const rightDiv = document.querySelector('.right-side');
    const weatherDiv = document.createElement('div');
    weatherDiv.classList.add('weather-div');
    rightDiv.appendChild(weatherDiv);

    const ulList = document.createElement('ul');
    ulList.classList.add('weather-list');
    weatherDiv.appendChild(ulList);

    const imageLink = document.createElement('img');
    imageLink.src = weatherSVG();
    imageLink.classList.add('svg');
    ulList.appendChild(imageLink);

    const liNameTemp = document.createElement('li');
    liNameTemp.classList.add('weather-text-first');
    liNameTemp.innerText = `${weatherData.getCity()} ${weatherData.getTemp()}°F`;
    ulList.appendChild(liNameTemp);

    const ilLo = document.createElement('li');
    ilLo.classList.add('weather-text');
    ilLo.innerText = `Low ${weatherData.getMinTemp()}°F`;
    ulList.appendChild(ilLo);

    const ilHi = document.createElement('li');
    ilHi.classList.add('weather-text');
    ilHi.innerText = `High ${weatherData.getMaxTemp()}°F`;
    ulList.appendChild(ilHi);

    const ilHumid = document.createElement('li');
    ilHumid.classList.add('weather-text');
    ilHumid.innerText = `Humidity ${weatherData.getHumidity()}%`;
    ulList.appendChild(ilHumid);
  });

  return {
    clearContainer,
    clearForm,
    clearLabel,
    printInfo,
  };
})();

export default logicManipulation;
