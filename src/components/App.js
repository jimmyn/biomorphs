import React, {PropTypes} from 'react';
import Biomorph from './Biomorph';

const App = () => (
  <div className="ui container">
    <section>
      <Biomorph length={100} divergence={50} reduction={0.8} thickness={5} levels={10} />
    </section>
  </div>
);

export default App;
