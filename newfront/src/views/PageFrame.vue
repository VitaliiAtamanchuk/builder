<script>
import Vue from 'vue'

export default {
  render(h) {
    return  h('iframe', {
    	on: {load: this.renderChildren},
      style: {height: '100%', width: '100%'},
      attrs: {frameborder: 0}
    })
  },
  beforeUpdate() {
    this.iApp.children = Object.freeze(this.$slots.default)
  },
  methods: {
    renderChildren () {
      const children = this.$slots.default
      const el = document.createElement('DIV')
      const body = this.$el.contentDocument.body
      body.appendChild(el)

      this.iApp = new Vue({
      	name: 'iApp',
        data: { children: Object.freeze(children) },
        render(h) { return h('div', this.children) }
      })
      this.iApp.$mount(el)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
