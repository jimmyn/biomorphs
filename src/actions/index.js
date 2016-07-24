import * as types from './types';
import * as utils from 'lib/utils';

export const getRandomGenome = () => ({
  type: types.GET_RANDOM_GENOME,
  genome: Array.from(new Array(9), n => utils.getRandomInt(1, 10))
});
