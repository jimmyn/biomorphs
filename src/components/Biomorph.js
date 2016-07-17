import React, {Component, PropTypes} from 'react';
import Branch from 'lib/Branch';

const canvasStyle = {
  border: '1px solid',
  display: 'block'
};

class Biomorph extends Component {

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    this.init();
  }

  init() {
    const {width, height} = this.canvas;
    const {length, thickness} = this.props;
    const parentBranches = [];
    this.ctx.fillStyle = '#ececec';
    this.ctx.fillRect(0, 0, width, height);
    const trunk = new Branch({
      x: width / 2,
      y: length,
      angle: 90,
      length,
      thickness
    });
    this.drawBranch(trunk);
    parentBranches.push(trunk);
    this.drawBranches(parentBranches);
  }

  drawBranches(parentBranches = [], level = 0) {
    const {reduction, divergence, levels} = this.props;
    const branches = [];
    parentBranches.forEach(branch => {
      const newBranchProps = {
        x: branch.endPoint.x,
        y: branch.endPoint.y,
        length: branch.length * reduction,
        thickness: branch.thickness * reduction
      };
      const newBranch1 = new Branch({
        ...newBranchProps, angle: branch.angle + divergence
      });
      const newBranch2 = new Branch({
        ...newBranchProps, angle: branch.angle - divergence
      });
      this.drawBranch(newBranch1);
      this.drawBranch(newBranch2);
      branches.push(newBranch1);
      branches.push(newBranch2);
    });
    if (level < levels) {
      const newLevel = level + 1;
      this.drawBranches(branches, newLevel);
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
        style={canvasStyle}
        width="500"
        height="500"
        ref={node => {
          this.canvas = node;
        }} />
    );
  }
}

export default Biomorph;