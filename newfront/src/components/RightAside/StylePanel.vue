<template lang="html">
  <v-expansion-panel>
    <v-expansion-panel-header class='text-uppercase subtitle-1 font-weight-bold'>
      Style
      <template v-slot:actions><v-icon color="">$expand</v-icon></template>
    </v-expansion-panel-header>
    <v-divider />

    <v-expansion-panel-content>
      <v-switch hide-details v-if='hasDarkMode' v-model='darkMode' class='pt-0 mb-4' color='black' label="Dark mode"/>

      <h3 class='mt-3 mb-2 subtitle-1 grey--text text--darken-1 font-weight-bold'>Colors</h3>


      <v-autocomplete v-model='color' class='mb-5' hide-details prepend-inner-icon='mdi-format-color-fill' clearable dense outlined label='Color' :items="colors" return-object>
        <template v-slot:selection="{ item }">
          <span>
            <v-list-item-avatar size='18' :style="{ 'background-color':item.color }" class="font-weight-light white--text mr-1 my-0" />
            {{item.text}}
          </span>
        </template>
        <template v-slot:item="{ item }">
          <v-list-item-avatar :style="{ 'background-color':item.color }" class="headline font-weight-light white--text">
            {{ item.text.charAt(0) }}
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{item.text}}</v-list-item-title>
          </v-list-item-content>
        </template>
      </v-autocomplete>

      <v-autocomplete class='mb-5' hide-details prepend-inner-icon='mdi-format-color-text' v-model='textColor' clearable dense outlined label='Text color' :items="colors" return-object>
        <template v-slot:selection="{ item }">
          <span>
            <v-list-item-avatar size='18' :style="{ 'background-color':item.color }" class="font-weight-light white--text mr-1 my-0" />
            {{item.text}}
          </span>
        </template>
        <template v-slot:item="{ item }">
          <v-list-item-avatar :style="{ 'background-color':item.color }" class="headline font-weight-light white--text">
            {{ item.text.charAt(0) }}
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{item.text}}</v-list-item-title>
          </v-list-item-content>
        </template>
      </v-autocomplete>

      <h3 class='mb-2 subtitle-1 grey--text text--darken-1 font-weight-bold'>Font</h3>
      <v-autocomplete class='mb-5' hide-details v-model='fontSize' clearable dense outlined label='Font size' :items="fontSizes" return-object>
        <template v-slot:item="{ item }">
          <span :class='item.value'>{{item.text}}</span>
        </template>
      </v-autocomplete>
      <v-autocomplete hide-details v-model='fontWeight' clearable dense outlined label='Font weight' :items="fontWeights" return-object>
        <template v-slot:item="{ item }">
          <span :class='item.value'>{{item.text}}</span>
        </template>
      </v-autocomplete>

    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import ProjectStore from '@/projectStore'
import * as _ from 'lodash'
import colors from 'vuetify/lib/util/colors'

export default {
  data () {
    return {
      fontSizes: [
        { value:'display-4', text:'Display 4' },
        { value:'display-3', text:'Display 3' },
        { value:'display-2', text:'Display 2' },
        { value:'display-1', text:'Display 1' },
        { value:'headline', text:'Headline' },
        { value:'title', text:'Title' },
        { value:'subtitle-1', text:'Subtitle 1' },
        { value:'subtitle-2', text:'Subtitle 2' },
        { value:'body-1', text:'Body 1' },
        { value:'body-2', text:'Body 2' },
        { value:'caption', text:'Caption' },
        { value:'overline', text:'Overline' }
      ],
      fontWeights: [
        { value:'font-weight-light', text: 'Light' },
        { value:'font-weight-thin', text: 'Thin' },
        { value:'font-weight-regular', text: 'Regular' },
        { value:'font-weight-medium', text: 'Medium' },
        { value:'font-weight-bold', text: 'Bold' },
        { value:'font-weight-black', text: 'Black' },
      ],
      colorClasses: new Set(),
      textColorClasses: new Set()
    }
  },
  computed: {
    darkMode: {
      get () {
        const props = ProjectStore.store.selectedEl.props
        return props.hasOwnProperty('dark')
          ? props.dark.value : false
      },
      set (val) {
        val !== null
          ? ProjectStore.setProp('dark', val)
          : ProjectStore.removeProp('dark')
      }
    },
    colors () {
      let retVal = []
      for (const colorName in colors) {
        if (colorName === 'shades') {
          retVal.push(this.handleColor(colorName, 'white'))
          retVal.push(this.handleColor(colorName, 'black'))
          retVal.push(this.handleColor(colorName, 'transparent'))
          continue
        }
        for (const modifier in colors[colorName]) {
          retVal.push(this.handleColor(colorName, modifier))
        }
      }
      return retVal
    },
    color: {
      get () {
        let cls = []
        ProjectStore.store.selectedEl.classes.findIndex(c => {
          if (this.colorClasses.has(c)) cls.push(c)
        })
        return this.colors.find( color => _.isEqual(_.sortBy(cls), _.sortBy(color.className)) )
      },
      set (val) {
        let delIndices = []
        ProjectStore.store.selectedEl.classes.findIndex(c => {
          if (this.colorClasses.has(c)) delIndices.push(c)
        })
        delIndices.map(cl => ProjectStore.removeClassByName(cl))
        if (!!val) val.className.map(cl => ProjectStore.addClass(cl))
      }
    },
    textColor: {
      get () {
        let cls = []
        ProjectStore.store.selectedEl.classes.findIndex(c => {
          if (this.textColorClasses.has(c)) cls.push(c)
        })
        return this.colors.find( color => _.isEqual(_.sortBy(cls), _.sortBy(color.textClassName)) )
      },
      set (val) {
        let delIndices = []
        ProjectStore.store.selectedEl.classes.findIndex(c => {
          if (this.textColorClasses.has(c)) delIndices.push(c)
        })
        delIndices.map(cl => ProjectStore.removeClassByName(cl))
        if (!!val) val.textClassName.map(cl => ProjectStore.addClass(cl))
      }
    },
    hasDarkMode () {return !!ProjectStore.store.selectedEl.props.hasOwnProperty('dark')},
    fontSize: {
      get () {
        const fontSizeClasses = this.fontSizes.map(size => size.value)
        return ProjectStore.store.selectedEl.classes.find(c => fontSizeClasses.includes(c))
      },
      set (val) {
        const fontSizeClasses = this.fontSizes.map(size => size.value)
        const delIndex = ProjectStore.store.selectedEl.classes.findIndex(c => fontSizeClasses.includes(c))
        if (delIndex > -1) ProjectStore.removeClass(delIndex)
        if (!!val) ProjectStore.addClass(val.value)
      }
    },
    fontWeight: {
      get () {
        const fontWeightClasses = this.fontWeights.map(weight => weight.value)
        return ProjectStore.store.selectedEl.classes.find(c => fontWeightClasses.includes(c))
      },
      set (val) {
        const fontWeightClasses = this.fontWeights.map(weight => weight.value)
        const delIndex = ProjectStore.store.selectedEl.classes.findIndex(c => fontWeightClasses.includes(c))
        if (delIndex > -1) ProjectStore.removeClass(delIndex)
        if (!!val) ProjectStore.addClass(val.value)
      }
    }
  },
  methods: {
    handleColor (colorName, modifier) {
      let colorCls, textColorCls;
      if (['black', 'white', 'transparent'].includes(modifier)) {
        colorCls = [modifier]
        textColorCls = [modifier + "--text"]
      } else {
        colorCls = modifier === 'base'
        ? [_.kebabCase(colorName)] : [_.kebabCase(colorName), modifier.slice(0, -1) + "-" + modifier.slice(-1)]
        textColorCls = modifier === 'base'
        ? [_.kebabCase(colorName) + "--text"] : [_.kebabCase(colorName) + "--text", modifier.slice(0, -1) + "-" + modifier.slice(-1) + "--text"]
      }
      colorCls.map(item => this.colorClasses.add(item))
      textColorCls.map(item => this.textColorClasses.add(item))
      return {
        text: colorName + ' ' + modifier,
        className: colorCls,
        textClassName: textColorCls,
        value: colors[colorName][modifier],
        color: colors[colorName][modifier]
      }
    }
  }
}
</script>

<style lang="css">
</style>
