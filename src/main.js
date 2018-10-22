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
import Header from './components/header2'

import 'muse-ui/lib/styles/base.less';
import {
  AppBar,
  AutoComplete,
  Button,
  Helpers,
  Icon,
  List,
  LoadMore,
  Popover,
  Progress,
  Snackbar,
  TextField,
  Form,
  Radio,
  Select,
  Picker,
  DateInput,
  Card,
  Avatar
} from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';

Vue.use(AppBar);
Vue.use(AutoComplete);
Vue.use(Button);
Vue.use(Helpers);
Vue.use(Icon);
Vue.use(List);
Vue.use(LoadMore);
Vue.use(Popover);
Vue.use(Progress);
Vue.use(Snackbar);
Vue.use(TextField);
Vue.use(Form);
Vue.use(Radio);
Vue.use(Select);
Vue.use(DateInput);
Vue.use(Card);
Vue.use(Avatar);
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

Vue.component('Header',Header)

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
