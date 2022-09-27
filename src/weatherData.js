// data Object
// eslint-disable-next-line import/no-mutable-exports, prefer-const
const weatherData = (() => {
  let city = '';
  let temp = '';
  let minTemp = '';
  let maxTemp = '';
  let humidity = '';
  let pressure = '';
  let main = '';

  const setData = ((cityIn, tempIn, minTempIn, maxTempIn, humidityIn, pressureIn, mainIn) => {
    city = cityIn;
    temp = Math.round(tempIn);
    minTemp = Math.round(minTempIn);
    maxTemp = Math.round(maxTempIn);
    humidity = humidityIn;
    pressure = pressureIn;
    main = mainIn;
  });

  const getCity = (() => city);
  const getTemp = (() => temp);
  const getMinTemp = (() => minTemp);
  const getMaxTemp = (() => maxTemp);
  const getHumidity = (() => humidity);
  const getPressure = (() => pressure);
  const getMain = (() => main);

  return {
    setData,
    getCity,
    getTemp,
    getMinTemp,
    getMaxTemp,
    getHumidity,
    getPressure,
    getMain,
  };
})();

export default weatherData;
