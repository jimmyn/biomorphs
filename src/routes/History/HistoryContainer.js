import {connect} from 'react-redux';
import * as actions from 'actions';
import HistoryView from './HistoryView';

const mapStateToProps = (state) => ({
  history: state.history
});

export default connect(mapStateToProps, actions)(HistoryView);
