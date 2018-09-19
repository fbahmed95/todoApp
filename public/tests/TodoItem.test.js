import App from '../src/components/App';
import ListAllTodo from '../src/components/ListAllTodo';
import TodoItem from '../src/components/TodoItem';
import AddTodo from '../src/components/AddTodo';
import { mount } from '@vue/test-utils';

describe('TodoItem', () => {
  test('TodoItem is a Vue instance', () => {
    const wrapper = mount(TodoItem, {
      propsData: {
        todo: {id: 1, description: 'task', done: false }
      }
    });
   expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

describe('TodoItem', () => {
  test('input is todo.description', () => {
    const wrapper = mount(TodoItem, {
      propsData: {
        todo: {id: 1, description: 'task', done: false }
      }
    });
    const textInput = wrapper.find('input[type="text"]');
    textInput.element.value = 'some value'; // input element value is changed, v-model is not
    textInput.trigger('input'); // v-model updated
    expect(wrapper.vm.todo.description).toBe('some value');
  });
});

describe('TodoItem', () => {
  test('checkbox is todo.done', () => {
    const wrapper = mount(TodoItem, {
      propsData: {
        todo: {id: 1, description: 'task', done: false }
      }
    });
    const checkboxInput = wrapper.find('input[type="checkbox"]');
    checkboxInput.setChecked()

    expect(wrapper.vm.todo.done).toBe(true);
  });
});
