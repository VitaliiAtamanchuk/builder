import Vue from 'vue'
import * as _ from 'lodash'
import 'vuetify/dist/vuetify.min.css'
import Vuetify, * as components from 'vuetify/lib'

Vue.use(Vuetify, {
  components: _.pickBy(components, (value, key) => {
    return key.startsWith('V')
  })
})

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#1492E6',
      }
    }
  }
})
