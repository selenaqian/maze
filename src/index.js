import AccelerometerSensor from "./accelerometerSensor";

function component() {
  const element = document.createElement('div');

  element.innerHTML = "Hello world";

  return element;
}

const accelButton = document.createElement('button');
accelButton.innerText = "Start";
accelButton.addEventListener("click", function() { AccelerometerSensor.getAccel() });

document.body.appendChild(component());
document.body.appendChild(accelButton);