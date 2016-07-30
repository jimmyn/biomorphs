import React from 'react';
import classNames from './App.scss';

const App = ({children}) => (
  <div className={classNames.container}>
    {children}
  </div>
);

export default App;
