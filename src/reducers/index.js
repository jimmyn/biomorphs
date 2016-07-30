import {combineReducers} from 'redux';
import * as types from 'actions/types';

const parentGenome = (state = [], action) => {
  switch (action.type) {
    case types.SELECT_PARENT_GENOME:
      return action.genome;
  }
  return state;
};

const generation = (state = 0, action) => {
  switch (action.type) {
    case types.REPRODUCE:
      return action.generation;
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

export default combineReducers({
  parentGenome,
  generation,
  descendantsGenomes
});
