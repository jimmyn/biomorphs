class Branch {
  constructor({x, y, angle, length, thickness}) {
    this.startPoint = {x, y};
    this.length = length;
    this.angle = angle;
    this.thickness = thickness;
  }

  get endPoint() {
    const epx = this.startPoint.x + this.length * Math.cos(this.angle * Math.PI / 180);
    const epy = this.startPoint.y + this.length * Math.sin(this.angle * Math.PI / 180);
    return {x: epx, y: epy};
  }
}

export default Branch;
