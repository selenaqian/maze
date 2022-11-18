import AccelerometerSensor from './accelerometerSensor';
import Level from './level';
import './style.css';

const accelerometerSensor = new AccelerometerSensor();

const buttonContainer = document.createElement('div');

const startButton = document.createElement('button');
startButton.innerText = 'Start';
startButton.addEventListener('click', function () {
  accelerometerSensor.getAcceleration();
});

const permissionButton = document.createElement('button');
permissionButton.innerText = 'Permission?';
permissionButton.addEventListener('click', function () {
  accelerometerSensor.getPermission();
});

const stopButton = document.createElement('button');
stopButton.innerText = 'Stop';
stopButton.addEventListener('click', function () {
  accelerometerSensor.stopSensing();
});

buttonContainer.appendChild(permissionButton);
buttonContainer.appendChild(startButton);
buttonContainer.appendChild(stopButton);

document.body.appendChild(buttonContainer);
const app = new Level();
app.start();
