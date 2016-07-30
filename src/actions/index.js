import * as types from './types';
import * as utils from 'lib/utils';

const mutation = (gene) => {
  const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  switch (gene) {
    case 1:
      return 2;
    case 10:
      return 9;
  }
  return gene + plusOrMinus;
};

export const reproduce = (genome, isFirstGeneration = false) => {
  return dispatch => {
    const genomes = genome.map((gene, i) => [
      ...genome.slice(0, i),
      mutation(genome[i]),
      ...genome.slice(i + 1)
    ]);
    dispatch({
      type: types.REPRODUCE,
      genomes: genomes.sort(() => 0.5 - Math.random())
    });
    if (isFirstGeneration) {
      dispatch({type: types.CLEAR_HISTORY});
    }
    dispatch({
      type: types.UPDATE_HISTORY,
      genome
    });
  };
};

export const selectParentGenome = (genome, isFirstGeneration) => {
  return dispatch => {
    dispatch({
      type: types.SELECT_PARENT_GENOME,
      genome
    });
    dispatch(reproduce(genome, isFirstGeneration));
  };
};

export const getRandomGenome = () => {
  return dispatch => {
    const genome = Array.from(new Array(10), n => utils.getRandomInt(1, 10));
    dispatch(selectParentGenome(genome, true));
  };
};
