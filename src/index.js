import AccelerometerSensor from './accelerometerSensor';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello world';
  return element;
}

const startButton = document.createElement('button');
startButton.innerText = 'Start';
startButton.addEventListener('click', function () {
  AccelerometerSensor.getAcceleration();
});

const stopButton = document.createElement('button');
stopButton.innerText = 'Stop';
stopButton.addEventListener('click', function () {
  AccelerometerSensor.stopSensing();
});

document.body.appendChild(component());
document.body.appendChild(startButton);
document.body.appendChild(stopButton);
