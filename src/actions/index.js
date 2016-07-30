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

let generation = 1;
export const reproduce = (genome, isNewGeneration = true) => {
  if (isNewGeneration) generation++;
  const genomes = genome.map((gene, i) => [
    ...genome.slice(0, i),
    mutation(genome[i]),
    ...genome.slice(i + 1)
  ]);
  return {
    type: types.REPRODUCE,
    generation,
    genomes: genomes.sort(() => 0.5 - Math.random())
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
