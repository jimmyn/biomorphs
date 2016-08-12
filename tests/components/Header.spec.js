import React from 'react';
import HeaderContainer from 'components/Header';
import Header from 'components/Header/Header';
import {mockStore} from '../reduxUtils';
import {shallow} from 'enzyme';
import IndexLink from 'react-router/lib/IndexLink';
import {encode} from 'lib/utils';

const genome = [9, 3, 7, 9, 6, 4, 6, 3, 8, 8];
const store = mockStore({
  parentGenome: genome,
  history: [genome]
});

describe('(components) Header', () => {
  it('should have correct props from store', () => {
    const wrapper = shallow(<HeaderContainer store={store} />);
    expect(wrapper.props().genome).to.eql(genome);
    expect(wrapper.props().generation).to.eql(1);
  });

  describe('Navigation links', () => {
    const wrapper = shallow(<Header generation={1} genome={genome} />);

    it('should render IndexLink component', () => {
      const indexLink = wrapper.find(IndexLink);
      expect(indexLink).to.have.length(1);
      expect(indexLink.prop('to')).to.equal('/');
      expect(indexLink.render().text()).to.equal('Biomorphs');
    });

    it('should render a Link to History route', () => {
      const link = wrapper.find({to: '/history'});
      expect(link).to.have.length(1);
      expect(link.render().text()).to.equal('History');
    });

    it('should render a Link to Share route', () => {
      const shareId = encode({genome, generation: 1});
      const link = wrapper.find({to: `/share/${shareId}`});
      expect(link).to.have.length(1);
      expect(link.render().text()).to.equal('Share');
    });

    it('should render a Link to About route', () => {
      const link = wrapper.find({to: '/about'});
      expect(link).to.have.length(1);
      expect(link.render().text()).to.equal('About');
    });
  });
});
