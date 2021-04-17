import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld', () => {
  test('renders name', () => {
    const wrapper = mount(HelloWorld, {
      propsData: {
        name: 'World',
      }
    })

    const title = wrapper.find('h1').element.textContent.trim()
    expect(title).toEqual('Hello World!')
  })

  test('matches snapshot', () => {
    const wrapper = mount(HelloWorld, {
      propsData: {
        name: 'World',
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
