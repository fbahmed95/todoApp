import App from '../src/components/App';
import ListAllTodo from '../src/components/ListAllTodo';
import TodoItem from '../src/components/TodoItem';
import AddTodo from '../src/components/AddTodo';
import { mount } from '@vue/test-utils';

describe('AddTodo', () => {
  test('AddTodo is a Vue instance', () => {
    const wrapper = mount(AddTodo);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

describe('AddTodo', () => {
  test('inputVal is empty on creation ', () => {
    expect(typeof AddTodo.data).toBe('function');
    const defaultData = AddTodo.data()
    expect(defaultData.inputVal).toBe('');
  });
});

describe('AddTodo', () => {
  test('text input is inputVal', () => {
    const wrapper =  mount(AddTodo);
    const textInput = wrapper.find('input[type="text"]');
    textInput.element.value = 'some value'; // input element value is changed, v-model is not
    textInput.trigger('input'); // v-model updated
    expect(wrapper.vm.inputVal).toBe('some value');
  });
});

describe('AddTodo', () => {
  test('on click eventually fires off clearTodo()', () => {
    const wrapper =  mount(AddTodo);
    const textInput = wrapper.find('input[type="text"]');
    textInput.element.value = 'some value'; // input element value is changed, v-model is not
    textInput.trigger('input'); // v-model updated
    expect(wrapper.vm.inputVal).toBe('some value');
    const addButton = wrapper.find('button');
    addButton.trigger('click');
    expect(wrapper.vm.inputVal).toBe('');
  });
});
