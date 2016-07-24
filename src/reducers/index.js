import {combineReducers} from 'redux';
import * as types from 'actions/types';

const genome = (state = [], action) => {
  switch (action.type) {
    case types.GET_RANDOM_GENOME:
      return action.genome;
  }
  return state;
};

export default combineReducers({
  genome
});
