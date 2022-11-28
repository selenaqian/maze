export default class AccelerometerSensor {
  py = 250;
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
      let accel = event.acceleration.y;

      // TODO: add factor depending on acceleration to smooth out motion
      // e.g. if super high acceleration smooth down

      if (Math.abs(accel - this.ay) > 0.05) {
        let dt = (currentTime - this.previousTime) / 1000;
        this.vy = this.vy + accel * dt;
        this.py = this.py - this.vy * dt;
        this.py = Math.max(5, Math.min(250, this.py))
        console.log('device motion', accel, this.ay, dt, this.vy, this.py);  
      }
      
      this.previousTime = currentTime;
      this.ay = accel;
      return (this.py);
    }
  }

  handleDeviceOrientation(event) {
    if (this.collectInfo) {
      //console.log(event);
    }
  }

  stopSensing() {
    this.collectInfo = false;
  }
}