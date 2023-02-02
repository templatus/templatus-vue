import { mount } from '@vue/test-utils';
import AboutPage from '@/pages/AboutPage.vue';
import * as Vue from 'vue';

describe('About', () => {
  test('matches snapshot', () => {
    const wrapper = mount(AboutPage, {});

    expect(wrapper.html().replace(Vue.version, '3.x.y')).toMatchSnapshot();
  });
});
