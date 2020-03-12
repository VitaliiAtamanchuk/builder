<template lang="html">
  <v-expansion-panel>

    <v-expansion-panel-header class='text-uppercase subtitle-1 font-weight-bold'>
      Props
      <template v-slot:actions><v-icon color="">$expand</v-icon></template>
    </v-expansion-panel-header>
    <v-divider />

    <v-expansion-panel-content class='mt-4'>
      <div v-for="prop in addedProps" :key='prop.name'>

        <v-layout align-center class='mt-2'>
          <span class='font-weight-medium subtitle-2'>{{prop.name}}</span>
          <v-btn-toggle @change='setPropValueToNull(prop.name)' v-model="prop.isRaw" class='ml-1 white--text' dense mandatory borderless tile active-class='primary'>
            <v-btn small :value="true">Raw</v-btn>
            <v-btn small :value="false">Var</v-btn>
          </v-btn-toggle>
          <v-spacer/>
          <v-btn @click='removeProp(prop.name)' icon color=''><v-icon>mdi-close</v-icon></v-btn>
        </v-layout>

        <div v-if='prop.isRaw'>
          <v-layout align-center>
            <v-label>Type:</v-label>
            <v-btn-toggle @change='setPropValueToNull(prop.name)' class='ml-1 white--text' dense v-model="prop.currentType" mandatory borderless rounded active-class='primary'>
              <v-btn small v-for='type in prop.type' :key="type" :value="type">{{type}}</v-btn>
            </v-btn-toggle>
          </v-layout>

          <v-layout align-baseline class='my-2'>
            <v-label>Value:</v-label>
            <v-text-field @input='setPropValue(prop.name, $event)' v-if='prop.currentType === "string"' class='ml-4' hide-details dense :value='prop.value' outlined />
            <v-text-field @input='setPropValue(prop.name, $event)' v-else-if='prop.currentType === "number"' type='number' hide-details class='ml-4' dense :value='prop.value' outlined />
            <v-radio-group @change='setPropValue(prop.name, $event)' v-else-if='prop.currentType === "boolean"' class='mt-0 ml-4' hide-details color='primary' :value='prop.value' row>
              <v-radio color='primary' label="True" :value="true"/>
              <v-radio color='primary' label="False" :value="false"/>
            </v-radio-group>
            <span v-else-if='prop.currentType === "array"'>{{prop.value}}</span>
            <span v-else-if='prop.currentType === "object"'>{{prop.value}}</span>
            <v-textarea v-else hide-details class='ml-4' dense :value='prop.value' outlined rows='2' />
          </v-layout>
        </div>
        <div v-else>
          <v-autocomplete :value='prop.value' @input='setPropValue(prop.name, $event)' class='mt-2' label='Var' outined dense hide-details outlined :items='varItems' />
        </div>
        <v-divider/>

      </div>

      <v-layout class='mt-5'>
        <v-autocomplete ref='addPropField' @change='addProp' @keyup.enter='addProp' item-value="name" item-text="name" v-model='newProp' :items='propsComboboxItems' label='Prop name' dense outlined return-object>
          <template v-slot:item="{ item }">
            <v-layout row class='py-2'>
              <v-flex xs6 md4>
                <div class='overline grey--text text--darken-3 text-capitalize'>Name</div>
                <span class='item-val name-val'>{{item.name}}</span>
              </v-flex>
              <v-flex xs6 md3 v-if='item.type' class='text-xs-right'>
                <div class='overline grey--text text--darken-3 text-capitalize'>Type</div>
                <span class='item-val'>{{printType(item.type)}}</span>
              </v-flex>
              <v-spacer />
              <v-flex xs6 md5 v-if='item.default' class='text-md-right'>
                <div class='overline grey--text text--darken-3 text-capitalize'>Default</div>
                <span class='item-val'>{{item.default}}</span>
              </v-flex>
            </v-layout>
          </template>
        </v-autocomplete>
      </v-layout>
    </v-expansion-panel-content>

  </v-expansion-panel>
</template>

<script>
import * as _ from 'lodash'
import ProjectStore from '@/projectStore'

export default {
  data () {
    return {
      newProp: null
    }
  },
  computed: {
    selectedEl: () => ProjectStore.store.selectedEl,
    selectedPage: () => ProjectStore.store.selectedPage,
    addedProps () {
      return Object.values(_.pickBy(this.selectedEl.props, prop => prop.hasOwnProperty('value')))
    },
    propsComboboxItems () {
      return Object.values(this.selectedEl.props)
    },
    varItems () {
      return Object.keys(this.selectedPage.data)
    }
  },
  methods: {
    addProp () {
      if (this.newProp) {
        let value = null
        if (this.newProp.default === 'false') value = true
        ProjectStore.setProp(this.newProp.name, value)
        this.$refs.addPropField.blur()
        this.newProp = {}
      }
    },
    printType (type) {
      if (Array.isArray(type)) {
        return type.join(' | ')
      } else {
        return type
      }
    },
    setPropValueToNull (name) {
      ProjectStore.setProp(name, null)
    },
    setPropValue (name, value) {
      ProjectStore.setProp(name, value)
    },
    removeProp (name) {
      ProjectStore.removeProp(name)
    }
  }
}
</script>

<style lang="css">
.name-val {
  color: #d63200;
}
.item-val {
  font-family: "Roboto Mono", monospace;
  font-weight: 600;
  font-size: 14px;
}
</style>
