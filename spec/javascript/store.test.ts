import { store } from '../../app/packs/src/store';

describe('Store', () => {
  test('increment mutation', () => {
    store.commit('increment');

    expect(store.state.count).toBe(1);
  });
});
