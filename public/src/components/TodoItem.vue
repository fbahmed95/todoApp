<template>

  <div class="todo-item-input-group">
    <a v-on:click="(todo.important = !todo.important), updateTodo(todo)">
                <template v-if="todo.important"><font-awesome-icon :icon="['fas', 'star']" class="important"/></template>
                <template v-else><font-awesome-icon :icon="['far', 'star']" class="important"/></template>
    </a>
    <form class="todo-item-form">
    <!-- PUT request for changing whether a todo item is done -->
    <input type="checkbox" class="todo-checkbox" v-model="todo.done" :checked="todo.done" :value="todo.done" v-on:change="updateTodo(todo)" title="Mark as done?"/>
    </form>
    <!-- PUT request for changing text of todo item -->
    <input type="text" class="black" :class="todo.done?'todo__done':''" v-model="todo.description" @keyup.enter="updateTodo(todo)">
    <!-- DELETE request for deleting todo item -->
    <button class="btn round-btn" v-on:click="deleteTodo(todo.id)">X</button>
  </div>

</template>

<script>
  import axios from 'axios';
  import bus from './../bus.js'

    export default {
        props: ['todo'],
        data() {
            return {
            }
        },
        created: function () {
        },
        methods: {
          updateTodo(todo) {
            console.log(todo);
            let id = todo.id;
            let uri = 'http://localhost:3000/todos/' + id;
            axios.put(uri, todo).then((response) => {
              this.refreshTodo();
            }).catch((error) => {
                console.log(error);
            });
          },
          deleteTodo(id) {

              let uri = 'http://localhost:3000/todos/' + id;
              console.log(uri);
              axios.delete(uri);

              this.refreshTodo();

          },
          refreshTodo() {
            bus.$emit("refreshTodo");
          }

        }
    }
</script>

<style>
.todo-item-form{
  height: 20px;
}
.black{
  color: black;
}
.todo__done {
    text-decoration: line-through !important
}
.todo-item-input-group {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin: 5px;
  padding: 5px;
  border-bottom: solid;
  border-color: #aea4e3;
  border-width: thin;
}
.todo-checkbox {
  margin-right: 10px;
}
.round-btn{
  border-radius: 50%;
}
.important{
margin-right: 10px;
}
.important:hover{
  color: #ffca1c;
  cursor: pointer;
}
</style>
