import * as utils from 'lib/utils';

describe('(lib) utils', () => {
  it('getRandomInt should return random int in range', () => {
    const int = utils.getRandomInt(1, 9);
    expect(int).to.be.within(1, 9);
  });

  it('isEven should return true for even number', () => {
    expect(utils.isEven(4)).to.be.true;
    expect(utils.isEven(3)).to.be.false;
  });

  it('isOdd should return true for odd number', () => {
    expect(utils.isOdd(3)).to.be.true;
    expect(utils.isOdd(4)).to.be.false;
  });

  it('encode should encode json', () => {
    expect(utils.encode({foo: 'bar'})).to.equal('eyJmb28iOiJiYXIifQ');
  });

  it('decode should decode string to json', () => {
    expect(utils.decode('eyJmb28iOiJiYXIifQ')).to.eql({foo: 'bar'});
  });

  it('round should round float number with precision', () => {
    expect(utils.round(1.78587658765, 3)).to.equal(1.786);
  });
});