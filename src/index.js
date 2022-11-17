import AccelerometerSensor from './accelerometerSensor';
import './style.css';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello world';
  element.classList.add('hello');
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
