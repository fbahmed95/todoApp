<template>
  <div id="form-container">
    <form class="form">
      <input type="text" class="input" placeholder="enter todo" v-model="inputVal"/>
      <!-- POST request to add a todo item -->
      <button class="btn" type="submit" v-on:click="addTodo($event)">Add</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import bus from "./../bus.js";

  export default {
    data() {
      return {
        inputVal: ''
      }
    },
    methods: {
      addTodo(event) {
        if (event) event.preventDefault();
        let url = 'http://localhost:3000/todos';
        let param = {
          description: this.inputVal,
          done: 0
          };
        axios.post(url, param).then((response) => {
          this.refreshTodo();
        }).catch((error) => {
          console.log(error);
        })
        this.clearTodo();

      },
      clearTodo() {
        this.inputVal = '';
      },
      refreshTodo() {
        bus.$emit("refreshTodo");
      }
    }
  }
</script>

<style>
  #form-container{
    display: flex;
    width: 80%;
    align-self: center;
    margin: 10px;
    font-family: inherit;
  }
  form{
    width: 100%;
  }
  .form{
    display: flex;
    justify-content: center;
  }
  input{
    border: none;
    background-color: transparent;
    border-color: transparent;
  }
  .input{
    padding-left: 10px;
  }
  *:focus {
    outline: none;
  }
  button{
    width: 30%;
    color: #aea4e3;
    border-color: #aea4e3;
    border-weight: thin;
    border-style: solid;
  }
  button:hover{
    color: white;
    background-color: #aea4e3;
    cursor: pointer;
  }
</style>
