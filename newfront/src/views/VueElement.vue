<script>
import * as _ from 'lodash'

export default {
  name: 'VueElement',

  props: {
    el: {type: Object}
  },

  render (createElement) {
    if (this.el.isText) return this._v(this.el.value)

    const name = this.el.tag
    const data = this.getData(this.el)
    const children = this.getChildren(createElement)
    return createElement(name, data, children)
  },

  methods: {
    getData (el) {
      return {
        attrs: { 'data-id':el.id },
        ...el.style && {style: _.cloneDeep(el.style)},
        ...el.classes && {'class': [..._.cloneDeep(el.classes)]},
      }
    },
    getChildren (createElement) {
      return this.el.children.map(child => {
        return createElement('VueElement', {props:{ el:child }} )
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
