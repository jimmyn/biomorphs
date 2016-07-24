import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import Biomorph from './Biomorph';

const App = ({genome, getRandomGenome}) => (
  <div className="ui container">
    <section>
      <Biomorph genome={genome} onClick={() => getRandomGenome()} />
      <p>[{genome.join(', ')}]</p>
    </section>
  </div>
);

const mapStateToProps = (state) => ({
  genome: state.genome
});

export default connect(mapStateToProps, actions)(App);
