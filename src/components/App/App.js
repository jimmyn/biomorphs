import React, {PropTypes} from 'react';
import Header from '../Header';
import classNames from './App.scss';

const App = ({children}) => (
  <main className={classNames.container}>
    <Header />
    <div className={classNames.content}>
      {children}
    </div>
    <footer className={classNames.footer}>
      Author: <a href="https://github.com/jimmyn" target="_blank">Dmitriy Nevzorov</a>
      {' '}
      <a href="https://github.com/jimmyn/biomorphs" target="_blank">View source code</a>
    </footer>
  </main>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
