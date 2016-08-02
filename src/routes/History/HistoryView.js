import React, {PropTypes} from 'react';
import Biomorph from 'components/Biomorph';
import classNames from './HistoryView.scss';

const HistoryView = ({history, selectGenome}) => (
  <section>
    <section className={classNames.description}>
      <p>Click on a biomorph to start evolution from it</p>
    </section>
    <h2>Evolution history</h2>
    <section className={classNames.descendants}>
      {history.map((genome, i) => (
        <Biomorph
          genome={genome}
          onClick={selectGenome}
          number={i + 1}
          key={i} />
      ))}
    </section>
  </section>
);

HistoryView.propTypes = {
  history: PropTypes.array.isRequired,
  selectGenome: PropTypes.func.isRequired
};

export default HistoryView;
