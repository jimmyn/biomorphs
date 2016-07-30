import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import Biomorph from './Biomorph';
import classNames from './App.scss';

const App = ({
  parentGenome,
  descendantsGenomes,
  getRandomGenome,
  reproduce,
  selectParentGenome,
  generation
}) => (
  <div className={classNames.container}>
    <button onClick={getRandomGenome}>Generate random genome</button>
    <h2>Parent #{generation}</h2>
    <section className={classNames.parent}>
      <Biomorph genome={parentGenome} />
    </section>
    <h2>Descendants</h2>
    <section className={classNames.descendants}>
      {descendantsGenomes.map((genome, i) => (
        <Biomorph
          genome={genome}
          onClick={selectParentGenome}
          key={i} />
      ))}
    </section>
  </div>
);

const mapStateToProps = (state) => ({
  parentGenome: state.parentGenome,
  generation: state.generation,
  descendantsGenomes: state.descendantsGenomes
});

export default connect(mapStateToProps, actions)(App);
