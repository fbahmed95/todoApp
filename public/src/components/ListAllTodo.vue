<template>
    <div>
        <!-- Show all todo items by looping through all of the todos-->
        <div class="todolist-container" v-show="todos.length>0">
            <div v-for="todo in todos">
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
        <!-- Filter todoItems -->
        <button class="btn important-btn" v-on:click="(important = !important), fetchTodo()">
                {{important ? 'show all' : 'show important only'}}
        </button>
    </div>
</template>

<script>
    import TodoItem from './TodoItem.vue';
    import axios from 'axios';
    import bus from './../bus.js'
    export default {
        data() {
            return {
                todos: [],
                important: false
            }
        },
        created: function () {
            this.fetchTodo();
            this.listenToEvents();
        },
        methods: {
            fetchTodo() {
                let uri = 'http://localhost:3000/todos';
                var that = this;
                axios.get(uri).then((response) => {
                    console.log(response.data);
                    if(this.important == true){
                      that.todos = [];
                      response.data.forEach(function(todo){
                        if(todo.important == true){
                          that.todos.push(todo);
                        }
                      });
                    } else {
                      this.todos = response.data;
                    }
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
  .important-btn{
  margin: auto;
  margin-top: 10px;
  width: 70%;
  display: flex;
  justify-content: center;
  }
</style>
