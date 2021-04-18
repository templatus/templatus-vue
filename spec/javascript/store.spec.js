import store from '@/store'

describe('Store', () => {
  test('increment mutation', () => {
    store.commit('increment')

    expect(store.state.count).toBe(1)
  })
})
