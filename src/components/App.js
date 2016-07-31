import React, {PropTypes} from 'react';
import Header from './Header';
import classNames from './App.scss';

const App = ({children}) => (
  <main className={classNames.container}>
    <Header />
    <div className={classNames.content}>
      {children}
    </div>
  </main>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
