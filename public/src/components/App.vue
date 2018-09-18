<template>
  <div id="app">
    <div class="todo-container">
    <span id="date-container">{{moment(date).format('MM/DD/YYYY')}}</span>
    <!-- List of all todos -->
    <list-all-todo></list-all-todo>
    <!-- Create a todo item -->
    <add-todo></add-todo>
    </div>
  </div>
</template>


<script>
  import AddTodo from './AddTodo.vue';
  import ListAllTodo from './ListAllTodo.vue';
  import moment from 'moment';
  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {
      AddTodo,
      ListAllTodo
    },
    methods: {
      moment: function () {
        return moment();
      }
    },
  }
</script>


<style>
  .todo-container{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 400px;
    margin: auto;
    margin-top: 100px;
    border-radius: 20px;
    background-color: #fcfcff;
    box-shadow: 10px 5px 34px #949494;
  }
  #date-container{
    display: flex;
    align-self: center;
    font-size: 34px;
    margin-top: 10px;
    color: #aea4e3;
  }
  body{
    background: linear-gradient(90deg, #aea4e3, #d3ffe8);
    font-family: 'Roboto', sans-serif;
  }
</style>
