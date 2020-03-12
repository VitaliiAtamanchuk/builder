<script>
import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'
import ProjectStore from '@/projectStore'
import CanvasEl from './CanvasEl'
import SandboxBase from './SandboxBase'

Vue.use(Router)
Vue.use(Vuetify)

const getRoutes = (pages) => {
  return pages.map(page => {
    return {
      path: page.path,
      name: page.name,
      component: {
        render (h) {
          let children = page.elements.map(el => {
            return h(CanvasEl, { props:{el} })
          })
          return h('div', children)
        }
      },
      children: getRoutes(page.children)
    }
  })
}

let presetModule = null
const setPresetModule = async () => {
  const presetName = ProjectStore.store.project.data.preset
  if (presetName) {
    const module = await import(`vue-cli-plugin-vuetify-preset-${presetName}/preset`)
    presetModule = module.preset
  } else {
    presetModule = null
  }
}

export default {
  render(h) {
    return  h('iframe', {
    	on: {load: this.renderChildren},
      style: {height: '100%', width: '100%'},
      attrs: {frameborder: 0}
    })
  },
  beforeUpdate() {
    //freezing to prevent unnessessary Reactifiation of vNodes
    // this.iApp.children = Object.freeze(this.$slots.default)
  },
  methods: {
    renderChildren() {
      const children = this.$slots.default
      this.$root.$canvasDoc = this.$el.contentDocument
      const body = this.$el.contentDocument.body
      const head = this.$el.contentDocument.head
      const style = this.$el.contentDocument.createElement('style')
      style.appendChild(this.$el.contentDocument.createTextNode(this.getParentDocumentStyles()))
      head.appendChild(style)

      const el = document.createElement('DIV')
      body.appendChild(el)

      const vuetify = new Vuetify({})
      const router = new Router({
        mode: 'abstract',
        base: window.location.href,
        routes: getRoutes(ProjectStore.store.project.data.pages)
      })

      const iApp = new Vue({
      	name: 'iApp',
        router,
        vuetify: new Vuetify(),
        render: h => h(SandboxBase)
        //freezing to prevent unnessessary Reactifiation of vNodes
        // data: { children: Object.freeze(children) },
        // render (h) {
        //   return h('v-app', { attrs:{ id:'app' } }, [h('router-view')])
        // }
        // render(h) { return h('div', this.children) }
      })
      iApp.$mount(el)
      this.iApp = iApp
      this.$root.$sandboxRouter = this.iApp.$router
    },
    getParentDocumentStyles () {
      var css= [];
      // for (var sheeti= 0; sheeti<document.styleSheets.length; sheeti++) {
      for (var sheeti= 0; sheeti<document.getElementsByTagName('style').length; sheeti++) {
        var sheet= document.getElementsByTagName('style')[sheeti].sheet;
        var rules= ('cssRules' in sheet)? sheet.cssRules : sheet.rules;
        for (var rulei= 0; rulei<rules.length; rulei++) {
          var rule= rules[rulei];
          if ('cssText' in rule) {
            // if (rule.cssText.includes('red')) {
            //   console.log(rule.cssText)
            // }
            css.unshift(rule.cssText);
          }
          else {
            css.unshift(rule.selectorText+' {\n'+rule.style.cssText+'\n}\n');
          }
        }
      }
      return css.join('\n');
    },
    setStyles (smallHead) {
      var linkrels = window.top.document.getElementsByTagName('link');
      // my head
      var small_head = smallHead  // document.getElementsByTagName('head').item(0);
      // loop through parent's links
      for (var i = 0, max = linkrels.length; i < max; i++) {
        // are they stylesheets
        if (linkrels[i].rel && linkrels[i].rel == 'stylesheet') {
           // create new element and copy all attributes
          var thestyle = document.createElement('link');
          var attrib = linkrels[i].attributes;
          for (var j = 0, attribmax = attrib.length; j < attribmax; j++) {
            thestyle.setAttribute(attrib[j].nodeName, attrib[j].nodeValue);
          }

           // add the newly created element to the head
          small_head.appendChild(thestyle);

        }
      }
    }
  }
}
</script>

<style lang="css">
#canvas {
  background-color: white;
  height: 100%;
  width: 100%;
}
#inspire {
  height: 100%;
  width: 100%;
}
html {
  overflow-y: auto !important;
}
</style>
