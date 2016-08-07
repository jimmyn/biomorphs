import assert from 'assert';
import React, {Component} from 'react';
import {mount, render, shallow} from 'enzyme';

class Fixture extends Component {
  render() {
    return (
      <div>
        <input id="checked" defaultChecked />
        <input id="not" defaultChecked={false} />
      </div>
    );
  }
}

describe('(Framework) Karma Plugins', function() {
  it('Should expose "expect" globally.', function() {
    assert.ok(expect);
  });

  it('Should expose "should" globally.', function() {
    assert.ok(should);
  });

  it('should have chai-enzyme working', function() {
    let wrapper = shallow(<Fixture />);
    expect(wrapper.find('#checked')).to.be.checked();

    wrapper = mount(<Fixture />);
    expect(wrapper.find('#checked')).to.be.checked();

    wrapper = render(<Fixture />);
    expect(wrapper.find('#checked')).to.be.checked();
  });
});
