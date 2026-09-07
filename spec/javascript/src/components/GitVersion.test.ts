import { mount } from '@vue/test-utils';
import GitVersion from '@/components/GitVersion.vue';

describe('GitVersion', () => {
  test('matches snapshot', () => {
    const wrapper = mount(GitVersion, {
      props: {
        commitVersion: 'v0.0.1-123-7654321',
        commitTime: '2021-06-01T12:00:00+02:00',
      },
    });

    // timeago.js tags the element with the id of its internal timer, which
    // depends on how many timers ran before. Normalize it to keep the
    // snapshot stable.
    const html = wrapper.html().replace(/timeago-id="\d+"/, 'timeago-id="1"');
    expect(html).toMatchSnapshot();

    wrapper.unmount();
  });
});
