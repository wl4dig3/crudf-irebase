import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'



Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(IconsPlugin)
Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: "AIzaSyBkKjBLkNO6J0A5iRwfwnb5nsTmN_2PhwI",
  authDomain: "clase-29-dic.firebaseapp.com",
  projectId: "clase-29-dic",
  storageBucket: "clase-29-dic.appspot.com",
  messagingSenderId: "645659300973",
  appId: "1:645659300973:web:c7a47c89893f16be0d9b64"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

