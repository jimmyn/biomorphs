import React, {PropTypes} from 'react';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';
import classNames from './Header.scss';
import {encode} from 'lib/utils';

const Header = ({genome, generation}) => (
  <nav className={classNames.nav}>
    <IndexLink
      className={classNames.link}
      activeClassName={classNames.activeLink}
      to="/">
      Biomorphs
    </IndexLink>
    <Link
      className={classNames.link}
      activeClassName={classNames.activeLink}
      to="/history">
      History
    </Link>
    <Link
      className={classNames.link}
      activeClassName={classNames.activeLink}
      to={`/share/${encode({genome, generation})}`}>
      Share
    </Link>
    <Link
      className={classNames.link}
      activeClassName={classNames.activeLink}
      to="/about">
      About
    </Link>
  </nav>
);

Header.propTypes = {
  genome: PropTypes.array.isRequired,
  generation: PropTypes.number.isRequired
};

export default Header;
