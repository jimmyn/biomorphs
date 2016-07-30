import React, {Component, PropTypes} from 'react';
import Branch from 'lib/Branch';
import * as utils from 'lib/utils';

const canvasStyle = {
  border: '1px solid',
  display: 'block'
};

class Biomorph extends Component {

  constructor(props) {
    super(props);
    this.init();
  }

  static defaultProps = {
    onClick() {}
  };

  init() {
    const g = this.props.genome;
    this.level = 1;
    this.length = g[0] * 20;
    this.thikness = g[1];
    this.firstAngle = g[2] * 15;
    this.evenAngle = g[3] * 15;
    this.oddAngle = g[4] * 15;
    this.firstReduction = g[5] * 0.15;
    this.evenReduction = g[6] * 0.15;
    this.oddReduction = g[7] * 0.15;
    this.levels = g[8];
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    this.init();
    this.drow();
  }

  componentDidUpdate() {
    this.init();
    this.drow();
  }

  get divergence() {
    if (this.level === 1) {
      return this.firstAngle;
    } else if (utils.isEven(this.level)) {
      return this.evenAngle;
    }
    return this.oddAngle;
  }

  get reduction() {
    if (this.level === 1) {
      return this.firstReduction;
    } else if (utils.isEven(this.level)) {
      return this.evenReduction;
    }
    return this.oddReduction;
  }

  drow() {
    const {width, height} = this.canvas;
    const parentBranches = [];
    this.ctx.fillStyle = '#ececec';
    this.ctx.fillRect(0, 0, width, height);
    const trunk = new Branch({
      x: width / 2,
      y: this.length,
      angle: 90,
      length: this.length,
      thickness: this.thikness
    });
    this.drawBranch(trunk);
    parentBranches.push(trunk);
    this.drawBranches(parentBranches);
  }

  drawBranches(parentBranches = []) {
    const branches = [];
    parentBranches.forEach(branch => {
      const newBranchProps = {
        x: branch.endPoint.x,
        y: branch.endPoint.y,
        length: branch.length * this.reduction,
        thickness: branch.thickness * this.reduction
      };
      const newBranch1 = new Branch({
        ...newBranchProps, angle: branch.angle + this.divergence
      });
      const newBranch2 = new Branch({
        ...newBranchProps, angle: branch.angle - this.divergence
      });
      this.drawBranch(newBranch1);
      this.drawBranch(newBranch2);
      branches.push(newBranch1);
      branches.push(newBranch2);
    });
    if (this.level < this.levels) {
      this.level ++;
      this.drawBranches(branches);
    }
  }

  drawBranch(branch) {
    this.ctx.beginPath();
    this.ctx.lineWidth = branch.thickness;
    this.ctx.moveTo(branch.startPoint.x, this.canvas.height - branch.startPoint.y);
    this.ctx.lineTo(branch.endPoint.x, this.canvas.height - branch.endPoint.y);
    this.ctx.stroke();
  }

  render() {
    return (
      <canvas
        onClick={this.props.onClick}
        style={canvasStyle}
        width="300"
        height="300"
        ref={node => {
          this.canvas = node;
        }} />
    );
  }
}

export default Biomorph;