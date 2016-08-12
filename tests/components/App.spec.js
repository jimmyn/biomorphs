import React from 'react';
import App from 'components/App';
import Header from 'components/Header';
import {shallow} from 'enzyme';

const Child = () => (
  <div>ChildComponent</div>
);

const wrapper = shallow(
  <App>
    <Child />
  </App>
);

describe('(components) App', () => {
  it('should render child components', () => {
    expect(wrapper.find(Child)).to.have.length(1);
  });

  it('should render Header component', () => {
    expect(wrapper.find(Header)).to.have.length(1);
  });

  it('should contain footer', () => {
    expect(wrapper.find('footer')).to.have.length(1);
  });
});
