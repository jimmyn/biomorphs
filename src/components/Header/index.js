import {connect} from 'react-redux';
import * as actions from 'actions';
import Header from './Header';

const mapStateToProps = (state) => ({
  genome: state.parentGenome,
  generation: state.history.length
});

export default connect(mapStateToProps, actions, null, {pure: false})(Header);

