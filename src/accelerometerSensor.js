export default class AccelerometerSensor {
  py = 30;
  vy = 0;
  ay = 0;
  previousTime = 0;
  collectInfo = false;
  multiplier = 50;

  constructor(multiplier) {
    this.multiplier = multiplier;
  }

  getAcceleration() {
    this.collectInfo = true;
    this.previousTime = Date.now();
    if (this.dot === undefined) {
      this.dot = document.getElementsByClassName('indicatorDot')[0];
    }
  }

  handleDeviceMotion(event) {
    if (this.collectInfo) {
      let currentTime = Date.now();

      if (event.acceleration.y > 1 && event.acceleration.y - this.ay > 0) {
        let accel = event.acceleration.y - this.ay;
        let dt = (currentTime - this.previousTime) / 1000;
        this.vy = this.vy + accel * dt;
        this.py = this.py - this.vy * dt;
        this.py = Math.max(5, Math.min(95, this.py))
        console.log('device motion', event.acceleration.y, accel, dt, this.vy, this.py);
      }
      this.previousTime = currentTime;
      this.ay = event.acceleration.y;
      return (this.py);
    }
  }

  handleDeviceAcceleration(event) {
    if (this.collectInfo) {
      //console.log(event);
    }
  }

  stopSensing() {
    this.collectInfo = false;
  }
}