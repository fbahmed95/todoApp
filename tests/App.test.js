import App from '../public/src/components/App'
import { mount } from '@vue/test-utils'

describe('App', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(App);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
