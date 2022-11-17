class AccelerometerSensor {
  getAcceleration() {
    DeviceMotionEvent.requestPermission().then((response) => {
      if (response == 'granted') {
        // Add a listener to get smartphone acceleration
        // in the XYZ axes (units in m/s^2)
        window.addEventListener('devicemotion', this.handleDeviceMotion);
        // Add a listener to get smartphone orientation
        // in the alpha-beta-gamma axes (units in degrees)
        window.addEventListener('deviceorientation', this.handleDeviceAcceleration);
      }
    });
  }

  handleDeviceMotion(event) {
    console.log(event);
  }

  handleDeviceAcceleration(event) {
    console.log(event);
  }

  stopSensing() {
    window.removeEventListener('devicemotion', this.handleDeviceMotion, false);
    window.removeEventListener('deviceorientation', this.handleDeviceAcceleration, false);
  }
}

export default new AccelerometerSensor();
