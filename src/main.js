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
  apiKey: 'AIzaSyBGWgg_o2Aw7U64laKbTueQFKRkmBKW8w0',
  authDomain: 'ame-street-food.firebaseapp.com',
  databaseURL:
    'https://ame-street-food-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'ame-street-food',
  storageBucket: 'ame-street-food.appspot.com',
  messagingSenderId: '987015360865',
  appId: '1:987015360865:web:cc9fab067b50f0401bd520',
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
