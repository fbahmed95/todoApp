'use strict'

import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App.vue';

import moment from 'moment'

// used for date
Vue.prototype.moment = moment


// creating app...
new Vue({
  el: 'app',
  created: function () {
    console.log('created')
  },
  components: {App},
  methods: {}
})
