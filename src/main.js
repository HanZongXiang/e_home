// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { $axios } from './utils'
import Toast from 'muse-ui-toast';
import store from './store'
import 'muse-ui-loading/dist/muse-ui-loading.css'
import MuseUILoading from 'muse-ui-loading'


import 'muse-ui/lib/styles/base.less';
import { Button, Alert, Dialog, Icon, TextField, Snackbar, Progress, Helpers } from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';

Vue.use(Button);
Vue.use(Icon);
Vue.use(Snackbar);
Vue.use(Progress);
Vue.use(Helpers);
Vue.use(Toast, {
  position: 'top',             
  time: 2000,                       
  closeIcon: 'close',              
  close: true,
  successIcon: 'check_circle',      
  infoIcon: 'info',                 
  warningIcon: 'priority_high',     
  errorIcon: 'warning'             
});
Vue.use(MuseUILoading)


Vue.config.productionTip = false
Vue.prototype.$axios = $axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
