<template lang="html">
  <div class='ma-4'>

    <v-text-field v-model='search' class='mb-3' hide-details filled prepend-inner-icon='mdi-magnify' label="Search" clearable dense/>

    <draggable
      @start='start'
      @end='end'
      :list="Object.values(filteredElements)"
      :clone="clone"
      class="dragArea"
      :group= "{ name:'builder', pull:'clone', put:false }"
      :sort="false">
      <v-btn
        dark
        tile
        small
        color='grey darken-1'
        class='px-0 pr-4 mx-2 my-1 text-capitalize font-weight-bold'
        v-for="val, key in filteredElements"
        :key="key"
        :title='val.name'
        @click="addEl(val)">
        <v-icon class='mr-2'>mdi-drag-vertical</v-icon>
        {{val.name}}
      </v-btn>
    </draggable>

  </div>
</template>

<script>
import shortid from 'shortid'
import * as _ from 'lodash'
import vuetifyEls from '@/vuetifyMetadata'
import ProjectStore from '@/projectStore'
import draggable from 'vuedraggable'

export default {
  components: {draggable},
  data () {
    return {
      search: '',
      elements: []
    }
  },
  created () {
    this.elements = {
      text: {isText: true, name: 'Text', id: shortid.generate(), text: 'Text', children: []},
      div: this.createEl('div', 'Div'),
      span: this.createEl('span', 'Span'),
      h1: this.createEl('h1', 'H1'),
      h2: this.createEl('h2', 'H2'),
      h3: this.createEl('h3', 'H3'),
      h4: this.createEl('h4', 'H4'),
      h5: this.createEl('h5', 'H5'),
      h6: this.createEl('h6', 'H6'),
      strong: this.createEl('strong', 'Strong'),
      'router-view': this.createRouterEl('router-view', 'Router View'),
      'router-link': this.createRouterEl('router-link', 'Router Link'),
      ...this.getVuetifyEls()
    }
  },
  computed: {
    filteredElements () {
      return _.pickBy(this.elements, (value, key) => {
        return key.includes(this.search) || !this.search
      })
    }
  },
  methods: {
    clone(el) {
      if (el.isText) return {id: shortid.generate(), ..._.cloneDeep(el)}
      let newEl = {id: shortid.generate(), ...el}
      newEl.children = [{isText: true, name: 'Text', id: shortid.generate(), text: newEl.name, children: []}]
      return _.cloneDeep(newEl)
    },
    addEl (el) {
      if (el.isText) return {id: shortid.generate(), ..._.cloneDeep(el)}
      let newEl = {id: shortid.generate(), ...el}
      newEl.children = [{isText: true, name: 'Text', id: shortid.generate(), text: newEl.name, children: []}]
      ProjectStore.store.selectedPage.elements.push(_.cloneDeep(newEl))
    },
    getCompColor (el) {
      if (el.isPlain) {
        return 'green'
      } else if (el.isText) {
        return 'red'
      }
      return 'blue'
    },
    createEl (html, name) {
      return {
        isPlain: true,
        tag: html,
        name: name,
        text: name,
        for: null,
        aliases: [],

        props: {},
        classes: [],
        children: [],
        style: {}
      }
    },
    createRouterEl (html, name) {
      let el = this.createEl(html, name)
      el.isRoute = true
      return el
    },
    getVuetifyEls () {
      let retVal = {}
      for (let [key, val] of Object.entries(vuetifyEls)) {
        const name = key.startsWith('v-') ? _.startCase(key.substring(2)) : key
        const props = val.hasOwnProperty('props')
          ? val.props.reduce((retVal, prop) => {
            const type = Array.isArray(prop.type) ? prop.type : [prop.type]
            retVal[prop.name] = {
              ...prop,
              type,
              currentType: type[0]
            }
            return retVal
          }, {})
          : {}
        retVal[key] = {
          name,
          text: name + ': ' + key,
          tag: key,
          for: null,
          aliases: [],

          props,
          classes: [],
          children: [],
          style: {}
        }
      }
      return retVal
    },
    start () {},
    end () {}
  }
}
</script>

<style lang="css">
</style>
