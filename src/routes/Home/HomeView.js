import React from 'react';
import Biomorph from 'components/Biomorph';
import classNames from './HomeView.scss';

const HomeView = ({
  parentGenome,
  descendantsGenomes,
  getRandomGenome,
  reproduce,
  selectParentGenome,
  generation
}) => (
  <section>
    <button
      onClick={getRandomGenome}
      className={classNames.button}>
      Generate random genome
    </button>
    <h2>Parent (generation #{generation})</h2>
    <section className={classNames.parent}>
      <Biomorph
        genome={parentGenome}
        onClick={getRandomGenome} />
    </section>
    <h2>Descendants</h2>
    <section className={classNames.descendants}>
      {descendantsGenomes.map((genome, i) => (
        <Biomorph
          genome={genome}
          onClick={selectParentGenome}
          number={i + 1}
          key={i} />
      ))}
    </section>
  </section>
);

export default HomeView;
