const mockSendClick = vi.fn();
const mockUnsubscribe = vi.fn();
const mockGetClicks = vi.fn();
const mockSubscribe = vi.fn();

vi.mock('@/stores/click', () => ({
  useClickStore: () => ({
    loaded: true,
    total: 42,
    items: [
      {
        created_at: '2021-05-23T09:27:21.497Z',
        ip: '1.2.3.4',
        user_agent: 'Vitest',
      },
    ],
    getClicks: mockGetClicks,
    subscribe: mockSubscribe,
    unsubscribe: mockUnsubscribe,
    sendClick: mockSendClick,
  }),
}));

import { mount } from '@vue/test-utils';
import Home from '@/pages/HomePage.vue';

describe('Home', () => {
  const wrapper = mount(Home, {
    props: {
      name: 'World',
    },
  });

  test('load clicks and subscribes', () => {
    expect(mockSubscribe).toHaveBeenCalled();
    expect(mockGetClicks).toHaveBeenCalled();
  });

  test('renders name', () => {
    const title = wrapper.find('h1')?.element?.textContent?.trim();
    expect(title).toEqual('Hello, World!');
  });

  test('renders text', () => {
    expect(wrapper.text()).toContain('Templatus is');
    expect(wrapper.text()).toContain('Latest clicks');
    expect(wrapper.text()).toContain('May 23, 2021');
    expect(wrapper.text()).toContain('Click me!');
  });

  test('executes sendClick', () => {
    const button = wrapper.find('button');
    button.trigger('click');

    expect(mockSendClick).toHaveBeenCalled();
  });

  test('unsubscribes on unmount', () => {
    wrapper.unmount();
    expect(mockUnsubscribe).toHaveBeenCalled();
  });
});
