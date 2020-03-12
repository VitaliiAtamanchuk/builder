<script>
import * as _ from 'lodash'
import store from '@/store'
import ProjectStore from '@/projectStore'

export default {
  props: {
    'el':{},
  },
  name: 'CanvasEl',
  render (createElement) {
    return this.createEl(this.el, createElement)
  },
  methods: {
    createEl (el, createElement) {
      if (el.isText) return this.getTextNode(el)

      let data = {
        attrs: { id:el.id },
        style: _.cloneDeep(el.style),
        'class': [..._.cloneDeep(el.classes)],
        props: this.getElProps(el),
        on: {
          click: (e) => {
            // ProjectStore.selectedEl = el
            ProjectStore.selectEl(el)
          }
        }
      }

      return createElement(el.tag, data, this.getChildren(el, createElement))
    },

    getChildren (el, createElement) {
      let children = []
      // const aliases = el.for && el.for.alias && el.for.name ? {el.for.alias : } : []
      el.children.forEach(child => {
        children.push(createElement('CanvasEl',{props:{ el:child }}))
      })
      return children
    },

    getTextNode (el) {
      if (el.hasOwnProperty('children') && el.children.length) {
        return this._v(el.children[0].text)
      }
      return this._v(el.text)
    },

    getElProps (el) {
      const filteredProps = _.pickBy(el.props, prop => prop.hasOwnProperty('value') && prop.value !== null)
      return _.cloneDeep(_.mapValues(
        filteredProps, (prop) => {
          if (prop.isRaw) {
            return prop.value
          } else {
            if (store.state.selectedPage.data.hasOwnProperty(prop.value)) {
              return store.state.selectedPage.data[prop.value]
            } else if (el.aliases.hasOwnProperty(prop.value)) {
              return el.aliases[prop.value]
            }
          }
        }
      ))
    }

  }
}
</script>

<style lang="css">
</style>
