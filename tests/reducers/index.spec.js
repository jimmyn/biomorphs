import * as types from 'actions/types';
import * as reducers from 'reducers';

const genome = [9, 3, 7, 9, 6, 4, 6, 3, 8, 8];

describe('(reducers) index', () => {
  describe('parentGenome', () => {
    it('should return default state', () => {
      expect(reducers.parentGenome(undefined, {})).to.eql([]);
    });

    it('should handle SELECT_PARENT_GENOME action', () => {
      expect(reducers.parentGenome([], {
        type: types.SELECT_PARENT_GENOME,
        genome
      })).to.eql(genome);
    });
  });

  describe('descendantsGenome', () => {
    it('should return default state', () => {
      expect(reducers.descendantGenomes(undefined, {})).to.eql([]);
    });

    it('should handle REPRODUCE action', () => {
      expect(reducers.descendantGenomes([], {
        type: types.REPRODUCE,
        genomes: [genome]
      })).to.eql([genome]);
    });
  });

  describe('history', () => {
    it('should return default state', () => {
      expect(reducers.history(undefined, {})).to.eql([]);
    });

    it('should handle UPDATE_HISTORY action', () => {
      expect(reducers.history([genome], {
        type: types.UPDATE_HISTORY,
        genome
      })).to.eql([genome, genome]);
    });

    it('should handle CLEAR_HISTORY action', () => {
      expect(reducers.history([genome], {
        type: types.CLEAR_HISTORY
      })).to.eql([]);
    });
  });
});
