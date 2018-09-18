'use strict'
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App.vue';

// creating app...
new Vue({
  el: 'app',
  created: function () {
    console.log('created')
  },
  components: {App},
  methods: {}
})
