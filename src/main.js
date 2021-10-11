import Vue from 'vue'
import App from './App.vue'
import VueAnimateOnScroll from 'vue-animate-onscroll'
import Clipboard from 'v-clipboard'
import VScrollLock from 'v-scroll-lock'
import VueEllipseProgress from 'vue-ellipse-progress';

Vue.use(VScrollLock)
Vue.use(VueAnimateOnScroll)
Vue.use(Clipboard)
Vue.use(VueEllipseProgress);

var VueScrollTo = require('vue-scrollto');
// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 1500,
  easing: "ease-in-out",
  offset: -100,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
