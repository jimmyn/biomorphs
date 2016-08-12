import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import * as types from 'actions/types';

export const parentGenome = (state = [], action) => {
  switch (action.type) {
    case types.SELECT_PARENT_GENOME:
      return action.genome;
  }
  return state;
};

export const descendantGenomes = (state = [], action) => {
  switch (action.type) {
    case types.REPRODUCE:
      return action.genomes;
  }
  return state;
};

export const history = (state = [], action) => {
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
  descendantGenomes
});
