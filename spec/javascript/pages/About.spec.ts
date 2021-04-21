import { mount } from '@vue/test-utils'
import About from '@/pages/About.vue'

describe('About', () => {
  test('matches snapshot', () => {
    const wrapper = mount(About, {
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
