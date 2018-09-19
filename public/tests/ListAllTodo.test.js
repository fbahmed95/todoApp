import App from '../src/components/App';
import ListAllTodo from '../src/components/ListAllTodo';
import TodoItem from '../src/components/TodoItem';
import AddTodo from '../src/components/AddTodo';
import { mount } from '@vue/test-utils';

describe('ListAllTodo', () => {
  test('ListAllTodo is a Vue instance', () => {
    const wrapper = mount(ListAllTodo);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

describe('ListAllTodo', () => {
  test('checking number of todoitems', () => {
    const wrapper = mount(ListAllTodo);
    // todos[] is empty; message is displayed
    expect(wrapper.findAll(TodoItem).length).toBe(0);
    expect(wrapper.contains('strong')).toBeTruthy();
    // todos[] has 3 items
    wrapper.setData({ todos: ['a', 'b', 'c'] });
    expect(wrapper.findAll(TodoItem).length).toBe(3);

  });
});
