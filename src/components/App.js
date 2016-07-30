import React, {PropTypes} from 'react';
import classNames from './App.scss';

const App = ({children}) => (
  <div className={classNames.container}>
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
