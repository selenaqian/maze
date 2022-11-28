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
  getPermission();
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

function getPermission() {
  DeviceMotionEvent.requestPermission().then((response) => {
    if (response == 'granted') {
      // Add a listener to get smartphone acceleration
      // in the XYZ axes (units in m/s^2)
      window.addEventListener('devicemotion', (event) => {
        let newY = accelerometerSensor.handleDeviceMotion(event);
        app.move(150, newY);
      });
      // Add a listener to get smartphone orientation
      // in the alpha-beta-gamma axes (units in degrees)
      window.addEventListener(
        'deviceorientation',
        (event) => accelerometerSensor.handleDeviceOrientation(event)
      );
    }
  });
}
