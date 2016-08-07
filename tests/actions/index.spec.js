import * as actions from 'actions';
import * as types from 'actions/types';
import {mockStore} from '../reduxUtils';

const store = mockStore({});
const genome = [9, 3, 7, 9, 6, 4, 6, 3, 8, 8];

describe('(actions) index', () => {
  beforeEach(() => {
    store.clearActions();
  });

  afterEach(() => {
    store.clearActions();
  });

  describe('reproduce', () => {
    it('should dispatch correct actions', () => {
      store.dispatch(actions.reproduce(genome));
      const dispatchedActions = store.getActions();
      expect(dispatchedActions[0].type).to.equal(types.REPRODUCE);
      expect(dispatchedActions[0].genomes).to.have.lengthOf(10);
      expect(dispatchedActions[0].genomes).to.include.something.that.eql([8, 3, 7, 9, 6, 4, 6, 3, 8, 8]);
      expect(dispatchedActions[1].type).to.equal(types.UPDATE_HISTORY);
      expect(dispatchedActions[1].genome).to.eql(genome);
    });

    it('should clear history if isFirstGeneration', () => {
      store.dispatch(actions.reproduce(genome, true));
      const dispatchedActions = store.getActions();
      expect(dispatchedActions[1].type).to.equal(types.CLEAR_HISTORY);
    });
  });

  describe('selectParentGenome', () => {
    it('should dispatch correct actions', () => {
      store.dispatch(actions.selectGenome(genome));
      const dispatchedActions = store.getActions();
      expect(dispatchedActions[0].type).to.equal(types.SELECT_PARENT_GENOME);
      expect(dispatchedActions[0].genome).to.eql(genome);
      expect(dispatchedActions[1].type).to.equal(types.REPRODUCE);
    });
  });

  describe('getRandomGenome', () => {
    it('should selectParentGenome with array of random integers', () => {
      store.dispatch(actions.getRandomGenome());
      const dispatchedActions = store.getActions();
      expect(dispatchedActions[0].type).to.equal(types.SELECT_PARENT_GENOME);
      expect(dispatchedActions[0].genome).to.be.instanceof(Array);
      expect(dispatchedActions[0].genome).to.have.lengthOf(10);
    });
  });

  describe('selectGenome', () => {
    it('should redirect to home page', () => {
      store.dispatch(actions.selectGenome(genome));
      const dispatchedActions = store.getActions();
      expect(dispatchedActions[0].type).to.equal(types.SELECT_PARENT_GENOME);
      expect(dispatchedActions[0].genome).to.eql(genome);
      expect(dispatchedActions.slice(-1)[0].type).to.equal('@@router/CALL_HISTORY_METHOD');
    });
  });
});
