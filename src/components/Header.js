import React from 'react';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';
import classNames from './Header.scss';

const Header = () => (
  <nav className={classNames.nav}>
    <IndexLink
      className={classNames.link}
      activeClassName={classNames.activeLink}
      to="/">
      Home
    </IndexLink>
    {' '}
    <Link
      className={classNames.link}
      activeClassName={classNames.activeLink}
      to="/history">
      History
    </Link>
  </nav>
);

export default Header;