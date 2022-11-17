class AccelerometerSensor {
  getAccel(){
    DeviceMotionEvent.requestPermission().then(response => {
      if (response == 'granted') {
        // Add a listener to get smartphone acceleration 
        // in the XYZ axes (units in m/s^2)
        window.addEventListener('devicemotion', (event) => {
          console.log(event);
        });
        // Add a listener to get smartphone orientation 
        // in the alpha-beta-gamma axes (units in degrees)
        window.addEventListener('deviceorientation',(event) => {
          console.log(event);
        });
      }
    });
  }
}

module.exports = new AccelerometerSensor();