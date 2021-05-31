import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import messagePlugin from './utils/message.plugin'
import Loader from './components/Loader'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

Vue.config.productionTip = false

Vue.config.devtools = true

Vue.use(messagePlugin)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.env.VUE_APP_authDomain,
  databaseURL: process.env.VUE_APP_databaseURL,
  projectId: process.env.VUE_APP_projectId,
  storageBucket: process.env.VUE_APP_storageBucket,
  messagingSenderId: process.env.VUE_APP_messagingSenderId,
  appId: process.env.VUE_APP_appId,
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  }
})
