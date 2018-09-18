<template>
    <div>
        <!-- Show all todo items by looping through all of the todos-->
        <div class="todolist-container" v-show="todos.length>0">
            <div class="" v-for="todo in todos">
            <!-- Render a single todo component and bind the current todo object to it --> 
              <todo-item v-bind:todo="todo"></todo-item>
            </div>
        </div>
        <!-- If there are no todo items, let the user know -->
        <div class="todolist-container" v-show="todos.length==0">
            <p class="">
                <strong>All Caught Up</strong>
                <br/>
                You do not have any todo items</p>
        </div>
    </div>
</template>

<script>
    import TodoItem from './TodoItem.vue';
    import axios from 'axios';
    import bus from './../bus.js'
    export default {
        data() {
            return {
                todos: []
            }
        },
        created: function () {
            this.fetchTodo();
            this.listenToEvents();
        },
        methods: {
            fetchTodo() {
                let uri = 'http://localhost:3000/todos';
                axios.get(uri).then((response) => {
                    this.todos = response.data;
                });
            },
            refreshTodo() {
              bus.$emit("refreshTodo");
            },
            listenToEvents() {
                bus.$on('refreshTodo', ($event) => {
                    this.fetchTodo(); //update todo
                })
            }
        },
        components: {
          TodoItem
        },
    }
</script>

<style>
  .todolist-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  }
</style>
