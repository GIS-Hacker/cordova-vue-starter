import Vue from 'vue'

if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

document.addEventListener('deviceready', () => {
  if (window.cordova) {
    Vue.cordova = Vue.prototype.$cordova = window.cordova
  }
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    template: '<App/>',
    components: { App: require('./App').default },
    router: require('./router').default,
    store: require('./store').default
  })
}, false)
