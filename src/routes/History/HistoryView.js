import React, {PropTypes} from 'react';
import Biomorph from 'components/Biomorph';
import classNames from './HistoryView.scss';

const HistoryView = ({
  history
}) => (
  <section>
    <h2>Evolution history</h2>
    <section className={classNames.descendants}>
      {history.map((genome, i) => (
        <Biomorph
          genome={genome}
          number={i + 1}
          key={i} />
      ))}
    </section>
  </section>
);

HistoryView.propTypes = {
  history: PropTypes.array.isRequired
};

export default HistoryView;
