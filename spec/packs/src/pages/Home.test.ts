import { ref } from 'vue';

const mockSendClick = jest.fn();

jest.mock('@/use/clicks', () => ({
  __esModule: true,
  default: () => {
    return {
      sendClick: mockSendClick,
      receivedClicks: ref({
        total: 42,
        items: [
          {
            created_at: '2021-05-23T09:27:21.497Z',
            ip: '1.2.3.4',
            user_agent: 'Jest',
          },
        ],
      }),
    };
  },
}));

import { mount } from '@vue/test-utils';
import { store } from '@/store';
import Home from '@/pages/Home.vue';

describe('Home', () => {
  const wrapper = mount(Home, {
    props: {
      name: 'World',
    },
    global: {
      plugins: [store],
    },
  });

  test('renders name', () => {
    const title = wrapper.find('h1')?.element?.textContent?.trim();
    expect(title).toEqual('Hello World!');
  });

  test('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('executes sendClick', () => {
    const button = wrapper.find('button');
    button.trigger('click');

    expect(mockSendClick).toHaveBeenCalled();
  });
});
