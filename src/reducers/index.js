import {combineReducers} from 'redux';
import * as types from 'actions/types';
import {routerReducer as routing} from 'react-router-redux';

const parentGenome = (state = [], action) => {
  switch (action.type) {
    case types.SELECT_PARENT_GENOME:
      return action.genome;
  }
  return state;
};

const descendantsGenomes = (state = [], action) => {
  switch (action.type) {
    case types.REPRODUCE:
      return action.genomes;
  }
  return state;
};

const history = (state = [], action) => {
  switch (action.type) {
    case types.UPDATE_HISTORY:
      return [...state, action.genome];
    case types.CLEAR_HISTORY:
      return [];
  }
  return state;
};

export default combineReducers({
  routing,
  parentGenome,
  history,
  descendantsGenomes
});
