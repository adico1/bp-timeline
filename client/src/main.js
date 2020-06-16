import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';
import EyeOutlineIcon from 'vue-material-design-icons/EyeOutline.vue';
import CloseCircleOutline from 'vue-material-design-icons/CloseCircleOutline.vue';
import DeleteIcon from 'vue-material-design-icons/Delete.vue';
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'normalize.css';
import 'vue-material-design-icons/styles.css';

Vue.config.productionTip = false;
Vue.component('magnify-icon', MagnifyIcon);
Vue.component('eye-outline-icon', EyeOutlineIcon);
Vue.component('close-circle-outline', CloseCircleOutline);
Vue.component('delete-icon', DeleteIcon);
Vue.component('chevron-down-icon', ChevronDownIcon);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
