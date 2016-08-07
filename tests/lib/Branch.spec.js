import Branch from 'lib/Branch';
const branch = new Branch({x: 0, y: 0, angle: 30, length: 10});

describe('(lib) Brunch', () => {
  it('should have correct start point', () => {
    expect(branch.startPoint).to.eql({x: 0, y: 0});
  });

  it('should calculate correct end point', () => {
    expect(branch.endPoint.x).to.equal(8.66);
    expect(branch.endPoint.y).to.equal(5);
  });
});