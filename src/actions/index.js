import * as types from './types';
import * as utils from 'lib/utils';

let conunter = 0;
export const reproduce = (genome, isNewGeneration = true) => {
  const generation = isNewGeneration ? conunter++ : 0;
  const genomes = genome.map((gene, i) => [
    ...genome.slice(0, i),
    genome[i] + 1,
    ...genome.slice(i + 1)
  ]);
  return {
    type: types.REPRODUCE,
    generation,
    genomes
  };
};

export const selectParentGenome = (genome, isNewGeneration) => {
  return dispatch => {
    dispatch({
      type: types.SELECT_PARENT_GENOME,
      genome
    });
    dispatch(reproduce(genome, isNewGeneration));
  };
};

export const getRandomGenome = () => {
  return dispatch => {
    const genome = Array.from(new Array(9), n => utils.getRandomInt(1, 10));
    dispatch(selectParentGenome(genome, false));
  };
};