import {round} from './utils';
class Branch {
  constructor({x, y, angle, length, thickness}) {
    this.startPoint = {x, y};
    this.length = length;
    this.angle = angle;
    this.thickness = thickness;
  }

  get endPoint() {
    const x = this.startPoint.x + this.length * Math.cos(this.angle * Math.PI / 180);
    const y = this.startPoint.y + this.length * Math.sin(this.angle * Math.PI / 180);
    return {x: round(x), y: round(y)};
  }
}

export default Branch;
