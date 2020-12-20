'use strict';
const measureKelvin = () => {
  const measurement = {
    type: 'temp',
    unit: 'kelvin',
    value: parseInt(prompt(`Enter Temprature:`)),
  };
  console.table(measurement);
  const convertKelvin = measurement.value + 273;
  return convertKelvin;
};
console.log(measureKelvin());
