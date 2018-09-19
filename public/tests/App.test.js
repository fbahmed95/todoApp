import App from '../src/components/App';
import ListAllTodo from '../src/components/ListAllTodo';
import TodoItem from '../src/components/TodoItem';
import AddTodo from '../src/components/AddTodo';
import { mount } from '@vue/test-utils';

describe('App', () => {
  test('App is a Vue instance', () => {
    const wrapper = mount(App);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

describe('App', () => {
  test('App contains ListAllTodo component and AddTodo component', () => {
    const wrapper = mount(App);
    expect(wrapper.contains(ListAllTodo)).toBeTruthy();
    expect(wrapper.contains(AddTodo)).toBeTruthy();
  });
});
