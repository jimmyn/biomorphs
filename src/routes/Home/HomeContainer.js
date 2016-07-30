import {connect} from 'react-redux';
import * as actions from 'actions';
import HomeView from './HomeView';

const mapStateToProps = (state) => ({
  parentGenome: state.parentGenome,
  generation: state.history.length,
  descendantsGenomes: state.descendantsGenomes
});

export default connect(mapStateToProps, actions)(HomeView);
