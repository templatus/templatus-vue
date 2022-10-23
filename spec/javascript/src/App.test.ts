import { mount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';

import App from '@/App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: { template: 'Home page' },
    },
    {
      path: '/about',
      component: { template: 'About page' },
    },
  ],
});

describe('App', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let wrapper: any;

  beforeEach(() => {
    setActivePinia(createPinia());

    wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('recognizes online/offline', async () => {
    window.dispatchEvent(new window.Event('offline'));
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toContain('offline');

    window.dispatchEvent(new window.Event('online'));
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).not.toContain('offline');
  });
});
