import React, {Component, PropTypes} from 'react';
import Rainbow from 'rainbowvis.js';
import Branch from 'lib/Branch';
import * as utils from 'lib/utils';
import classNames from './Biomorph.scss';
import colors from 'lib/colors';

class Biomorph extends Component {
  constructor(props) {
    super(props);
    this.init();
  }

  static propTypes = {
    genome: PropTypes.array.isRequired,
    onClick: PropTypes.func,
    thumb: PropTypes.bool,
    number: PropTypes.number
  };

  static defaultProps = {
    thumb: false,
    onClick() {
    }
  };

  init() {
    const g = this.props.genome;
    this.level = 0;
    this.length = g[0] * 20;
    this.thikness = Math.sqrt(g[1]);
    this.firstAngle = g[2] * 15;
    this.evenAngle = g[3] * 15;
    this.oddAngle = g[4] * 15;
    this.firstReduction = g[5] * 0.15;
    this.evenReduction = g[6] * 0.15;
    this.oddReduction = g[7] * 0.15;
    this.levels = g[8];
    this.rainbow = new Rainbow();
    this.rainbow.setSpectrumByArray(colors[g[9] - 1]);
    this.rainbow.setNumberRange(0, this.levels);
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    window.ctx = this.ctx;
    this.init();
    this.draw();
  }

  componentDidUpdate() {
    this.init();
    this.draw();
  }

  get divergence() {
    if (this.level === 0) {
      return this.firstAngle;
    } else if (utils.isEven(this.level)) {
      return this.evenAngle;
    }
    return this.oddAngle;
  }

  get reduction() {
    if (this.level === 0) {
      return this.firstReduction;
    } else if (utils.isEven(this.level)) {
      return this.evenReduction;
    }
    return this.oddReduction;
  }

  draw() {
    const {width, height} = this.canvas;
    const parentBranches = [];
    this.ctx.fillStyle = '#010511';
    this.ctx.fillRect(0, 0, width, height);
    const trunk = new Branch({
      x: width / 2,
      y: (height - this.length) / 2,
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
      this.level++;
      this.drawBranches(branches);
    }
  }

  drawBranch(branch) {
    this.ctx.beginPath();
    this.ctx.lineWidth = branch.thickness;
    this.ctx.moveTo(branch.startPoint.x, this.canvas.height - branch.startPoint.y);
    this.ctx.lineTo(branch.endPoint.x, this.canvas.height - branch.endPoint.y);
    this.ctx.strokeStyle = '#' + this.rainbow.colourAt(this.level);
    this.ctx.stroke();
  }

  render() {
    const {onClick, genome, thumb, number} = this.props;
    const size = thumb ? 100 : 320;
    return (
      <figure className={classNames.figure}>
        {number && <div className={classNames.number}>
          {number}
        </div>}
        <canvas
          onClick={() => onClick(genome)}
          className={classNames.canvas}
          width={size}
          height={size}
          ref={node => {
            this.canvas = node;
          }} />
        {!thumb && <p className={classNames.genome}>
          Genome: [{genome.join(', ')}]
        </p>}
      </figure>
    );
  }
}

export default Biomorph;
