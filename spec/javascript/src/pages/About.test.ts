import { mount } from '@vue/test-utils';
import AboutPage from '@/pages/AboutPage.vue';
import * as Vue from 'vue';

describe('About', () => {
  const savedVersion = Object.getOwnPropertyDescriptor(
    Vue,
    'version',
  ) as PropertyDescriptor;

  beforeAll(() => {
    // Mock `Vue.version` to have a stable snapshot
    Object.defineProperty(Vue, 'version', {
      value: '3.x.y',
    });
  });

  afterAll(() => {
    Object.defineProperty(Vue, 'version', savedVersion);
  });

  test('matches snapshot', () => {
    const wrapper = mount(AboutPage, {});

    expect(wrapper.html()).toMatchSnapshot();
  });
});
