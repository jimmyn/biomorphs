import {connect} from 'react-redux';
import {decode} from 'lib/utils';
import * as actions from 'actions';
import ShareView from './ShareView';

const mapStateToProps = (state, ownProps) => (
  decode(ownProps.params.props)
);

export default connect(mapStateToProps, actions)(ShareView);
