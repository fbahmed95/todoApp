'use strict'
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasFaStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fasFaStar);
library.add(farFaStar);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

// creating app...
new Vue({
  el: 'app',
  created: function () {
    console.log('created')
  },
  components: {App},
  methods: {}
})
