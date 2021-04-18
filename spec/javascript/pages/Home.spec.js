import { mount } from '@vue/test-utils'
import Home from '@/pages/Home.vue'

describe('Home', () => {
  test('renders name', () => {
    const wrapper = mount(Home, {
      propsData: {
        name: 'World',
      }
    })

    const title = wrapper.find('h1').element.textContent.trim()
    expect(title).toEqual('Hello World!')
  })

  test('matches snapshot', () => {
    const wrapper = mount(Home, {
      propsData: {
        name: 'World',
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
