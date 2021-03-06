import {connect} from 'react-redux';
import * as actions from 'actions';
import GameView from './GameView';

const mapStateToProps = (state) => ({
  parentGenome: state.parentGenome,
  generation: state.history.length,
  descendantGenomes: state.descendantGenomes
});

export default connect(mapStateToProps, actions)(GameView);
